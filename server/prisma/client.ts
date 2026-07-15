import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";
import path from "path";

// NOTE: Strange behavior with paths, see later
const rawPath = (process.env.DATABASE_URL ?? "").replace(/^file:/, "");
const connectionString = path.join(process.cwd(), "prisma", rawPath);

const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
