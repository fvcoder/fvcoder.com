import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
	useLocation,
} from "@remix-run/react";
import { useEffect, useState } from "react";

import { AppLayout } from "./modules/app/layout";
import styles from "./styles/tailwind.css";

interface rootLoader {
	lang: "es" | "en";
}

export const loader: LoaderFunction = ({ request }) => {
	const location = new URL(request.url);

	return json<rootLoader>({
		lang: /\/blog/.test(location.pathname) ? "es" : "en",
	});
};

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: styles },
	{ rel: "apple-touch-icon", type: "image/png", sizes: "76x76", href: "/apple-icon-76x76.png" },
	{ rel: "apple-touch-icon", type: "image/png", sizes: "72x72", href: "/apple-icon-72x72.png" },
	{ rel: "apple-touch-icon", type: "image/png", sizes: "60x60", href: "/apple-icon-60x60.png" },
	{ rel: "apple-touch-icon", type: "image/png", sizes: "57x57", href: "/apple-icon-57x57.png" },
	{ rel: "apple-touch-icon", type: "image/png", sizes: "114x114", href: "/apple-icon-114x114.png" },
	{ rel: "apple-touch-icon", type: "image/png", sizes: "120x120", href: "/apple-icon-120x120.png" },
	{ rel: "apple-touch-icon", type: "image/png", sizes: "144x144", href: "/apple-icon-144x144.png" },
	{ rel: "apple-touch-icon", type: "image/png", sizes: "152x152", href: "/apple-icon-152x152.png" },
	{ rel: "apple-touch-icon", type: "image/png", sizes: "180x180", href: "/apple-icon-180x180.png" },
	{ rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192x192.png" },
	{ rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
	{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
	{ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
];

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Fernando Ticona @fvcoder",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	const loader = useLoaderData<rootLoader>();
	const location = useLocation();
	const [lang, setLang] = useState<rootLoader["lang"]>(loader.lang);

	useEffect(() => {
		setLang(/\/blog/.test(location.pathname) ? "es" : "en");
	}, [location]);

	return (
		<html lang={lang}>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<AppLayout>
					<Outlet />
				</AppLayout>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
