import { type Session } from "@auth/core/types";
import { component$, useSignal } from "@builder.io/qwik";
import { routeAction$ } from "@builder.io/qwik-city";
import { LuLoader2 } from "@qwikest/icons/lucide";
import { eq } from "drizzle-orm";
import Button from "~/components/ui/button";
import { db } from "~/drizzle/db";
import { accounts, sessions, users } from "~/drizzle/schema/auth";
import { QSeparator } from "~/integrations/react/ui/separator";

export const useDeleteAccountAction = routeAction$(async (data, event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (!session) throw event.redirect(302, "/signin/");

  await db.transaction(async (tx) => {
    await tx.delete(users).where(eq(users.id, session.user.id));
    await tx.delete(accounts).where(eq(accounts.userId, session.user.id));
    await tx.delete(sessions).where(eq(sessions.userId, session.user.id));
  });

  throw event.redirect(302, "/signin/");
});

export default component$(() => {
  const deleteAccountAction = useDeleteAccountAction();

  const deleteSubmitting = useSignal(false);
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

          <div class="mt-4">
            {deleteSubmitting.value ? (
              <Button variant={"destructive"} class="w-32">
                <LuLoader2 class="w-5 h-5 animate-spin" />
              </Button>
            ) : (
              <Button
                variant={"destructive"}
                class="w-32"
                onClick$={async () => {
                  deleteSubmitting.value = true;
                  await deleteAccountAction.submit();
                }}
              >
                Delete Account
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
});
