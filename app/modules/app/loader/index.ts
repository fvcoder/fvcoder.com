import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { blogGetPage } from "~/modules/blog/list";
import type { blogPage } from "~/modules/blog/types";
import { projectGetPage } from "~/modules/projects";
import type { projectPage } from "~/modules/projects/types";
import { testimonialGetPage } from "~/modules/testimonial";
import type { testimonialPage } from "~/modules/testimonial/types";

export interface IndexPageLoader {
	blog: blogPage;
	project: projectPage;
	testimonial: testimonialPage;
}
export const indexPageLoader: LoaderFunction = async () => {
	return json<IndexPageLoader>({
		blog: await blogGetPage({ page: 1, pageSize: 4 }),
		project: await projectGetPage({ page: 1, pageSize: 4 }),
		testimonial: await testimonialGetPage({ page: 1, pageSize: 3 }),
	});
};
