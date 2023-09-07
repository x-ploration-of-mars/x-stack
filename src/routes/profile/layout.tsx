import { QSeparator } from "~/integrations/react/ui/separator";
import { Slot, component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { useAuthSession } from "../plugin@auth";
import { LuChevronLeft } from "@qwikest/icons/lucide";

export const head: DocumentHead = {
  title: "X-Stack",
  meta: [
    {
      name: "Profile",
      content: "Advanced form example using server loaders/actions and Zod.",
    },
  ],
};

export default component$(() => {
  const session = useAuthSession();

  console.log("session.value?.user.image", session.value?.user.image);
  return (
    <>
      <div class="space-y-6 p-10 pb-16">
        <div class="flex items-center space-y-0.5">
          <div class="">
            <Link href="/">
              <LuChevronLeft class="h-12 w-12 text-muted-foreground" />
            </Link>
          </div>
          <div class="ml-2 flex">
            <img
              class="rounded-full"
              src={session.value?.user.image ?? "https://via.placeholder.com/48"}
              alt="discord avatar"
              width={48}
              height={48}
            />
          </div>
          <div class="ml-2">
            <h2 class="text-2xl font-bold tracking-tight">Profile</h2>
            <p class="text-muted-foreground">
              Manage your public information and account settings.
            </p>
          </div>
        </div>
        <QSeparator className="my-6" />
        <div class="flex justify-center lg:max-w-2xl">
          <Slot />
        </div>
      </div>
    </>
  );
});
