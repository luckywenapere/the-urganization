import { createHash } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DASHBOARD_SESSION_COOKIE = "urganize_dashboard_session";
const DASHBOARD_SESSION_SECONDS = 60 * 60 * 8;
const DEFAULT_DASHBOARD_PATH = "/dashboard/growth";

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function getDashboardTokenHash() {
  const token = process.env.ADMIN_WAITLIST_TOKEN;

  if (!token) {
    return null;
  }

  return hashToken(token);
}

export function isDashboardAuthConfigured() {
  return getDashboardTokenHash() !== null;
}

export function sanitizeDashboardNext(nextPath: string) {
  if (
    nextPath.startsWith("/dashboard/") &&
    !nextPath.startsWith("/dashboard/login")
  ) {
    return nextPath;
  }

  return DEFAULT_DASHBOARD_PATH;
}

export async function isDashboardAuthorized() {
  const expectedHash = getDashboardTokenHash();

  if (!expectedHash) {
    return false;
  }

  const cookieStore = await cookies();
  return cookieStore.get(DASHBOARD_SESSION_COOKIE)?.value === expectedHash;
}

export async function requireDashboardAuth() {
  if (!(await isDashboardAuthorized())) {
    redirect("/dashboard/login");
  }
}

export async function startDashboardSession(token: string) {
  const expectedHash = getDashboardTokenHash();

  if (!expectedHash || hashToken(token) !== expectedHash) {
    return false;
  }

  const cookieStore = await cookies();

  cookieStore.set(DASHBOARD_SESSION_COOKIE, expectedHash, {
    httpOnly: true,
    maxAge: DASHBOARD_SESSION_SECONDS,
    path: "/dashboard",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return true;
}

export async function clearDashboardSession() {
  const cookieStore = await cookies();

  cookieStore.set(DASHBOARD_SESSION_COOKIE, "", {
    maxAge: 0,
    path: "/dashboard",
  });
}
