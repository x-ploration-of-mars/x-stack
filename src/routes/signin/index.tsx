import { component$ } from "@builder.io/qwik";
import Signin from "~/components/auth/signin";

// const writeFile = $(async () => {
//   try {
//     const response = await Filesystem.mkdir({
//       path: "secrets",
//       directory: Directory.Data,
//     });
//     console.log("response", response);
//   } catch (error) {
//     console.log("error", error);
//   }
// });

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
      )
    </>
  );
});
