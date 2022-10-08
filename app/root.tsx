import type { LinksFunction, MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLocation } from "@remix-run/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "./tailwind.css";
import highlightStyle from 'highlight.js/styles/github-dark.css'
import { useState, useEffect } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: highlightStyle },
];

export const loader: LoaderFunction = ({ request }) => {
  let lang = "en"
  const u = new URL(request.url.split("?")[0])
  if(/\/blog/.test(u.pathname)) lang = "es"
  return json({ url: request.url, lang })
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Fernando Ticona",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const loader = useLoaderData()
  const location = useLocation()
  const [lang, setLang] = useState(loader.lang as string)
  const [url, setUrl] = useState(loader.url as string)

  useEffect(() => {
    const u = new URL(url.split("?")[0])
    u.pathname = location.pathname
    setUrl(u.toString())
    setLang(/\/blog/.test(u.pathname) ? "es" : "en")
  }, [location, url])

  return (
    <html lang={lang}>
      <head>
        <Meta />
        <link rel="canonical" href={url} />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href="/favicon.ico"
        />
        <Links />
      </head>
      <body className="bg-gray-100  dark:bg-gray-900">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
