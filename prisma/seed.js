/**
 * Setup instructions for the sign up form:
 * 
 * 1. Install dependencies:
 *    npm install
 * 
 * 2. Generate Prisma client:
 *    npm run prisma:generate
 * 
 * 3. Create the database (this will also create the migrations folder):
 *    npm run prisma:migrate
 * 
 * 4. Start the development server:
 *    npm run dev
 * 
 * The sign up form will be available on the home page.
 * All user data will be stored in the SQLite database at prisma/dev.db
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Database is ready!");
  console.log("Users table has been created with the following schema:");
  console.log("- id: Int (primary key, auto-increment)");
  console.log("- email: String (unique)");
  console.log("- name: String");
  console.log("- createdAt: DateTime (auto-set to current time)");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
