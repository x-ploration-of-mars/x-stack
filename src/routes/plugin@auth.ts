import { serverAuth$ } from "@builder.io/qwik-auth";
import Discord from "@auth/core/providers/discord";
import type { Provider } from "@auth/core/providers";

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
  }));
