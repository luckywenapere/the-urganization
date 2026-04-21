import Link from "next/link";
import { redirect } from "next/navigation";
import { TrendingUp } from "lucide-react";
import {
  clearDashboardSession,
  requireDashboardAuth,
} from "@/lib/dashboard-auth";

async function signOut() {
  "use server";

  await clearDashboardSession();
  redirect("/dashboard/login");
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireDashboardAuth();

  return (
    <main className="min-h-screen bg-[#07100d] text-[#f6f0e6] lg:flex">
      <aside className="border-b border-white/10 bg-black/20 px-5 py-5 lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r lg:px-6">
        <div className="flex items-center justify-between gap-4 lg:block">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#8da29a]">
              Urganize
            </p>
            <h1 className="mt-2 font-sans text-xl font-semibold tracking-[-0.03em] text-white">
              Dashboard
            </h1>
          </div>

          <form action={signOut} className="lg:hidden">
            <button
              type="submit"
              className="rounded-md border border-white/10 px-3 py-2 text-sm font-medium text-[#d7e4d9] hover:border-white/35 hover:text-white"
            >
              Sign out
            </button>
          </form>
        </div>

        <nav className="mt-6">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[#6f857c]">
            Metrics
          </p>
          <Link
            href="/dashboard/growth"
            className="mt-3 flex items-center gap-3 rounded-md border border-[#9fe870]/25 bg-[#9fe870]/10 px-3 py-2.5 text-sm font-semibold text-[#eaffdf]"
          >
            <TrendingUp className="h-4 w-4" aria-hidden="true" />
            Growth
          </Link>
        </nav>

        <form action={signOut} className="mt-8 hidden lg:block">
          <button
            type="submit"
            className="w-full rounded-md border border-white/10 px-3 py-2 text-sm font-medium text-[#d7e4d9] hover:border-white/35 hover:text-white"
          >
            Sign out
          </button>
        </form>
      </aside>

      <section className="min-w-0 flex-1">{children}</section>
    </main>
  );
}
