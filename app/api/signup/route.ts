import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";
import { z } from "zod";

const metadataSchema = z
  .object({
    source: z.string().max(100).optional(),
    pageUrl: z.string().max(1000).optional(),
    referrer: z.string().max(1000).optional(),
    userAgent: z.string().max(1000).optional(),
    utmSource: z.string().max(200).optional(),
    utmMedium: z.string().max(200).optional(),
    utmCampaign: z.string().max(200).optional(),
    utmTerm: z.string().max(200).optional(),
    utmContent: z.string().max(200).optional(),
    ref: z.string().max(200).optional(),
  })
  .optional();

const signupSchema = z.object({
  email: z.string().trim().email(),
  name: z.string().trim().min(1).max(160),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(32)
    .regex(/^[+\d\s().-]+$/),
  role: z.enum([
    "independent_artist",
    "artist_manager",
    "a_and_r",
    "music_producer",
    "label_manager_executive",
  ]),
  teamSize: z.enum(["solo", "two_to_three", "four_to_six", "seven_plus"]),
  releaseVolume: z.enum(["one", "two_to_four", "five_plus", "not_sure"]),
  primaryNeed: z.enum([
    "release_playbook",
    "collaborator_credits",
    "team_handoff",
    "all_of_it",
  ]),
  metadata: metadataSchema,
});

function getSqlClient() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  return neon(databaseUrl);
}

function createReferralCode(email: string) {
  return email.split("@")[0].toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isUniqueViolation(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: string }).code === "23505"
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = signupSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const {
      email,
      name,
      phone,
      role,
      teamSize,
      releaseVolume,
      primaryNeed,
      metadata,
    } = parsed.data;
    const normalizedEmail = email.toLowerCase();
    const sql = getSqlClient();

    const enrichedMetadata = {
      ...metadata,
      userAgent: metadata?.userAgent ?? req.headers.get("user-agent") ?? undefined,
      submittedAt: new Date().toISOString(),
    };
    const metadataJson = JSON.stringify(enrichedMetadata);
    const referralCode = createReferralCode(normalizedEmail);

    const inserted = await sql`
      INSERT INTO "User" (
        email,
        name,
        phone,
        role,
        "teamSize",
        "releaseVolume",
        "primaryNeed",
        "metadata",
        "isLaunchPartner",
        "referralCode",
        "createdAt",
        "updatedAt"
      )
      VALUES (
        ${normalizedEmail},
        ${name},
        ${phone},
        ${role},
        ${teamSize},
        ${releaseVolume},
        ${primaryNeed},
        CAST(${metadataJson} AS JSONB),
        false,
        ${referralCode},
        NOW(),
        NOW()
      )
      ON CONFLICT (email) DO NOTHING
      RETURNING id
    `;

    if (inserted.length === 0) {
      return NextResponse.json(
        {
          error: "That email is already on the waitlist.",
          code: "DUPLICATE_EMAIL",
        },
        { status: 409 },
      );
    }

    return NextResponse.json({
      success: true,
      referralCode,
    });
  } catch (error) {
    if (isUniqueViolation(error)) {
      return NextResponse.json(
        {
          error: "That email is already on the waitlist.",
          code: "DUPLICATE_EMAIL",
        },
        { status: 409 },
      );
    }

    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
