import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { buttonVariants } from "~/components/ui/button";

import {
  LuArrowRight,
  LuGamepad2,
  LuGithub,
  LuUser,
} from "@qwikest/icons/lucide";
import Signout from "~/components/auth/signout";
import { useAuthSession } from "./plugin@auth";

export default component$(() => {
  const session = useAuthSession();
  return (
    <>
      <div class="relative h-[100vh] w-[100vw] flex-col bg-primary">
        <div
          class={[
            "drop-shadow-neon animate-flicker absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform justify-center text-white",
          ]}
          style={{
            fontSize: "24rem",
          }}
        >
          𝕏
        </div>
        <div class="xs:top-12 absolute top-36 flex w-full justify-center">
          <Link
            class={[
              buttonVariants({ variant: "link" }),
              "drop-shadow-neon-sm animate-flicker text-secondary",
            ]}
            href="https://discord.gg/W4e8ReQWv2"
          >
            <LuGamepad2 class="mr-2" />
            Discord
          </Link>
        </div>
        <div class="absolute top-24 flex w-full justify-around">
          <Link
            class={[
              buttonVariants({ variant: "link" }),
              "drop-shadow-neon-sm animate-flicker text-secondary",
            ]}
            href="https://github.com/x-ploration/x-stack"
          >
            <LuGithub class="mr-2" />
            Github
          </Link>
          <Signout />
        </div>
        <div class="absolute bottom-24 flex w-full justify-around">
          <Link
            class={[
              buttonVariants({ variant: "link" }),
              "drop-shadow-neon-sm animate-flicker text-secondary",
            ]}
            href="/settings/profile"
          >
            <LuUser class="mr-2" />
            {session.value?.user.name ?? "Settings"}
          </Link>
          <Link
            class={[
              buttonVariants({ variant: "link" }),
              "drop-shadow-neon-sm animate-flicker text-secondary",
            ]}
            href="/documentation"
          >
            Docs <LuArrowRight class="ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "X-Stack",
  meta: [
    {
      name: "x-stack starter template",
      content: "A template to start your project with x-tra peace of mind.",
    },
  ],
};
