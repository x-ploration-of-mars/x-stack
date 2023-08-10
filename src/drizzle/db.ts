import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import * as AuthSchema from "~/drizzle/schema/auth";
import * as TodosSchema from "~/drizzle/schema/todos";

const connection = await mysql.createConnection({
  uri: process.env.DATABASE_URL,
});

const schema = { ...AuthSchema, ...TodosSchema };

export const db = drizzle(connection, { schema, mode: "planetscale" });
