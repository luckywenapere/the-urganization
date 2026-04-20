import { spawn, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { setTimeout as sleep } from "node:timers/promises";

const baseUrl = process.env.WAITLIST_SMOKE_URL ?? "http://127.0.0.1:3000";
const dialogSelector = '[role="dialog"][aria-label="Join the Urganize waitlist"]';
const waitTimeoutMs = 10_000;
const strictConsole = process.env.WAITLIST_SMOKE_STRICT_CONSOLE === "1";

function fail(message) {
  throw new Error(`Waitlist smoke test failed: ${message}`);
}

function findOnPath(command) {
  const lookup = process.platform === "win32" ? "where.exe" : "which";
  const result = spawnSync(lookup, [command], {
    encoding: "utf8",
    shell: false,
  });

  if (result.status !== 0) {
    return null;
  }

  return result.stdout
    .split(/\r?\n/)
    .map((item) => item.trim())
    .find(Boolean) ?? null;
}

function findBrowserPath() {
  if (process.env.CHROME_PATH) {
    return process.env.CHROME_PATH;
  }

  const fixedCandidates =
    process.platform === "win32"
      ? [
          "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
          "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
          "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
          "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
        ]
      : process.platform === "darwin"
        ? [
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
            "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
            "/Applications/Chromium.app/Contents/MacOS/Chromium",
          ]
        : [];

  const pathCandidates =
    process.platform === "win32"
      ? ["chrome.exe", "msedge.exe"]
      : ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "msedge"];

  return (
    fixedCandidates.find((candidate) => existsSync(candidate)) ??
    pathCandidates.map(findOnPath).find(Boolean) ??
    null
  );
}

function getOpenPort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => {
        if (!address || typeof address === "string") {
          reject(new Error("Could not reserve a local debugging port."));
          return;
        }

        resolve(address.port);
      });
    });
  });
}

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    fail(`${url} returned HTTP ${response.status}`);
  }

  return response.json();
}

async function waitForChrome(port) {
  let lastError;

  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const targets = await fetchJson(`http://127.0.0.1:${port}/json/list`);
      const page = targets.find(
        (target) => target.type === "page" && target.webSocketDebuggerUrl,
      );

      if (page) {
        return page.webSocketDebuggerUrl;
      }
    } catch (error) {
      lastError = error;
    }

    await sleep(100);
  }

  throw lastError ?? new Error("Chrome did not expose a page target.");
}

function parseWebSocketData(data) {
  if (typeof data === "string") {
    return JSON.parse(data);
  }

  if (data instanceof ArrayBuffer) {
    return JSON.parse(Buffer.from(data).toString("utf8"));
  }

  return JSON.parse(Buffer.from(data).toString("utf8"));
}

function formatRuntimeException(exceptionDetails = {}) {
  const exception = exceptionDetails.exception;
  const message =
    exception?.description ??
    exception?.value ??
    exceptionDetails.text ??
    "Runtime exception";
  const location =
    exceptionDetails.url && typeof exceptionDetails.lineNumber === "number"
      ? ` (${exceptionDetails.url}:${exceptionDetails.lineNumber + 1})`
      : "";

  return `${message}${location}`;
}

