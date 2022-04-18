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
import fontsStyles from "./styles/fonts.css";
import highlightStyle from "highlight.js/styles/base16/google-dark.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

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
    { rel: "stylesheet", href: highlightStyle },
    { rel: "stylesheet", href: fontsStyles },
  ];
}

export default function App(): JSX.Element {
  return (
    <html lang="es">
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
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#0f172a" />
        <Links />
      </head>
      <body className="bg-white dark:bg-slate-900 text-black dark:text-white font-lato">
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />

        {process.env.NODE_ENV === "development" ? (
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
        `,
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
        `,
              }}
            ></script>
          </>
        )}
      </body>
    </html>
  );
}
