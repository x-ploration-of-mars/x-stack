import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { QButton } from "~/integrations/react/ui/button";
import { useAuthSignout } from "~/routes/plugin@auth";

export default component$(() => {
  const signout = useAuthSignout();
  return (
    <Form action={signout}>
      <div class="drop-shadow-[0_0_2px_#fff]">
        <input type="hidden" name="callbackUrl" value="/" />
        <QButton variant="link" type="submit">
          <div class="">Sign Out</div>
        </QButton>
      </div>
    </Form>
  );
});
