import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { blogGetPage } from "~/modules/blog/list";
import type { blogPage } from "~/modules/blog/types";

export interface IndexPageLoader {
	blog: blogPage;
}

export const indexPageLoader: LoaderFunction = async () => {
	return json<IndexPageLoader>({ blog: await blogGetPage({ page: 1, pageSize: 4 }) });
};
