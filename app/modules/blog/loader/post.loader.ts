import type { LoaderFunction } from "@remix-run/router";
import { json } from "@remix-run/router";

import { res404 } from "~/util/http.status";

import { blogGetPost } from "../method/post";
import type { blogPost } from "../types";

export interface blogPostL extends blogPost {
	url: string;
}

export const blogPostLoader: LoaderFunction = async ({ params, request }) => {
	try {
		return json<blogPostL>({
			...(await blogGetPost({ slug: params.slug ?? "", url: request.url })),
			url: request.url,
		});
	} catch {
		res404();

		return;
	}
};
