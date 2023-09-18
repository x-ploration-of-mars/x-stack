import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="m-8">
      <article class="prose max-w-6xl">
        <Slot />
      </article>
    </div>
  );
});
