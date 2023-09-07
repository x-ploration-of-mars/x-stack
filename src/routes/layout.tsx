import { type Session } from "@auth/core/types";
import { component$, Slot } from "@builder.io/qwik";
import { type RequestHandler, routeLoader$ } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async ({ sharedMap, url, redirect }) => {
  const session: Session | null = sharedMap.get("session");
  if (!session && url.pathname !== "/signin/") {
    throw redirect(302, `/signin/`);
  }
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <main>
        <Slot />
      </main>
    </>
  );
});
