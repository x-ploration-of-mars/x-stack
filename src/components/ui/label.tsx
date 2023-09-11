import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";
import { cva } from "class-variance-authority";

type LabelProps = QwikIntrinsicElements["label"];

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export default component$<LabelProps>((props) => {
  return (
    <label class={labelVariants({ class: props.class })}>
      <Slot />
    </label>
  );
});
