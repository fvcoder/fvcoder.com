import type { MetaFunction } from "@remix-run/node";

import Logo from "~/assets/icon-48x48.png";
import { indexPageLoader } from "~/modules/app/loader";
import { IndexPage } from "~/modules/app/page";

export const loader = indexPageLoader;

export const meta: MetaFunction = ({ data: { url } }) => {
	const title = "Fernando Ticona @fvcoder";
	const description =
		"I am a web programmer in Bolivia, looking for new projects in which I can participate.";
	const origin = new URL(url as string).origin;
	const image = origin + Logo;

	return {
		title,
		titleMeta: {
			name: "title",
			content: title,
		},
		description,
		robots: "index,follow,max-image-preview:large",
		"og:type": "website",
		"og:site_name": "Fernando Ticona",
		"og:url": origin,
		"og:title": title,
		"og:description": description,
		"og:image": image,
		"twitter:card": "summary_large_image",
		"twitter:site": "@fvcoder1",
		"twitter:url": origin,
		"twitter:title": title,
		"twitter:description": description,
		"twitter:image": image,
		"theme-color": "#000000",
		"article:author": origin,
		author: "Fernando Ticona",
	};
};

export default IndexPage;
