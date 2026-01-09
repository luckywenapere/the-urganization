import { NextResponse } from "next/server";
import { z } from "zod";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

const signupSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  isLaunchPartner: z.boolean().optional().default(false),
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

    const { email, name, isLaunchPartner } = parsed.data;

    // Generate simple referral code from email
    const referralCode = email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '');

    // 1. Save to Neon with Launch Partner status
    await sql`
      INSERT INTO "User" (email, name, "isLaunchPartner", "referralCode", "createdAt")
      VALUES (${email}, ${name}, ${isLaunchPartner}, ${referralCode}, NOW())
      ON CONFLICT (email) DO UPDATE
      SET "isLaunchPartner" = ${isLaunchPartner},
          "referralCode" = ${referralCode};
    `;

    // 2. Sync to MailerLite with custom fields
    try {
      const mailerliteBody: any = {
        email,
        fields: { 
          name,
          launch_partner: isLaunchPartner ? "Yes" : "No",
          referral_code: referralCode,
        },
        groups: [process.env.MAILERLITE_GROUP_ID],
      };

      const res = await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mailerliteBody),
        }
      );

      if (!res.ok) {
        console.error("MailerLite error:", await res.text());
      }
    } catch (err) {
      console.error("MailerLite request failed:", err);
    }

    return NextResponse.json({ 
      success: true,
      referralCode: isLaunchPartner ? referralCode : null,
    });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}