import { serverAuth$ } from "@builder.io/qwik-auth";
import Discord from "@auth/core/providers/discord";
import type { Provider } from "@auth/core/providers";

import { DrizzleAdapter } from "~/drizzle/adapter";
import { adapterDB } from "~/drizzle/db";
import * as AuthSchema from "~/drizzle/schema/auth";
import {
  pGetSessionAndUser,
  pGetSessionByToken,
  pGetUserByAccount,
  pGetUserByEmail,
  pGetUserById,
  pGetVerificationTokenByToken,
} from "~/drizzle/prepared";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "@auth/core/types" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      // role: string;
      // ...other properties
    };
  }

  // interface User {
  //   // role: string;
  //   // ...other properties
  // }
}

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET"),
    trustHost: true,
    providers: [
      Discord({
        clientId: env.get("DISCORD_CLIENT_ID")!,
        clientSecret: env.get("DISCORD_CLIENT_SECRET")!,
      }),
    ] as Provider[],
    adapter: DrizzleAdapter(adapterDB, {
      schemas: {
        account: AuthSchema.account,
        session: AuthSchema.session,
        user: AuthSchema.user,
        verificationToken: AuthSchema.verificationToken,
      },
      prepared: {
        getUserByEmail: pGetUserByEmail,
        getUserById: pGetUserById,
        getUserByAccount: pGetUserByAccount,
        getSessionByToken: pGetSessionByToken,
        getSessionAndUser: pGetSessionAndUser,
        getVerificationTokenByToken: pGetVerificationTokenByToken,
      },
    }),
  }));
