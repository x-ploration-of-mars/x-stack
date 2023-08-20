import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignin } from "~/routes/plugin@auth";

import { LuGamepad2 } from "@qwikest/icons/lucide";
import { QButton } from "~/integrations/react/ui/button";

export default component$(() => {
  const signIn = useAuthSignin();

  return (
    <Form action={signIn} class="flex justify-center">
      <input type="hidden" name="providerId" value="discord" />
      <input type="hidden" name="options.callbackUrl" value="/" />
      <QButton variant="outline" type="submit">
        <LuGamepad2 class="mr-2" /> Sign In
      </QButton>
    </Form>
  );
});
