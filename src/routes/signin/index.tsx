import { component$ } from "@builder.io/qwik";
import Signin from "~/components/auth/signin";
import { useAuthSession } from "~/routes/plugin@auth";
import Signout from "~/components/auth/signout";

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
  const session = useAuthSession();

  return (
    <>
      {!session.value?.user ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
          }}
        >
          <Signin />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
          }}
        >
          <Signout />
        </div>
      )}
    </>
  );
});
