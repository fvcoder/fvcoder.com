import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { NetworkFirst } from "workbox-strategies";

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

// images.prismic.io/thefersh

// images
registerRoute(
  ({ url }) => url.origin === "https://images.prismic.io",
  new NetworkFirst({ cacheName: "img" })
);

// scripts
registerRoute(
  ({ url, request }) => request.destination === "script",
  new NetworkFirst({ cacheName: "js" })
);
