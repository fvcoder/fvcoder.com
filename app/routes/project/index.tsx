import type { LoaderFunction, MetaFunction } from "@remix-run/node"
import type { getProjectListRes } from "~/prismic/project.list";
import { ProjectSection } from "~/components/section/project";
import { json } from "@remix-run/node"
import { getProjectList } from "~/prismic/project.list";
import { useLoaderData } from "@remix-run/react";
import { Pagination } from "~/components/pagination";
import Image from 'public/ms-icon-310x310.png'

export interface ProjectPageLoader {
  project: getProjectListRes,
  page: number
  url: string
}

export const meta: MetaFunction = ({ data: { url, page } }) => {
  const title = "Projects by Fernando Ticona | Page " + page
  const description = "Projects by Fernando Ticona @fvcoder"
  const image = new URL(url).origin + Image
  return {
    title,
    titleMeta: {
      name: "title",
      content: title,
    },
    description: description,
    robots: "index,follow,max-image-preview:large",
    "og:type": "website",
    "og:site_name": "Fernando Ticona",
    "og:url": url,
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "twitter:card": "summary_large_image",
    "twitter:site": "@fvcoder1",
    "twitter:url": url,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "theme-color": "#000000",
    "article:author": new URL(url).origin,
    "author": "Fernando Ticona"
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const page = url.searchParams.has('page')
    ? Number.isNaN(Number(url.searchParams.get('page')))
      ? 1
      : Number(url.searchParams.get('page'))
    : 1
  const project = (await getProjectList(page))
  return json<ProjectPageLoader>({ project, page, url: request.url.split("?")[0] })
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