function createCdpClient(webSocketUrl) {
  if (typeof WebSocket !== "function") {
    fail("Node.js WebSocket is unavailable. Run this script with Node 22+.");
  }

  const webSocket = new WebSocket(webSocketUrl);
  let nextId = 0;
  const pending = new Map();
  const runtimeExceptions = [];

  const opened = new Promise((resolve, reject) => {
    webSocket.addEventListener("open", resolve, { once: true });
    webSocket.addEventListener("error", reject, { once: true });
  });

  webSocket.addEventListener("message", (event) => {
    const message = parseWebSocketData(event.data);

    if (message.method === "Runtime.exceptionThrown") {
      runtimeExceptions.push(formatRuntimeException(message.params?.exceptionDetails));
      return;
    }

    if (!message.id) {
      return;
    }

    const request = pending.get(message.id);
    if (!request) {
      return;
    }

    pending.delete(message.id);

    if (message.error) {
      request.reject(new Error(JSON.stringify(message.error)));
    } else {
      request.resolve(message.result);
    }
  });

  function send(method, params = {}) {
    const id = ++nextId;

    return new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject });
      webSocket.send(JSON.stringify({ id, method, params }));
    });
  }

  async function evaluate(expression) {
    const result = await send("Runtime.evaluate", {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });

    if (result.exceptionDetails) {
      fail(JSON.stringify(result.exceptionDetails));
    }

    return result.result.value;
  }

  async function waitFor(expression, label) {
    const startedAt = Date.now();

    while (Date.now() - startedAt < waitTimeoutMs) {
      const value = await evaluate(expression);

      if (value) {
        return value;
      }

      await sleep(100);
    }

    fail(`timed out waiting for ${label}`);
  }

  async function clickExpression(expression, label) {
    const rect = await evaluate(expression);

    if (!rect) {
      fail(`could not find ${label}`);
    }

    if (rect.tag !== "BUTTON") {
      fail(`${label} was covered by ${rect.tag ?? "an unknown element"}`);
    }

    await send("Input.dispatchMouseEvent", {
      type: "mouseMoved",
      x: rect.x,
      y: rect.y,
      button: "left",
    });
    await send("Input.dispatchMouseEvent", {
      type: "mousePressed",
      x: rect.x,
      y: rect.y,
      button: "left",
      clickCount: 1,
    });
    await send("Input.dispatchMouseEvent", {
      type: "mouseReleased",
      x: rect.x,
      y: rect.y,
      button: "left",
      clickCount: 1,
    });
  }

  return {
    opened,
    send,
    evaluate,
    waitFor,
    clickExpression,
    close() {
      webSocket.close();
    },
    assertNoRuntimeExceptions() {
      if (runtimeExceptions.length === 0) {
        return;
      }

      if (strictConsole) {
        fail(`browser runtime exceptions: ${runtimeExceptions.join("; ")}`);
      }

      console.warn(
        `WARN: browser runtime exceptions were observed while testing ${baseUrl}. ` +
          "Set WAITLIST_SMOKE_STRICT_CONSOLE=1 to fail on these.",
      );
      runtimeExceptions.length = 0;
    },
  };
}

async function navigateAndWait(client) {
  await client.send("Page.navigate", { url: baseUrl });
  await client.waitFor(
    `document.readyState === "complete" && document.body.innerText.includes("Your release deserves a process.")`,
    "homepage content",
  );
  await client.waitFor(
    `!document.querySelector("[data-nextjs-dialog], .nextjs-portal, .vite-error-overlay, #webpack-dev-server-client-overlay")`,
    "absence of framework error overlays",
  );
}

function buttonRectExpression(scopeExpression) {
  return `(() => {
    const scope = ${scopeExpression};
    if (!scope) return null;
    const button = [...scope.querySelectorAll("button")]
      .find((item) => item.innerText.trim() === "Join the waitlist");
    if (!button) return null;
    button.scrollIntoView({ block: "center", inline: "center", behavior: "instant" });
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const top = document.elementFromPoint(x, y);
    return {
      x,
      y,
      tag: top?.tagName ?? null,
      text: top?.innerText?.trim() ?? top?.ariaLabel ?? null
    };
  })()`;
}

async function assertButtonOpensDialog(client, scopeExpression, label) {
  await client.clickExpression(buttonRectExpression(scopeExpression), label);
  await client.waitFor(`Boolean(document.querySelector(${JSON.stringify(dialogSelector)}))`, `${label} dialog`);
  await client.assertNoRuntimeExceptions();
  console.log(`PASS: ${label} opens the waitlist dialog.`);
}

async function main() {
  const browserPath = findBrowserPath();

  if (!browserPath) {
    fail("Chrome, Edge, or Chromium was not found. Set CHROME_PATH to your browser executable.");
  }

  const port = await getOpenPort();
  const tempRoot = path.resolve(os.tmpdir());
  const userDataDir = path.join(tempRoot, `urganize-waitlist-smoke-${Date.now()}`);
  const chrome = spawn(browserPath, [
    "--headless=new",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--no-first-run",
    "--no-default-browser-check",
    "--window-size=1280,900",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    "about:blank",
  ]);

  let client;

  try {
    const webSocketUrl = await waitForChrome(port);
    client = createCdpClient(webSocketUrl);
    await client.opened;
    await client.send("Page.enable");
    await client.send("Runtime.enable");

    await navigateAndWait(client);
    await assertButtonOpensDialog(client, "document", "hero Join the waitlist button");

    await navigateAndWait(client);
    await assertButtonOpensDialog(
      client,
      'document.querySelector("#waitlist")',
      "final Join the waitlist button",
    );
  } finally {
    client?.close();
    chrome.kill();

    const resolvedUserDataDir = path.resolve(userDataDir);

    if (resolvedUserDataDir.startsWith(`${tempRoot}${path.sep}`)) {
      await sleep(200);
      await rm(resolvedUserDataDir, { recursive: true, force: true }).catch(() => {});
    }
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
