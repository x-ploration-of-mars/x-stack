import { component$ } from "@builder.io/qwik";
import { Form, useNavigate } from "@builder.io/qwik-city";
import { useAuthSignin } from "~/routes/plugin@auth";

export default component$(() => {
  const signIn = useAuthSignin();
  const nav = useNavigate();

  return (
    <Form action={signIn} onSubmitCompleted$={() => nav()}>
      <input type="hidden" name="providerId" value="discord" />
      <input
        type="hidden"
        name="options.callbackUrl"
        value="http://qwik-auth-example.com/dashboard"
      />
      <button>Sign In</button>
    </Form>
  );
});
