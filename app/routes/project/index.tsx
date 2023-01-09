import type { MetaFunction } from "@remix-run/node";

import Logo from "~/assets/icon-48x48.png";
import type { projectPageL } from "~/modules/projects";
import { ProjectExplore, ProjectExploreLoader } from "~/modules/projects";

export const loader = ProjectExploreLoader;

export const meta: MetaFunction = ({ data }: { data: projectPageL }) => {
	const origin = new URL(data.url).origin;
	const title = `Projects by Fernando Ticona | Page ${data.page}`;
	const description = "Projects by Fernando Ticona @fvcoder";
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
		"og:url": data.url,
		"og:title": title,
		"og:description": description,
		"og:image": image,
		"twitter:card": "summary_large_image",
		"twitter:site": "@fvcoder1",
		"twitter:url": data.url,
		"twitter:title": title,
		"twitter:description": description,
		"twitter:image": image,
		"theme-color": "#ffffff",
		"article:author": origin,
		author: "Fernando Ticona",
	};
};

export default ProjectExplore;
