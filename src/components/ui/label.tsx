import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

type LabelProps = QwikIntrinsicElements["label"];

export default component$<LabelProps>((props) => {
  return (
    <label
      class={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        props.class
      )}
    >
      <Slot />
    </label>
  );
});
