import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  (() => {
    // Use Turso in production, local SQLite in development
    if (process.env.TURSO_DATABASE_URL && process.env.TURSO_AUTH_TOKEN) {
      const libsql = createClient({
        url: process.env.TURSO_DATABASE_URL,
        authToken: process.env.TURSO_AUTH_TOKEN,
      });
      const adapter = new PrismaLibSQL(libsql);
      return new PrismaClient({ adapter });
    }
    
    // Local development
    return new PrismaClient();
  })();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;