import { component$, type QwikIntrinsicElements, Slot } from "@builder.io/qwik";
import { cva } from "class-variance-authority";

type CardProps = QwikIntrinsicElements["div"];
const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm"
);
const Card = component$<CardProps>((props) => {
  return (
    <div class={[cardVariants({ class: props.class })]}>
      <Slot />
    </div>
  );
});

type CardHeaderProps = QwikIntrinsicElements["div"];
const cardHeaderVariants = cva("flex flex-col space-y-1.5 p-6");
const CardHeader = component$<CardHeaderProps>((props) => {
  return (
    <div class={[cardHeaderVariants({ class: props.class })]}>
      <Slot />
    </div>
  );
});

type CardTitleProps = QwikIntrinsicElements["h3"];
const cardTitleVariants = cva(
  "text-2xl font-semibold leading-none tracking-tight"
);
const CardTitle = component$<CardTitleProps>((props) => {
  return (
    <h3 class={[cardTitleVariants({ class: props.class })]}>
      <Slot />
    </h3>
  );
});

type CardDescriptionProps = QwikIntrinsicElements["p"];
const cardDescriptionVariants = cva("text-sm text-muted-foreground");
const CardDescription = component$<CardDescriptionProps>((props) => {
  return (
    <p class={[cardDescriptionVariants({ class: props.class })]}>
      <Slot />
    </p>
  );
});

type CardContentProps = QwikIntrinsicElements["div"];
const cardContentVariants = cva("p-6 pt-0");
const CardContent = component$<CardContentProps>((props) => {
  return (
    <div class={[cardContentVariants({ class: props.class })]}>
      <Slot />
    </div>
  );
});

type CardFooterProps = QwikIntrinsicElements["div"];
const cardFooterVariants = cva("p-6");
const CardFooter = component$<CardFooterProps>((props) => {
  return (
    <div class={[cardFooterVariants({ class: props.class })]}>
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
