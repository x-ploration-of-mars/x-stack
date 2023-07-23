import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignout } from "~/routes/plugin@auth";

export default component$(() => {
  const signout = useAuthSignout();
  return (
    <Form action={signout}>
      <input type="hidden" name="callbackUrl" value="/" />
      <button>Sign Out</button>
    </Form>
  );
});

// export default component$(() => {
//   const nav = useNavigate();
//   return <button onClick$={() => nav("/signout/")}>Sign Out</button>;
// });
