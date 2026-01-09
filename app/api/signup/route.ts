import { NextResponse } from "next/server";
import { z } from "zod";
import { sql } from "@/lib/db";

const signupSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = signupSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input" },
        { status: 400 }
      );
    }

    const { email, name } = parsed.data;

    // 1. Save to Neon (idempotent)
    await sql`
      INSERT INTO "WaitlistSignup" (email, name)
      VALUES (${email}, ${name})
      ON CONFLICT (email) DO NOTHING;
    `;

    // 2. Sync to MailerLite (non-blocking)
    try {
      const res = await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            fields: { name },
            groups: [process.env.MAILERLITE_GROUP_ID],
          }),
        }
      );

      if (!res.ok) {
        console.error("MailerLite error:", await res.text());
      }
    } catch (err) {
      console.error("MailerLite request failed:", err);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
