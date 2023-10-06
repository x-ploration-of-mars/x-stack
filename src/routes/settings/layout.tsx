import { QSeparator } from "~/integrations/react/ui/separator";
import { Slot, component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { useAuthSession } from "../plugin@auth";
import { LuChevronLeft } from "@qwikest/icons/lucide";
import { SidebarNav } from "~/components/ui/sidebarNav";

export const head: DocumentHead = {
  title: "X-Stack",
  meta: [
    {
      name: "Settings",
      content: "Advanced form example using server loaders/actions and Zod.",
    },
  ],
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings/profile/",
  },
  {
    title: "Account",
    href: "/settings/account/",
  },
  {
    title: "Contact",
    href: "/settings/contact/",
  },
];

export default component$(() => {
  const session = useAuthSession();

  return (
    <>
      <div class="space-y-6 p-10 pb-16">
        <div class="flex items-center space-y-0.5">
          <div class="">
            <Link href="/" prefetch>
              <LuChevronLeft class="h-12 w-12 text-muted-foreground" />
            </Link>
          </div>
          <div class="flex">
            <img
              class="min-w-[48px] rounded-full"
              src={
                session.value?.user.image ?? "https://via.placeholder.com/48"
              }
              alt="discord avatar"
              width={48}
              height={48}
            />
          </div>
          <div class="ml-4">
            <h2 class="text-2xl font-bold tracking-tight">Settings</h2>
            <p class="text-muted-foreground max-w-6xl">
              Manage your public information and account settings. This
              information is stored in a real database and may be used to show
              your profile to other 𝕏-plorers on another page in the future.
            </p>
          </div>
        </div>
        <QSeparator className="my-6" />
        <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside class="lg:pl-28 lg:w-80">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div class="flex-1 lg:max-w-2xl">
            <Slot />
          </div>
        </div>
      </div>
    </>
  );
});
