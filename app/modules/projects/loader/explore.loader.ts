import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { projectGetPage } from "~/modules/projects";
import type { projectPage } from "~/modules/projects/types";
import { getNumberPage } from "~/util";

export interface projectPageL extends projectPage {
	url: string;
}

export const ProjectExploreLoader: LoaderFunction = async ({ request }) => {
	return json<projectPageL>({
		...(await projectGetPage({
			page: getNumberPage(new URL(request.url)),
			pageSize: 12,
			preview: true,
		})),
		url: request.url,
	});
};
