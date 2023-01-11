import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { client } from "~/integrations/prismic";

export const blogPreviewLoader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const redirectURL = await client.resolvePreviewURL({
		defaultURL: "/",
		documentID: String(url.searchParams.get("documentId")),
		previewToken: String(url.searchParams.get("token")),
		linkResolver: (d) => {
			const params = `?preview=true&document=${d.id}&lang=${d.lang}&token=${String(
				url.searchParams.get("token")
			)}`;
			if (d.type === "blog") {
				return `/blog/${d.uid ?? ""}${params}`;
			}
			if (d.type === "project") {
				return `/project/${d.uid ?? ""}${params}`;
			}

			return "/";
		},
	});

	return redirect(redirectURL);
};
