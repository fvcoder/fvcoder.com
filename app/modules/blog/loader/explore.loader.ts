import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { getNumberPage } from "~/util";
import { res404 } from "~/util/http.status";

import { blogGetPage } from "../method/list";
import type { blogPage } from "../types";

export interface blogPageL extends blogPage {
	url: string;
}

export const blogExploreLoader: LoaderFunction = async ({ request }) => {
	try {
		return json<blogPageL>({
			...(await blogGetPage({
				page: getNumberPage(new URL(request.url)),
				pageSize: 12,
			})),
			url: request.url,
		});
	} catch {
		res404();

		return;
	}
};
