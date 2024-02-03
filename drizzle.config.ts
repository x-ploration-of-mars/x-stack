import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/drizzle/schema/*",
  driver: "mysql2",
  out: "./drizzle",
  dbCredentials: {
    host: process.env["DATABASE_HOST"]!,
    database: process.env["DATABASE"]!,
    user: process.env["DATABASE_USERNAME"]!,
    password: process.env["DATABASE_PASSWORD"]!,
  },
} satisfies Config;
