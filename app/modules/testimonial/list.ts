import { client } from "~/integrations/prismic";

import type { testimonialPage } from "./types";

export interface testimonialGetPageProps {
	page?: number;
	pageSize?: number;
}

export async function testimonialGetPage({
	page,
	pageSize,
}: testimonialGetPageProps): Promise<testimonialPage> {
	const res = await client.getByType("testimonial", {
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
			username: x.data.name[0]?.text ?? "",
			role: x.data.relationship[0]?.type === "paragraph" ? x.data.relationship[0].text : "",
			review: x.data.testimonial[0]?.type === "paragraph" ? x.data.testimonial[0].text : "",
			avatar: x.data.profile.url ?? "",
		})),
	};
}
