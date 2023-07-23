// import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";
// import { useNavigate } from "@builder.io/qwik-city";
// import { useAuthSession, useAuthSignout } from "~/routes/plugin@auth";

// export default component$(() => {
//   const signout = useAuthSignout();
//   const session = useAuthSession();
//   const nav = useNavigate();

//   useTask$(() => {
//     if (session.value?.user) {
//       signout.submit({ callbackUrl: "/signin/" });
//     }
//   });

//   useVisibleTask$(() => {
//     if (!session.value?.user) {
//       nav("/signin/");
//     }
//   });
//   return null;
// });
