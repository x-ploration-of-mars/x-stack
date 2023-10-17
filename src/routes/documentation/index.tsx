import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="flex h-screen w-screen flex-col items-center justify-center">
        <h1 class="text-5xl font-semibold">TBD</h1>
        <br />
        <h2>
          Find current docs{" "}
          <Link
            class=" cursor-pointer underline underline-offset-4"
            href="https://github.com/x-ploration/x-stack"
          >
            on github
          </Link>
        </h2>
      </div>
    </>
  );
});
