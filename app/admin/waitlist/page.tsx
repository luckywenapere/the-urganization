import { createHash } from "crypto";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { neon } from "@neondatabase/serverless";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Waitlist Admin | Urganize",
  robots: {
    index: false,
    follow: false,
  },
};

const ADMIN_COOKIE = "urganize_waitlist_admin";
const ADMIN_SESSION_SECONDS = 60 * 60 * 8;

type SearchParams = Promise<{
  q?: string;
  error?: string;
}>;

type WaitlistMetadata = {
  source?: string;
  pageUrl?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  ref?: string;
  submittedAt?: string;
};

type WaitlistSubmission = {
  id: number;
  email: string;
  name: string;
  phone: string | null;
  role: string | null;
  teamSize: string | null;
  releaseVolume: string | null;
  primaryNeed: string | null;
  metadata: WaitlistMetadata | null;
  createdAt: string | Date;
  updatedAt: string | Date | null;
};

type WaitlistStats = {
  total: string;
  latest: string | null;
};

type CountRow = {
  label: string | null;
  count: string;
};

const roleLabels: Record<string, string> = {
  independent_artist: "Independent Artist",
  artist_manager: "Artist Manager",
  a_and_r: "A&R",
  music_producer: "Music Producer",
  label_manager_executive: "Label Manager / Label Executive",
};

const teamSizeLabels: Record<string, string> = {
  solo: "Just me",
  two_to_three: "2-3 people",
  four_to_six: "4-6 people",
  seven_plus: "7+ people",
};

const releaseVolumeLabels: Record<string, string> = {
  one: "1 release",
  two_to_four: "2-4 releases",
  five_plus: "5+ releases",
  not_sure: "Still figuring it out",
};

const primaryNeedLabels: Record<string, string> = {
  release_playbook: "A release playbook",
  collaborator_credits: "Collecting credits",
  team_handoff: "Team handoff and tasks",
  all_of_it: "All of it",
};

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function getAdminTokenHash() {
  const token = process.env.ADMIN_WAITLIST_TOKEN;

  if (!token) {
    return null;
  }

  return hashToken(token);
}

function getSqlClient() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  return neon(databaseUrl);
}

async function isAuthorized() {
  const expectedHash = getAdminTokenHash();

  if (!expectedHash) {
    return false;
  }

  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE)?.value === expectedHash;
}

async function signIn(formData: FormData) {
  "use server";

  const expectedHash = getAdminTokenHash();
  const token = String(formData.get("token") ?? "");

  if (!expectedHash || hashToken(token) !== expectedHash) {
    redirect("/admin/waitlist?error=invalid");
  }

  const cookieStore = await cookies();

  cookieStore.set(ADMIN_COOKIE, expectedHash, {
    httpOnly: true,
    maxAge: ADMIN_SESSION_SECONDS,
    path: "/admin/waitlist",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/admin/waitlist");
}

async function signOut() {
  "use server";

  const cookieStore = await cookies();

  cookieStore.set(ADMIN_COOKIE, "", {
    maxAge: 0,
    path: "/admin/waitlist",
  });

  redirect("/admin/waitlist");
}

async function getWaitlistData(searchQuery: string) {
  const sql = getSqlClient();
  const trimmedQuery = searchQuery.trim();
  const likeQuery = `%${trimmedQuery}%`;

  const stats = (await sql`
    SELECT
      COUNT(*)::text AS total,
      MAX("createdAt")::text AS latest
    FROM "User"
  `) as WaitlistStats[];

  const roleCounts = (await sql`
    SELECT role AS label, COUNT(*)::text AS count
    FROM "User"
    GROUP BY role
    ORDER BY COUNT(*) DESC, role ASC
  `) as CountRow[];

  const rows = trimmedQuery
    ? ((await sql`
        SELECT
          id,
          email,
          name,
          phone,
          role,
          "teamSize",
          "releaseVolume",
          "primaryNeed",
          "metadata",
          "createdAt",
          "updatedAt"
        FROM "User"
        WHERE
          email ILIKE ${likeQuery}
          OR name ILIKE ${likeQuery}
          OR COALESCE(phone, '') ILIKE ${likeQuery}
          OR COALESCE(role, '') ILIKE ${likeQuery}
          OR COALESCE("teamSize", '') ILIKE ${likeQuery}
          OR COALESCE("releaseVolume", '') ILIKE ${likeQuery}
          OR COALESCE("primaryNeed", '') ILIKE ${likeQuery}
        ORDER BY "createdAt" DESC
        LIMIT 200
      `) as WaitlistSubmission[])
    : ((await sql`
        SELECT
          id,
          email,
          name,
          phone,
          role,
          "teamSize",
          "releaseVolume",
          "primaryNeed",
          "metadata",
          "createdAt",
          "updatedAt"
        FROM "User"
        ORDER BY "createdAt" DESC
        LIMIT 200
      `) as WaitlistSubmission[]);

  return {
    rows,
    stats: stats[0] ?? { total: "0", latest: null },
    roleCounts,
  };
}

function labelFor(value: string | null, labels: Record<string, string>) {
  if (!value) {
    return "Not answered";
  }

  return labels[value] ?? value;
}

function formatDate(value: string | Date | null) {
  if (!value) {
    return "None yet";
  }

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function getMetadataValue(
  metadata: WaitlistMetadata | null,
  key: keyof WaitlistMetadata,
) {
  const value = metadata?.[key];
  return value && value.length > 0 ? value : "None";
}

function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-8 text-neutral-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">{children}</div>
    </main>
  );
}

function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
        {value}
      </p>
      {hint && <p className="mt-2 text-sm text-neutral-500">{hint}</p>}
    </div>
  );
}

