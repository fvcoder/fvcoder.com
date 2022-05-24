import type { LinksFunction, MetaFunction } from '@remix-run/node'
import styles from './style/main.css'
import { NavbarDefault } from "~/components/navbar";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import { FooterDefault } from './components/footer';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
})

export default function App() {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-gray-800 font-sans">
        <NavbarDefault />
        <Outlet />
        <FooterDefault />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
