import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { buttonVariants } from "~/components/ui/button";
import XGlow from "~/components/x-glow/x-glow";

import { LuArrowRight, LuGithub, LuUser } from "@qwikest/icons/lucide";
import Signout from "~/components/auth/signout";
import { useAuthSession } from "./plugin@auth";
import xGlowStyles from "~/components/x-glow/x-glow.module.css";

export default component$(() => {
  const session = useAuthSession();
  return (
    <>
      <div class="relative h-[100vh] w-[100vw] flex-col bg-primary">
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <XGlow />
        </div>
        <div class="absolute top-24 flex w-full justify-around">
          <Link
            class={[buttonVariants({ variant: "link" }), xGlowStyles.neon, "text-secondary"]}
            href="https://github.com"
          >
            <LuGithub class="mr-2" />
            Github
          </Link>
          <Signout />
        </div>
        <div class="absolute bottom-24 flex w-full justify-around">
          <Link
            class={[buttonVariants({ variant: "link" }), "text-secondary", xGlowStyles.neon]}
            href="/profile"
          >
            <LuUser class="mr-2" />
            {session.value?.user.name ?? "Profile"}
          </Link>
          <Link
            class={[buttonVariants({ variant: "link" }), "text-secondary", xGlowStyles.neon]}
            href="/docs"
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
