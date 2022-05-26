import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'

declare const self: {
  __WB_MANIFEST: string[]
  skipWaiting: () => Promise<void>
}
const filesPrecaching = self.__WB_MANIFEST

registerRoute(
  ({ url }) => url.origin === 'https://images.prismic.io',
  new StaleWhileRevalidate({
    cacheName: 'img',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 25
      })
    ]
  })
)

registerRoute(
  ({ request }) => request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'style',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 25
      })
    ]
  })
)

registerRoute(
  ({ request }) => request.destination === 'font',
  new StaleWhileRevalidate({
    cacheName: 'fonts',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 25
      })
    ]
  })
)

// from thefersh.com
registerRoute(
  ({ url }) => {
    return url.origin === 'https://thefersh.com/'
  },
  new StaleWhileRevalidate({
    cacheName: 'assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 25
      })
    ]
  })
)

self.skipWaiting()
