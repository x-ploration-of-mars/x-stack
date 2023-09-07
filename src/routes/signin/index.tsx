import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Signin from "~/components/auth/signin";

export default component$(() => {
  return (
    <>
      <div
        class={`container relative grid h-[100vh] flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0`}
      >
        {/* Left Section */}
        <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div class="absolute inset-0 -z-10 bg-black" />
          <div class="relative flex h-full flex-col justify-between">
            <div class=" flex items-end text-lg font-medium">
              <img
                src="/X-logo-V3_transparent-dark_96-96.png"
                width={48}
                height={48}
                alt="Authentication"
                class="mr-2 block  drop-shadow-[0_0_2px_rgb(255,255,255)]"
              />
            </div>

            <div class="">
              <blockquote class="space-y-2">
                <p class="text-lg">
                  &ldquo;One stack to rule them all, one stack to find them, One stack to bring them
                  all, and in the darkness bind them;.&rdquo;
                </p>
                <footer class="text-sm">Elon Mush</footer>
              </blockquote>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div class="flex w-full flex-col items-center justify-center lg:p-8">
          <div class=" space-y-6 sm:w-[350px]">
            <div class="flex flex-col space-y-4 text-center">
              <h1 class="text-4xl font-semibold tracking-tight">The Everything Stack</h1>
              <h2 class="text-xl">Try today</h2>
            </div>
            <div class="pt-4">
              <Signin />
            </div>
            <p class="px-8 text-center text-sm">
              By creating an account, you agree to our{" "}
              <Link href="/terms" class="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" class="underline underline-offset-4 hover:text-primary">
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
