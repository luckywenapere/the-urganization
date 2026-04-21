import type { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  isDashboardAuthConfigured,
  isDashboardAuthorized,
  sanitizeDashboardNext,
  startDashboardSession,
} from "@/lib/dashboard-auth";

type SearchParams = Promise<{
  error?: string;
  next?: string;
}>;

export const metadata: Metadata = {
  title: {
    absolute: "Dashboard Login | Urganize",
  },
  robots: {
    index: false,
    follow: false,
  },
};

async function signIn(formData: FormData) {
  "use server";

  const token = String(formData.get("token") ?? "");
  const nextPath = sanitizeDashboardNext(String(formData.get("next") ?? ""));
  const didStartSession = await startDashboardSession(token);

  if (!didStartSession) {
    redirect(
      `/dashboard/login?error=invalid&next=${encodeURIComponent(nextPath)}`,
    );
  }

  redirect(nextPath);
}

function DashboardLoginShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#07100d] px-4 py-8 text-[#f6f0e6] sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[75vh] max-w-md flex-col justify-center">
        {children}
      </div>
    </main>
  );
}

function SetupView() {
  return (
    <DashboardLoginShell>
      <div className="rounded-lg border border-amber-300/25 bg-amber-300/10 p-6">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber-200/75">
          Setup needed
        </p>
        <h1 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.04em] text-white">
          Add an internal token
        </h1>
        <p className="mt-3 text-sm leading-6 text-amber-50/75">
          Set <code className="text-amber-100">ADMIN_WAITLIST_TOKEN</code> to
          enable protected dashboard access.
        </p>
      </div>
    </DashboardLoginShell>
  );
}

export default async function DashboardLoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const nextPath = sanitizeDashboardNext(params.next ?? "");

  if (!isDashboardAuthConfigured()) {
    return <SetupView />;
  }

  if (await isDashboardAuthorized()) {
    redirect(nextPath);
  }

  return (
    <DashboardLoginShell>
      <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#8da29a]">
          Urganize internal
        </p>
        <h1 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.04em] text-white">
          Dashboard access
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#b8c7bf]">
          Sign in to view internal growth metrics.
        </p>

        <form action={signIn} className="mt-8 space-y-4">
          <input type="hidden" name="next" value={nextPath} />
          <div>
            <label
              htmlFor="token"
              className="block text-sm font-medium text-[#d7e4d9]"
            >
              Internal token
            </label>
            <input
              id="token"
              name="token"
              type="password"
              required
              autoComplete="current-password"
              className="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#9fe870]"
            />
          </div>

          {params.error === "invalid" && (
            <p className="rounded-md border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-100">
              Invalid internal token.
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-md bg-[#9fe870] px-4 py-2.5 text-sm font-semibold text-[#07100d] hover:bg-[#b8ff8f]"
          >
            View dashboard
          </button>
        </form>
      </div>
    </DashboardLoginShell>
  );
}
