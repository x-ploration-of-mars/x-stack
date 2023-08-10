import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <h3>
        <Slot name="title" />
      </h3>
      <Slot />
    </div>
  );
});
