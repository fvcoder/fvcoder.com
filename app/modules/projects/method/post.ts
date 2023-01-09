import { client } from "~/integrations/prismic";
import { dateFotmat } from "~/util";

import type { projectPost } from "../types";

interface projectGetPostProps {
	slug: string;
}

export async function projectGetPost({ slug }: projectGetPostProps): Promise<projectPost> {
	const res = await client.getByUID("project", slug);

	return {
		title: res.data.title[0]?.text ?? "",
		date: dateFotmat(res.last_publication_date),
		img: res.data.cover.url ?? "",
		imgAlt: res.data.cover.alt ?? "",
		data: res.data,
	};
}
