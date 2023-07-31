import type { Config } from "drizzle-kit";
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  schema: "./src/routes/schema.ts",
  driver: 'mysql2',
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;