import { type QwikIntrinsicElements, component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { cva } from "class-variance-authority";
import { buttonVariants } from "./button";
import { cn } from "~/lib/utils";

type SidebarNavProps = QwikIntrinsicElements["nav"] & {
  items: {
    href: string;
    title: string;
  }[];
};

const cardVariants = cva(
  "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1"
);

export const SidebarNav = component$<SidebarNavProps>(({ items, ...props }) => {
  const location = useLocation();
  return (
    <nav class={cardVariants({ class: props.class })} {...props}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          class={cn(
            buttonVariants({ variant: "ghost" }),
            location.url.pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
});