function LoginView({ error }: { error?: string }) {
  return (
    <AdminShell>
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/30">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
            Internal
          </p>
          <h1 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.04em] text-white">
            Waitlist Admin
          </h1>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Enter the admin token to view submissions. This page includes email
            and phone data, so it is intentionally gated.
          </p>

          <form action={signIn} className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="token"
                className="block text-sm font-medium text-neutral-300"
              >
                Admin token
              </label>
              <input
                id="token"
                name="token"
                type="password"
                required
                autoComplete="current-password"
                className="mt-2 w-full rounded-md border border-white/10 bg-black px-3 py-2.5 text-sm text-white outline-none focus:border-white/50"
              />
            </div>

            {error === "invalid" && (
              <p className="rounded-md border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-100">
                Invalid admin token.
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-black hover:bg-neutral-200"
            >
              View waitlist
            </button>
          </form>
        </div>
      </div>
    </AdminShell>
  );
}

function SetupView() {
  return (
    <AdminShell>
      <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center">
        <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber-200/70">
            Setup needed
          </p>
          <h1 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.04em] text-white">
            Add an admin token
          </h1>
          <p className="mt-3 text-sm leading-6 text-amber-50/75">
            Set <code className="text-amber-100">ADMIN_WAITLIST_TOKEN</code> in
            your local and Vercel environment variables to enable this page.
          </p>
        </div>
      </div>
    </AdminShell>
  );
}

export default async function WaitlistAdminPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  if (!process.env.ADMIN_WAITLIST_TOKEN) {
    return <SetupView />;
  }

  if (!(await isAuthorized())) {
    return <LoginView error={params.error} />;
  }

  const searchQuery = typeof params.q === "string" ? params.q : "";
  const { rows, stats, roleCounts } = await getWaitlistData(searchQuery);

  return (
    <AdminShell>
      <header className="flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
            Urganize internal
          </p>
          <h1 className="mt-3 font-sans text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Waitlist submissions
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400">
            Showing the latest 200 submissions from the existing Neon{" "}
            <code className="text-neutral-300">User</code> table.
          </p>
        </div>

        <form action={signOut}>
          <button
            type="submit"
            className="rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-neutral-300 hover:border-white/40 hover:text-white"
          >
            Sign out
          </button>
        </form>
      </header>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <StatCard label="Total" value={stats.total} />
        <StatCard
          label="Latest"
          value={formatDate(stats.latest)}
          hint="Most recent signup"
        />
        <StatCard
          label="Visible"
          value={String(rows.length)}
          hint={searchQuery ? "Filtered results" : "Latest rows loaded"}
        />
      </section>

      <section className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-5">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
          User types
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {roleCounts.map((row) => (
            <span
              key={row.label ?? "unanswered"}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-neutral-300"
            >
              {labelFor(row.label, roleLabels)}:{" "}
              <span className="text-white">{row.count}</span>
            </span>
          ))}
        </div>
      </section>

      <form action="/admin/waitlist" className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          name="q"
          defaultValue={searchQuery}
          placeholder="Search name, email, phone, role..."
          className="min-h-11 flex-1 rounded-md border border-white/10 bg-black px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-white/50"
        />
        <button
          type="submit"
          className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-neutral-200"
        >
          Search
        </button>
        {searchQuery && (
          <a
            href="/admin/waitlist"
            className="inline-flex items-center justify-center rounded-md border border-white/10 px-5 py-2.5 text-sm font-medium text-neutral-300 hover:border-white/40 hover:text-white"
          >
            Clear
          </a>
        )}
      </form>

      <section className="mt-6 overflow-hidden rounded-lg border border-white/10">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm">
            <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-neutral-500">
              <tr>
                <th className="px-4 py-3 font-medium">Person</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Team</th>
                <th className="px-4 py-3 font-medium">Need</th>
                <th className="px-4 py-3 font-medium">Source</th>
                <th className="px-4 py-3 font-medium">Submitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((submission) => (
                <tr key={submission.id} className="align-top hover:bg-white/[0.02]">
                  <td className="px-4 py-4">
                    <div className="font-medium text-white">{submission.name}</div>
                    <a
                      href={`mailto:${submission.email}`}
                      className="mt-1 block text-neutral-400 hover:text-white"
                    >
                      {submission.email}
                    </a>
                    <div className="mt-1 text-neutral-500">
                      {submission.phone ?? "No phone"}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-neutral-300">
                    {labelFor(submission.role, roleLabels)}
                  </td>
                  <td className="px-4 py-4 text-neutral-300">
                    <div>{labelFor(submission.teamSize, teamSizeLabels)}</div>
                    <div className="mt-1 text-neutral-500">
                      {labelFor(submission.releaseVolume, releaseVolumeLabels)}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-neutral-300">
                    {labelFor(submission.primaryNeed, primaryNeedLabels)}
                  </td>
                  <td className="px-4 py-4 text-neutral-300">
                    <div>{getMetadataValue(submission.metadata, "source")}</div>
                    <div className="mt-1 text-neutral-500">
                      UTM:{" "}
                      {getMetadataValue(submission.metadata, "utmCampaign")}
                    </div>
                    <div className="mt-1 max-w-[16rem] truncate text-neutral-600">
                      Ref: {getMetadataValue(submission.metadata, "ref")}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-neutral-300">
                    {formatDate(submission.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {rows.length === 0 && (
          <div className="px-4 py-16 text-center text-sm text-neutral-500">
            No waitlist submissions found.
          </div>
        )}
      </section>
    </AdminShell>
  );
}
