import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="flex h-[100vh] w-[100vw] flex-col items-center justify-center">
        <h1 class="text-5xl font-semibold">TBD</h1>
        <br />
        <h2>
          Find current docs{" "}
          <a
            class=" cursor-pointer underline underline-offset-4"
            href="https://github.com/x-ploration/x-stack"
          >
            on github
          </a>
        </h2>
      </div>
    </>
  );
});
