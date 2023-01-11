import type { MetaFunction } from "@remix-run/node";

import type { projectPostL } from "~/modules/projects";
import { projectPostLoader, ProjectPostPage } from "~/modules/projects";

export const loader = projectPostLoader;

export const meta: MetaFunction = ({ data }: { data: projectPostL }) => {
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

export default ProjectPostPage;
