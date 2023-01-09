import { client } from "~/integrations/prismic";
import { dateFotmat } from "~/util";

import type { blogPage } from "./types";

export interface blogGetPageProps {
	page?: number;
	pageSize?: number;
}

export async function blogGetPage({ page, pageSize }: blogGetPageProps): Promise<blogPage> {
	const res = await client.getByType("blog", {
		orderings: {
			field: "document.last_publication_date",
			direction: "desc",
		},
		pageSize: pageSize ?? 12,
		page: page ?? 1,
	});

	return {
		totalPage: res.total_pages,
		page: res.page,
		post: res.results.map((x) => ({
			to: `/blog/${x.uid}`,
			title: x.data.title[0]?.text ?? "",
			date: dateFotmat(x.last_publication_date),
			img: x.data.image.url ?? "",
			imgAlt: x.data.image.alt ?? "",
			description: x.data.description[0]?.type === "paragraph" ? x.data.description[0].text : "",
		})),
	};
}
