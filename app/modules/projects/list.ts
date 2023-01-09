import { client } from "~/integrations/prismic";
import { dateFotmat } from "~/util";

import type { projectPage } from "./types";

export interface projectGetPageProps {
	page?: number;
	pageSize?: number;
	preview?: boolean;
}

export async function projectGetPage({
	page,
	pageSize,
	preview,
}: projectGetPageProps): Promise<projectPage> {
	const res = await client.getByType("project", {
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
			to: `/project/${x.uid}`,
			title: x.data.title[0]?.text ?? "",
			date: dateFotmat(x.last_publication_date),
			img: (preview ? x.data.cover.url : x.data.logo.url) ?? "",
			imgAlt: (preview ? x.data.cover.alt : x.data.logo.alt) ?? "",
		})),
	};
}
