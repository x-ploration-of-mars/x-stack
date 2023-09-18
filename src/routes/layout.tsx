import { type Session } from "@auth/core/types";
import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import {
  type RequestHandler,
  routeLoader$,
  useLocation,
} from "@builder.io/qwik-city";

import { QProgress } from "~/integrations/react/ui/progress";

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

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

export const onGet: RequestHandler = async (event) => {
  const { sharedMap } = event;
  const session: Session | null = sharedMap.get("session");
  if (!session) {
    event.headers.set(
      "Cache-Control",
      "public, max-age=60, s-maxage=120, stale-while-revalidate=86400"
    );
    // needed for vercel-edge to not trim s-maxage and stale-while-revalidate headers
    event.headers.set(
      "CDN-Cache-Control",
      "public, max-age=60, s-maxage=120, stale-while-revalidate=86400"
    );
  } else {
    event.headers.set(
      "Cache-Control",
      "private, max-age=5, s-maxage=0, stale-while-revalidate=86400"
    );
    // needed for vercel-edge to not trim s-maxage and stale-while-revalidate headers
    event.headers.set(
      "CDN-Cache-Control",
      "private, max-age=5, s-maxage=0, stale-while-revalidate=86400"
    );
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

  useVisibleTask$(({ track }) => {
    track(() => location.isNavigating);
    if (location.isNavigating) {
      delay(30).then(() => {
        progress.value = 100;
      });
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
