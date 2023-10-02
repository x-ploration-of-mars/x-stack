import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { buttonVariants } from "~/components/ui/button";

import {
  LuArrowRight,
  LuDownloadCloud,
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
        <div class="hidden drop-shadow-neon animate-flicker absolute left-1/2 top-1/2 lg:flex -translate-x-1/2 -translate-y-1/2 transform lg:justify-center text-white text-[50vh]">
          𝕏
        </div>
        <div class="lg:hidden drop-shadow-neon animate-flicker absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform justify-center text-white text-[50vh]">
          X
        </div>
        <div class="top-12 absolute flex w-full justify-center">
          <Link
            class={[
              buttonVariants({ variant: "link" }),
              "drop-shadow-neon-sm animate-flicker text-secondary",
            ]}
            href="https://discord.gg/W4e8ReQWv2"
          >
            <LuGamepad2 class="mr-2" />
            Join the Discord
          </Link>
        </div>
        <div class="absolute top-32 flex w-full justify-around">
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
        <div class="absolute bottom-32 flex w-full justify-around">
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
        <div class="bottom-12 absolute flex w-full justify-center">
          <Link
            class={[
              buttonVariants({ variant: "link" }),
              "drop-shadow-neon-sm animate-flicker text-secondary",
            ]}
            href="https://play.google.com/store/apps/details?id=app.vercel.x_stack.twa"
          >
            <LuDownloadCloud class="mr-2" />
            Download on Play Store
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
