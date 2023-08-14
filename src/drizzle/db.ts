import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import * as AuthSchema from "~/drizzle/schema/auth";
import * as TodosSchema from "~/drizzle/schema/todos";

const poolConnection = mysql.createPool({
  uri: process.env.DATABASE_URL,
});

const schema = { ...AuthSchema, ...TodosSchema };
export const db = drizzle(poolConnection, { schema, mode: "planetscale" });
