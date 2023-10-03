import { type Session } from "@auth/core/types";
import { $, component$, Slot, useSignal, useTask$ } from "@builder.io/qwik";
import {
  type RequestHandler,
  routeLoader$,
  useLocation,
} from "@builder.io/qwik-city";

import { QProgress } from "~/integrations/react/ui/progress";

export const onRequest: RequestHandler = async ({
  sharedMap,
  url,
  redirect,
}) => {
  const session: Session | null = sharedMap.get("session");
  if (
    !session &&
    url.pathname !== "/signin/" &&
    !url.pathname.startsWith("/pub/")
  ) {
    throw redirect(302, `/signin/`);
  }
};

export const useServerTimeLoader = routeLoader$(async () => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const location = useLocation();
  const progress = useSignal(0);

  useTask$(({ track, cleanup }) => {
    track(() => location.isNavigating);
    track(() => progress.value);
    if (location.isNavigating) {
      const timeout = setTimeout(
        $(() => {
          progress.value = 100;
        }),
        50
      );
      cleanup(() => clearTimeout(timeout));
    }
    if (!location.isNavigating) {
      progress.value = 0;
    }
  });

  return (
    <>
      <main>
        {location.isNavigating && (
          <QProgress value={progress.value} className="w-full" />
        )}
        <Slot />
      </main>
    </>
  );
});
