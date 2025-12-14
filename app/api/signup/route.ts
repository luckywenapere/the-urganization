import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    // Try to run migrations on first request
    try {
      await execAsync('npx prisma migrate deploy', {
        cwd: process.cwd(),
      });
    } catch (migrationError) {
      console.log("Migration already applied or running migrations");
    }

    const { email, name } = await request.json();

    // Validate input
    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Create new user
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error creating user:", errorMessage);
    console.error("Full error:", error);
    return NextResponse.json(
      { error: `Server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
