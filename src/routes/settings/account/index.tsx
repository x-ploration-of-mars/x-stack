import { type Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import { routeAction$ } from "@builder.io/qwik-city";
import { eq } from "drizzle-orm";
import Button from "~/components/ui/button";
import { db } from "~/drizzle/db";
import { users } from "~/drizzle/schema/auth";
import { QSeparator } from "~/integrations/react/ui/separator";

export const useDeleteAccountAction = routeAction$(async (data, event) => {
  const session: Session | null = event.sharedMap.get("session");

  await db.transaction(async (tx) => {
    await tx.delete(users).where(eq(users.name, session?.user.name as string));
  });
});

export default component$(() => {
  return (
    <>
      <div>
        <div>
          <h2 class="text-lg font-semibold">Account</h2>
          <p class="text-sm text-muted-foreground">
            Manage your account settings.
          </p>
        </div>
        <QSeparator className="my-6" />

        <div>
          <h3 class="text-primary font-bold text-3xl">Delete Account</h3>
          <p class="mt-4">
            Click the red button if you want to delete this account. Be careful
            this action is irreversible and I'm too lazy to code a warning
            popup.
          </p>
          <Button variant={"destructive"} class="mt-4">
            Delete Account
          </Button>
        </div>
      </div>
    </>
  );
});
