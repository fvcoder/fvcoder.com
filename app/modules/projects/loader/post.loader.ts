import type { LoaderFunction } from "@remix-run/router";
import { json } from "@remix-run/router";

import { projectGetPost } from "../method/post";
import type { projectPost } from "../types";

export interface projectPostL extends projectPost {
	url: string;
}

export const projectPostLoader: LoaderFunction = async ({ params, request }) => {
	return json<projectPostL>({
		...(await projectGetPost({ slug: params.slug ?? "" })),
		url: request.url,
	});
};
