import type { Metadata } from "next";
import { neon } from "@neondatabase/serverless";
import GrowthDashboard, {
  type WeeklyUserCount,
} from "@/app/components/dashboard/GrowthDashboard";
import { requireDashboardAuth } from "@/lib/dashboard-auth";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: {
    absolute: "Growth | Urganize",
  },
  robots: {
    index: false,
    follow: false,
  },
};

type CountRow = {
  total: string;
};

type WeeklyUserCountRow = {
  weekLabel: string;
  totalUsers: string | number | bigint;
};

function getSqlClient() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  return neon(databaseUrl);
}

function toNumber(value: string | number | bigint) {
  return Number(value);
}

async function getWeeklyUserCounts(): Promise<WeeklyUserCount[]> {
  const sql = getSqlClient();
  const totalRows = (await sql`
    SELECT COUNT(*)::text AS total
    FROM "User"
  `) as CountRow[];

  if (Number(totalRows[0]?.total ?? "0") === 0) {
    return [];
  }

  const rows = (await sql`
    WITH weeks AS (
      SELECT generate_series(
        date_trunc('week', NOW())::date - INTERVAL '11 weeks',
        date_trunc('week', NOW())::date,
        INTERVAL '1 week'
      ) AS week_start
    )
    SELECT
      to_char(week_start, 'IYYY-"W"IW') AS "weekLabel",
      (
        SELECT COUNT(*)::int
        FROM "User"
        WHERE "createdAt" < week_start + INTERVAL '1 week'
      ) AS "totalUsers"
    FROM weeks
    ORDER BY week_start ASC
  `) as WeeklyUserCountRow[];

  return rows.map((row) => ({
    weekLabel: row.weekLabel,
    totalUsers: toNumber(row.totalUsers),
  }));
}

export default async function GrowthPage() {
  await requireDashboardAuth();

  const weeks = await getWeeklyUserCounts();

  return <GrowthDashboard weeks={weeks} />;
}
