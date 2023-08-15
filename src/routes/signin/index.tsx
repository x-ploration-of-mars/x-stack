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
        <div class="bg-muted relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex">
          <div class="absolute inset-0 -z-10 bg-black" />
          <div class="relative flex h-full flex-col justify-between">
            <div class=" flex items-end text-lg font-medium">
              <image
                src="/X-logo-V3_transparent-dark_96-96.png"
                width={48}
                height={48}
                alt="Authentication"
                class="mr-2 block"
              />
              <span class="text-2xl">stack</span>
            </div>

            <div class="">
              <blockquote class="space-y-2">
                <p class="text-lg">
                  &ldquo;This stack has saved me countless hours of set-up and
                  helped me deliver a full-featured app to my clients faster
                  than I could have Imagined.&rdquo;
                </p>
                <footer class="text-sm">Elon Mush</footer>
              </blockquote>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div class="flex w-full flex-col items-center justify-center lg:p-8">
          <div class=" space-y-6 sm:w-[350px]">
            <div class="flex flex-col space-y-2 text-center">
              <h1 class="text-3xl font-semibold tracking-tight">
                Build Anything
              </h1>
              <p class="text-muted-foreground">Try today</p>
            </div>
            <div>
              <Signin />
            </div>
            <p class="text-muted-foreground px-8 text-center text-sm">
              By creating an account, you agree to our
              <Link
                href="/terms"
                class="hover:text-primary underline underline-offset-4"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                class="hover:text-primary underline underline-offset-4"
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
