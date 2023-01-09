import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { blogGetPage } from "~/modules/blog/list";
import type { blogPage } from "~/modules/blog/types";
import { projectGetPage } from "~/modules/projects";
import type { projectPage } from "~/modules/projects/types";

export interface IndexPageLoader {
	blog: blogPage;
	project: projectPage;
}

export const indexPageLoader: LoaderFunction = async () => {
	return json<IndexPageLoader>({
		blog: await blogGetPage({ page: 1, pageSize: 4 }),
		project: await projectGetPage({ page: 1, pageSize: 4 }),
	});
};
