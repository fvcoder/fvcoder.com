import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { projectGetPage } from "~/modules/projects";
import type { projectPage } from "~/modules/projects/types";
import { getNumberPage } from "~/util";

export const ProjectExploreLoader: LoaderFunction = async ({ request }) => {
	return json<projectPage>(
		await projectGetPage({ page: getNumberPage(new URL(request.url)), pageSize: 12, preview: true })
	);
};
