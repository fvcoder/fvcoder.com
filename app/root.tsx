import type { LinksFunction, MetaFunction } from '@remix-run/node'
import styles from './style/main.css'
import { NavbarDefault } from '~/components/navbar'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import { FooterDefault } from './components/footer'
import highlightStyle from 'highlight.js/styles/base16/google-dark.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '57x57',
      href: '/apple-icon-57x57.png'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '60x60',
      href: '/apple-icon-60x60.png'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '72x72',
      href: '/apple-icon-72x72.png'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '76x76',
      href: '/apple-icon-76x76.png'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '114x114',
      href: '/apple-icon-114x114.png'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '120x120',
      href: '/apple-icon-120x120.png'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '144x144',
      href: '/apple-icon-144x144.png'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '152x152',
      href: '/apple-icon-152x152.png'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      href: '/apple-icon-180x180.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/android-icon-192x192.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/favicon-96x96.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    },
    { rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon.ico' },
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: highlightStyle },
    {
      rel: 'manifest',
      href: '/manifest.json'
    }
  ]
}

export const meta: MetaFunction = () => {
  const description =
    'Creo interfaces en paginas web, para que los usuarios puedan tener una experiencia agradable e intuitiva.'
  const title = 'Fernando Ticona | Desarrollador web Frontend'
  return {
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
    title,
    description,
    'twitter:card': 'summary',
    'twitter:creator': '@thefersh24',
    'twitter:site': '@thefersh24',
    'twitter:title': title,
    'twitter:description': description,
    'og:type': 'website',
    'og:title': title,
    'og:description': description
  }
}

export default function App() {
  return (
    <html lang="es">
      <head>
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#0f172a" />

        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-gray-800 font-sans">
        <NavbarDefault />
        <Outlet />
        <FooterDefault />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV !== 'production' ? (
          <LiveReload />
        ) : (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-V67XHX9Q5V"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-V67XHX9Q5V');
        `
              }}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.addEventListener('load', () => {
                  if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.register('/sw.js');
                  }
                });
        `
              }}
            ></script>
          </>
        )}
      </body>
    </html>
  )
}
