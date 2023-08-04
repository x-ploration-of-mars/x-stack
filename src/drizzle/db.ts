import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

import * as AuthSchema from "./schema/auth";

const connection = connect({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
});

export const adapterDB = drizzle(connection);
export const db = drizzle(connection, { schema: AuthSchema });
