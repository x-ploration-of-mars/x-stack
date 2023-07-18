import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "~/components/starter/header/header";
import Footer from "~/components/starter/footer/footer";

import styles from "./styles.css?inline";

// import type { Session } from "@auth/core/types";

// export const onRequest: RequestHandler = async ({
//   sharedMap,
//   url,
//   redirect,
// }) => {
//   const session: Session | null = sharedMap.get("session");
//   if (!session && url.pathname !== "/signin/") {
//     throw redirect(302, `/signin`);
//   }
//   console.log("request");
// };
export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    noStore: true,
    // // Always serve a cached response by default, up to a week stale
    // staleWhileRevalidate: 60 * 60 * 24 * 7,
    // // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    // maxAge: 5,
  });

  console.log("get");
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
