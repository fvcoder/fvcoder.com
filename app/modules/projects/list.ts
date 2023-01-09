import { client } from "~/integrations/prismic";
import { dateFotmat } from "~/util";

import type { projectPage } from "./types";

export interface projectGetPageProps {
	page?: number;
	pageSize?: number;
}

export async function projectGetPage({
	page,
	pageSize,
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
			img: x.data.logo.url ?? "",
			imgAlt: x.data.logo.alt ?? "",
		})),
	};
}
