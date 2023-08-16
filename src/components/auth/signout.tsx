import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignout } from "~/routes/plugin@auth";
import { Button } from "../ui/button";

export default component$(() => {
  const signout = useAuthSignout();
  return (
    <Form action={signout}>
      <div class="drop-shadow-[0_0_2px_#fff]">
        <input type="hidden" name="callbackUrl" value="/" />
        <Button variant="outline">Sign Out</Button>
      </div>
    </Form>
  );
});
