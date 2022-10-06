import type { LoaderFunction } from "@remix-run/node"
import type { getProjectListRes } from "~/prismic/project.list";
import { ProjectSection } from "~/components/section/project";
import { json } from "@remix-run/node"
import { getProjectList } from "~/prismic/project.list";
import { useLoaderData } from "@remix-run/react";
import { Pagination } from "~/components/pagination";

export interface ProjectPageLoader {
  project: getProjectListRes,
  page: number
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const page = url.searchParams.has('page')
    ? Number.isNaN(url.searchParams.get('page'))
      ? 1
      : Number(url.searchParams.get('page'))
    : 1
  const project = (await getProjectList(1))
  return json<ProjectPageLoader>({ project, page })
}

export default function ProjectPage(): JSX.Element {
  const { project, page } = useLoaderData<ProjectPageLoader>()
  return (
    <div>
      <ProjectSection data={project.data} notSeeALl />
      <Pagination page={page} pageSize={project.pageSize} route="/project" />
    </div>
  )
}
