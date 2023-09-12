import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

type InputProps = Omit<QwikIntrinsicElements["input"], "children"> & {
  label?: string;
  error: string;
};

export default component$<InputProps>(({ error, ...props }) => {
  const { name } = props;

  return (
    <div>
      <input
        {...props}
        aria-errormessage={`${name}-error`}
        aria-invalid={!!error}
        class={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-input  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )}
        id={name}
      />
      {error && (
        <div id={`${name}-error`} class="mt-1 text-sm text-destructive">
          {error}
        </div>
      )}
    </div>
  );
});
