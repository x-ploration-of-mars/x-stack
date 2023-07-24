import { component$ } from "@builder.io/qwik";
import Signin from "~/components/auth/signin";

export default component$(() => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        <Signin />
      </div>
    </>
  );
});
