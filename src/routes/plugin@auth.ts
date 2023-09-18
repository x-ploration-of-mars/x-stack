import { serverAuth$ } from "@builder.io/qwik-auth";
import Discord from "@auth/core/providers/discord";
import type { Provider } from "@auth/core/providers";

import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "~/drizzle/db";
import { users } from "~/drizzle/schema/auth";
import { eq } from "drizzle-orm";
import type { Account, Profile, Session, User } from "@auth/core/types";
import { type AdapterUser } from "@auth/core/adapters";
import { type EnvGetter } from "@builder.io/qwik-city/middleware/request-handler";

type UpdateData = {
  email?: string;
  image?: string;
  name?: string;
};

type NewProfile = {
  username?: string;
  email?: string | null;
  image_url?: string;
};
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
  serverAuth$(({ env }: { env: EnvGetter }) => ({
    secret: env.get("AUTH_SECRET"),
    trustHost: true,
    providers: [
      Discord({
        clientId: env.get("DISCORD_CLIENT_ID")!,
        clientSecret: env.get("DISCORD_CLIENT_SECRET")!,
      }),
    ] as Provider[],
    adapter: DrizzleAdapter(db),
    callbacks: {
      async signIn({
        user,
        account,
        profile,
      }: {
        user: User;
        account: Account;
        profile: Profile;
      }) {
        // update db user with discord profile when profile has changed on discord
        if (
          (user as User | AdapterUser | undefined) &&
          account.provider === "discord"
        ) {
          const {
            email: profileEmail = "",
            image_url: profileImage = "",
            username: profileUsername = "",
          }: NewProfile = profile;
          const {
            email: userEmail = "",
            image: userImage = "",
            name: userName = "",
            id: userId = "",
          } = user;
          const updateData: UpdateData = {};

          if (profileEmail !== userEmail && profileEmail !== null) {
            updateData.email = profileEmail;
          }
          if (profileImage !== userImage) {
            updateData.image = profileImage;
          }
          if (profileUsername !== userName) {
            updateData.name = profileUsername;
          }

          // Only run the update if there's something to update
          if (Object.keys(updateData).length > 0) {
            await db.update(users).set(updateData).where(eq(users.id, userId));
          }
        }
        return true;
      },
      session({ session, user }: { session: Session; user: User }) {
        session.user.id = user.id;
        return session;
      },
    },
  }));
