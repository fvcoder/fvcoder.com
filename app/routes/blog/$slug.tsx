import type { LinksFunction, MetaFunction } from "@remix-run/node";
import highlightStyle from "highlight.js/styles/github-dark.css";

import type { blogPostL } from "~/modules/blog";
import { blogPostLoader } from "~/modules/blog";
import { BlogPostPage } from "~/modules/blog/page/post";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: highlightStyle }];

export const loader = blogPostLoader;

export const meta: MetaFunction = ({ data }: { data: blogPostL }) => {
	const description =
		data.data.description[0]?.type === "paragraph" ? data.data.description[0].text : "";

	return {
		title: data.title,
		titleMeta: {
			name: "title",
			content: data.title,
		},
		description,
		robots: "index,follow,max-image-preview:large",
		"og:type": "website",
		"og:site_name": "Fernando Ticona",
		"og:url": data.url,
		"og:title": data.title,
		"og:description": description,
		"og:image": data.img,
		"twitter:card": "summary_large_image",
		"twitter:site": "@thefersh24",
		"twitter:url": data.url,
		"twitter:title": data.title,
		"twitter:description": description,
		"twitter:image": data.img,
		"theme-color": "#000000",
		"article:author": new URL(data.url).origin,
		author: "Fernando Ticona",
	};
};

export default BlogPostPage;
