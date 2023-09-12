import { component$ } from "@builder.io/qwik";
import { QSeparator } from "~/integrations/react/ui/separator";

export default component$(() => {
  return (
    <>
      <div>
        <div>
          <h3 class="text-lg font-semibold">Account</h3>
          <p class="text-sm text-muted-foreground">
            Manage your account settings.
          </p>
        </div>
        <QSeparator className="mt-6" />
      </div>
    </>
  );
});
