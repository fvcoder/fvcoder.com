import { precacheAndRoute } from "workbox-precaching";
import { registerRoute, setDefaultHandler } from "workbox-routing";
import { StaleWhileRevalidate, NetworkOnly } from "workbox-strategies";
import { offlineFallback } from "workbox-recipes";
import { ExpirationPlugin } from "workbox-expiration";

declare const self: ServiceWorkerGlobalScope & {
  skipWaiting: () => Promise<void>;
};
const filesPrecaching = self.__WB_MANIFEST;

registerRoute(
  ({ url }) => url.origin === "https://images.prismic.io",
  new StaleWhileRevalidate({
    cacheName: "img",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 25,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === "style",
  new StaleWhileRevalidate({
    cacheName: "style",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 25,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === "font",
  new StaleWhileRevalidate({
    cacheName: "fonts",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 25,
      }),
    ],
  })
);

// from thefersh.com
registerRoute(
  ({ url }) => {
    return url.origin === "https://thefersh.com/";
  },
  new StaleWhileRevalidate({
    cacheName: "assets",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 25,
      }),
    ],
  })
);

self.skipWaiting();
