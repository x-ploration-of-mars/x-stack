import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignout } from "~/routes/plugin@auth";
import Button from "../ui/button";
import { LuLogOut } from "@qwikest/icons/lucide";

export default component$(() => {
  const signout = useAuthSignout();
  return (
    <Form action={signout}>
      <input type="hidden" name="callbackUrl" value="/" />
      <Button
        variant={"link"}
        class={["drop-shadow-neon-sm animate-flicker text-secondary"]}
        type="submit"
      >
        Sign Out <LuLogOut class="ml-2" />
      </Button>
    </Form>
  );
});
