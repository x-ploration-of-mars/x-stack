import * as AuthSchema from "~/drizzle/schema/auth";

import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

// create the connection
const connection = connect({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
});
const schema = { ...AuthSchema };

export const db = drizzle(connection, { schema });
