import { cn } from "~/lib/utils";
import { buttonVariants } from "~/integrations/react/ui/button";
import { type HTMLAttributes, component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

interface SidebarNavProps extends HTMLAttributes<HTMLElement> {
  additionalClass?: string;
  items: {
    href: string;
    title: string;
  }[];
}

export default component$(
  ({ additionalClass, items, ...props }: SidebarNavProps) => {
    const location = useLocation();
    const pathname = location.url.pathname;

    return (
      <nav
        class={cn(
          "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
          additionalClass,
        )}
        {...props}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            class={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === item.href
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start",
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    );
  },
);
