const posthogToken = process.env.NEXT_PUBLIC_POSTHOG_TOKEN;

function initPostHog() {
  if (!posthogToken) {
    return;
  }

  void import("posthog-js").then(({ default: posthog }) => {
    posthog.init(posthogToken, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      defaults: "2026-01-30",
    });
  });
}

if (posthogToken) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(initPostHog, { timeout: 4000 });
  } else {
    setTimeout(initPostHog, 1500);
  }
}
