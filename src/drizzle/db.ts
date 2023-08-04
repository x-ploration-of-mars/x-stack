import {
  type RequestEventAction,
  type RequestEventLoader,
} from "@builder.io/qwik-city";

import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import "dotenv/config";

import * as schema from "~/drizzle/schema";

export const db = (requestEvent?: RequestEventLoader | RequestEventAction) => {
  const connection = connect({
    host: requestEvent?.env.get("DATABASE_HOST"),
    username: requestEvent?.env.get("DATABASE_USERNAME"),
    password: requestEvent?.env.get("DATABASE_PASSWORD"),
  });
  return drizzle(connection, { schema });
};
