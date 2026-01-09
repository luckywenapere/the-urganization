import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

/* ----------------------------------------
   Input validation schema
----------------------------------------- */
const signupSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).optional(),
});

export async function POST(req: Request) {
  try {
    /* ----------------------------------------
       1. Parse & validate input
    ----------------------------------------- */
    const body = await req.json();
    const parsed = signupSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input" },
        { status: 400 }
      );
    }

    const { email, name } = parsed.data;

    /* ----------------------------------------
       2. Save to Neon via Prisma
       (Neon is source of truth)
    ----------------------------------------- */
    await prisma.waitlist.upsert({
      where: { email },
      update: {}, // no-op if already exists
      create: {
        email,
        name,
      },
    });

    /* ----------------------------------------
       3. Sync to MailerLite (non-blocking)
    ----------------------------------------- */
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
        const error = await res.text();
        console.error("MailerLite error:", error);
      }
    } catch (err) {
      // Never block signup because of MailerLite
      console.error("MailerLite request failed:", err);
    }

    /* ----------------------------------------
       4. Success response
    ----------------------------------------- */
    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Signup route error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
