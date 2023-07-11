import { component$ } from "@builder.io/qwik";
import { Form, useNavigate } from "@builder.io/qwik-city";
import { useAuthSignout } from "~/routes/plugin@auth";

export default component$(() => {
  const signOut = useAuthSignout();
  const nav = useNavigate();
  return (
    <Form action={signOut} onSubmitCompleted$={() => nav()}>
      <input type="hidden" name="callbackUrl" value="/" />
      <button>Sign Out</button>
    </Form>
  );
});
