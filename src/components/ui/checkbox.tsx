import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";
import { cva } from "class-variance-authority";

type CheckboxProps = Omit<QwikIntrinsicElements["input"], "children">;

const inputVariants = cva(
  "peer h-4 w-4 shrink-0 rounded border border-primary text-primary ring-offset-background focus:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
);

export default component$<CheckboxProps>(({ ...props }) => {
  const { name } = props;
  return (
    <div>
      <input
        {...props}
        type="checkbox"
        class={inputVariants({ class: props.class })}
        name={name}
        id={name}
      />
    </div>
  );
});
