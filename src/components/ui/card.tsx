import { component$, type QwikIntrinsicElements, Slot } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

type CardProps = QwikIntrinsicElements["div"];
const Card = component$<CardProps>((props) => {
  return (
    <div
      class={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        props.class
      )}
    >
      <Slot />
    </div>
  );
});

type CardHeaderProps = QwikIntrinsicElements["div"];
const CardHeader = component$<CardHeaderProps>((props) => {
  return (
    <div class={cn("flex flex-col space-y-1.5 p-6", props.class)}>
      <Slot />
    </div>
  );
});

type CardTitleProps = QwikIntrinsicElements["h3"];
const CardTitle = component$<CardTitleProps>((props) => {
  return (
    <h3
      class={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        props.class
      )}
    >
      <Slot />
    </h3>
  );
});

type CardDescriptionProps = QwikIntrinsicElements["p"];
const CardDescription = component$<CardDescriptionProps>((props) => {
  return (
    <p class={cn("text-sm text-muted-foreground", props.class)}>
      <Slot />
    </p>
  );
});

type CardContentProps = QwikIntrinsicElements["div"];
const CardContent = component$<CardContentProps>((props) => {
  return (
    <div class={cn("p-6 pt-0", props.class)}>
      <Slot />
    </div>
  );
});

type CardFooterProps = QwikIntrinsicElements["div"];
const CardFooter = component$<CardFooterProps>((props) => {
  return (
    <div class={cn("p-6", props.class)}>
      <Slot />
    </div>
  );
});

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
