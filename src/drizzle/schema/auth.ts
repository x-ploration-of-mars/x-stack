import {
  int,
  timestamp,
  mysqlTable,
  primaryKey,
  varchar,
  boolean,
} from "drizzle-orm/mysql-core";
import type { AdapterAccount } from "@auth/core/adapters";

import { createInsertSchema, createSelectSchema } from "drizzle-valibot";
import { email, minLength, regex, string, toTrimmed, url } from "valibot";

export const users = mysqlTable("user", {
  // auth.js properties
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
    fsp: 3,
  }).defaultNow(),
  image: varchar("image", { length: 255 }),
  // custom properties
  firstName: varchar("firstName", { length: 50 }),
  lastName: varchar("lastName", { length: 50 }),
  available: boolean("available"),
  website: varchar("website", { length: 255 }),
  github: varchar("github", { length: 255 }),
  linkedin: varchar("linkedin", { length: 255 }),
  twitter: varchar("twitter", { length: 255 }),
  bio: varchar("bio", { length: 255 }),
  publicEmail: varchar("publicEmail", { length: 255 }),
});

// Schema for inserting a user - can be used to validate API requests
export const insertUserSchema = createInsertSchema(users, {
  firstName: () =>
    string([
      toTrimmed(),
      minLength(1, "First name cannot be empty"),
      regex(
        /^[A-Za-z\s-]+$/,
        "First name can only contain letters, spaces, and hyphens"
      ),
      regex(/^(?!.*\s{2,}).*$/, "First name cannot have consecutive spaces"),
    ]),
  lastName: () =>
    string([
      toTrimmed(),
      minLength(1, "First name cannot be empty"),
      regex(
        /^[A-Za-z\s-]+$/,
        "First name can only contain letters, spaces, and hyphens"
      ),
      regex(/^(?!.*\s{2,}).*$/, "First name cannot have consecutive spaces"),
    ]),
  website: () => string([url("Please provide a valid URL")]),
  github: () => string([url("Please provide a valid URL")]),
  linkedin: () => string([url("Please provide a valid URL")]),
  twitter: () => string([url("Please provide a valid URL")]),
  publicEmail: () => string([email("Please provide a valid email")]),
});

// Schema for selecting a user - can be used to validate API responses
export const selectUserSchema = createSelectSchema(users);

export const accounts = mysqlTable(
  "account",
  {
    userId: varchar("userId", { length: 255 }).notNull(),
    type: varchar("type", { length: 255 })
      .$type<AdapterAccount["type"]>()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refresh_token: varchar("refresh_token", { length: 255 }),
    access_token: varchar("access_token", { length: 255 }),
    expires_at: int("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: varchar("id_token", { length: 255 }),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const sessions = mysqlTable("session", {
  sessionToken: varchar("sessionToken", { length: 255 }).notNull().primaryKey(),
  userId: varchar("userId", { length: 255 }).notNull(),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = mysqlTable(
  "verificationToken",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);
