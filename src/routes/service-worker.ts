/*
 * WHAT IS THIS FILE?
 *
 * The service-worker.ts file is used to have state of the art prefetching.
 * https://qwik.builder.io/qwikcity/prefetching/overview/
 *
 * Qwik uses a service worker to speed up your site and reduce latency, ie, not used in the traditional way of offline.
 * You can also use this file to add more functionality that runs in the service worker.
 */

import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from "workbox-precaching";
import { NavigationRoute, registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";

import { setupServiceWorker } from "@builder.io/qwik-city/service-worker";

const revision = import.meta.env.BUILD_NUMBER;

precacheAndRoute([
  { url: "/", revision },
  { url: "/settings/account/", revision },
  { url: "/settings/profile/", revision },
  { url: "/settings/contact/", revision },
  { url: "/documentation", revision },
  { url: "/signin/", revision },
  { url: "/pub/privacy-policy", revision },
  { url: "/pub/terms-of-service", revision },
  { url: "/manifest.json", revision },
  { url: "/icons/X-light/android-chrome-192x192.png", revision },
  { url: "/icons/X-light/android-chrome-512x512.png", revision },
  { url: "/icons/X-light/apple-touch-icon.png", revision },
  { url: "/icons/X-light/favicon-16x16.png", revision },
  { url: "/icons/X-light/favicon-32x32.png", revision },
  { url: "/icons/X-light/mstile-150-150.png", revision },
]);
cleanupOutdatedCaches();
registerRoute(new NavigationRoute(createHandlerBoundToURL("/")));
registerRoute(
  ({ request }) =>
    request.destination === "style" || request.destination === "image",
  new CacheFirst()
);

setupServiceWorker();

addEventListener("install", () => self.skipWaiting());

addEventListener("activate", () => self.clients.claim());

declare const self: ServiceWorkerGlobalScope;
