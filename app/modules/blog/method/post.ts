import * as prismic from "@prismicio/client";

import { client } from "~/integrations/prismic";
import { dateFotmat } from "~/util";

import type { blogPost } from "../types";

interface blogGetPostProps {
	slug: string;
	url: string;
}

export async function blogGetPost({ slug, url }: blogGetPostProps): Promise<blogPost> {
	const u = new URL(url);
	const res = await client.getByUID("blog", slug, {
		ref: u.searchParams.has("token") ? u.searchParams.get("token") ?? undefined : undefined,
	});

	const predicate = await client.getByType("blog", {
		predicates: [
			prismic.predicate.similar(res.id, 3),
			prismic.predicate.at("document.type", "blog"),
		],
		page: 1,
		pageSize: 3,
	});

	return {
		title: res.data.title[0]?.text ?? "",
		date: dateFotmat(res.last_publication_date),
		img: res.data.image.url ?? "",
		imgAlt: res.data.image.alt ?? "",
		description: res.data.description[0]?.type === "paragraph" ? res.data.description[0].text : "",
		data: res.data,
		related: predicate.results.map((x) => ({
			to: `/blog/${x.uid}`,
			title: x.data.title[0]?.text ?? "",
			date: dateFotmat(x.last_publication_date),
			img: x.data.image.url ?? "",
			imgAlt: x.data.image.alt ?? "",
			description: x.data.description[0]?.type === "paragraph" ? x.data.description[0].text : "",
		})),
	};
}
