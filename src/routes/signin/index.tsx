import { component$ } from "@builder.io/qwik";
import Signin from "~/components/auth/signin";
import AcceptCookies from "./accept-cookies";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <AcceptCookies />
      <div
        class={`container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0`}
      >
        {/* Left Section */}
        <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div class="absolute inset-0 -z-0 bg-black" />
          <div class="relative flex h-full flex-col justify-between">
            <div class={["drop-shadow-neon flex items-end text-5xl"]}>𝕏</div>

            <div class="">
              <blockquote class="space-y-2">
                <p class="text-lg">
                  &ldquo;The 𝕏 stack will definitely be the go to place for
                  building apps on the everything app.&rdquo;
                </p>
                <footer class="text-sm">Mush</footer>
              </blockquote>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div class="flex w-full flex-col items-center justify-center lg:p-8">
          <h1 class="text-9xl font-medium lg:hidden">X</h1>
          <div class=" space-y-6 sm:w-[350px]">
            <div class="flex flex-col space-y-4 text-center">
              <h1 class="text-4xl font-semibold tracking-tight">
                The Everything Stack
              </h1>
              <h2 class="text-xl">Try today</h2>
            </div>
            <div class="pt-4">
              <Signin />
            </div>
            <p class="px-8 text-center text-sm">
              By creating an account, you agree to our{" "}
              <Link
                prefetch
                href="/pub/terms-of-service"
                class="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                prefetch
                href="/pub/privacy-policy"
                class="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
});
