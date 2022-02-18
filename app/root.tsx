import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => {
  const description =
    "Creo interfaces en paginas web, para que los usuarios puedan tener una experiencia agradable e intuitiva.";
  const title = "Fernando Ticona | Desarrollador web Frontend";
  return {
    title,
    description,
    "twitter:card": "summary",
    "twitter:creator": "@thefersh24",
    "twitter:site": "@thefersh24",
    "twitter:title": title,
    "twitter:description": description,
    "og:type": "website",
    "og:title": title,
    "og:description": description,
  };
};

export function links() {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/pace/1.2.4/themes/blue/pace-theme-minimal.min.css",
    },
    { rel: "stylesheet", href: styles },
  ];
}

export default function App(): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/pace/1.2.4/pace.min.js"
          integrity="sha512-2cbsQGdowNDPcKuoBd2bCcsJky87Mv0LEtD/nunJUgk6MOYTgVMGihS/xCEghNf04DPhNiJ4DZw5BxDd1uyOdw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
