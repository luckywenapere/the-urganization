import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    // 1️⃣ Validate input
    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 }
      );
    }

    // 2️⃣ Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // 3️⃣ Create new user in DB
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    // 4️⃣ Send to MailerLite (NON-BLOCKING)
    try {
      const mailerLiteResponse = await fetch(
        `https://connect.mailerlite.com/api/subscribers/${encodeURIComponent(email)}`, 
		{
		  method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
          },
          body: JSON.stringify({
            email,
            fields: {
              name,
            },
            groups: [process.env.MAILERLITE_GROUP_ID],
          }),
        }
      );

      if (!mailerLiteResponse.ok) {
        const errText = await mailerLiteResponse.text();
        console.error("MailerLite error:", errText);
        // DO NOT throw — we don't want to block signup
      }
    } catch (mailerLiteError) {
      console.error("MailerLite request failed:", mailerLiteError);
      // Still don't block signup
    }

    // 5️⃣ Return success
    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error creating user:", errorMessage);

    return NextResponse.json(
      { error: `Server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
