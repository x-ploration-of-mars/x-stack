import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

type CheckboxProps = Omit<QwikIntrinsicElements["input"], "children">;

export default component$<CheckboxProps>(({ ...props }) => {
  const { name } = props;
  return (
    <div>
      <input
        {...props}
        type="checkbox"
        class={cn(
          "peer h-4 w-4 shrink-0 rounded border border-primary text-primary ring-offset-background focus:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          props.class
        )}
        name={name}
        id={name}
      />
    </div>
  );
});
