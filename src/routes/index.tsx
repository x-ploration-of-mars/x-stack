import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import Signin from "./signin";

export default component$(() => {
  return (
    <>
      <div class="md:hidden">
        <image
          src="/X-logo-V3_transparent-dark_48-48.png"
          width={48}
          height={48}
          alt="Authentication"
          class="light:hidden block"
        />
      </div>
      <div
        class={`container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0`}
      >
        {/* Left Section */}
        <div class="bg-muted relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex">
          <div class="absolute inset-0 bg-zinc-950" />
          <div class="relative z-20 flex items-center text-lg font-medium">
            <image
              src="/X-logo-V3_transparent-dark_48-48.png"
              width={24}
              height={24}
              alt="Authentication"
              class="mr-2 block"
            />
            Acme Inc
          </div>
          <div class="relative z-20 mt-auto">
            <blockquote class="space-y-2">
              <p class="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer class="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        {/* Right Section */}
        <div class="lg:p-8">
          <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div class="flex flex-col space-y-2 text-center">
              <h1 class="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p class="text-muted-foreground text-sm">
                Click the button below to create an account or sign in
              </p>
            </div>
            <div>
              <Signin />
            </div>
            <p class="text-muted-foreground px-8 text-center text-sm">
              By creating an account, you agree to our{" "}
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

export const head: DocumentHead = {
  title: "X-Stack",
  meta: [
    {
      name: "x-stack starter template",
      content: "A template to start your project with x-tra peace of mind.",
    },
  ],
};
