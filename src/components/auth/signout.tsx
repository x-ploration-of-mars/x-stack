import { component$ } from "@builder.io/qwik";
import { Form, Link } from "@builder.io/qwik-city";
import { useAuthSignout } from "~/routes/plugin@auth";
import { buttonVariants } from "../ui/button";
import { LuLogOut } from "@qwikest/icons/lucide";
import xGlowStyles from "~/components/x-glow/x-glow.module.css";

export default component$(() => {
  const signout = useAuthSignout();
  return (
    <Form action={signout}>
      <input type="hidden" name="callbackUrl" value="/" />
      <Link
        class={[buttonVariants({ variant: "link" }), xGlowStyles.neon, "text-secondary"]}
        type="submit"
      >
        Sign Out <LuLogOut class="ml-2" />
      </Link>
    </Form>
  );
});
