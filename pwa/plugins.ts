import { ExpirationPlugin } from "workbox-expiration";

export const defaultPlugins = [
  new ExpirationPlugin({
    maxEntries: 25,
  }),
];
