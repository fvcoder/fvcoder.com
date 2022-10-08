import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react";
import { Pagination } from "~/components/pagination";
import type { getBlogListR } from "~/prismic/blog.list";
import { getBlogListByTag } from "~/prismic/blog.list";
import Image from 'public/ms-icon-310x310.png'

export type TagViewLoader = {
  list: getBlogListR['data']
  page: number
  totalPages: number
  url: string
  tag: string
}

export const meta: MetaFunction = ({ data: { url, page, tag } }) => {
  const title = `Blog de Fernando Ticona - ${tag} | Pagina ${page}`
  const description = "Blog de Fernando Ticona Ticona @fvcoder"
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

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url)
  const page = url.searchParams.has('page')
    ? Number.isNaN(Number(url.searchParams.get('page')))
      ? 1
      : Number(url.searchParams.get('page'))
    : 1
  const list = await getBlogListByTag(String(params.slug), page)
  return json<TagViewLoader>({ list: list.data, page, totalPages: list.pageSize, url: request.url.split("?")[0], tag: String(params.slug) })
}

export default function TagView(): JSX.Element {
  const { list, page, totalPages, tag } = useLoaderData<TagViewLoader>()
  return (
    <>
      <section className=" dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">{tag}</h1>
                <p className="max-w-lg mx-auto mt-4 text-gray-500">
                  Tag “{tag}”, pagina {page}
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
              {list.map((x, i) => (
                <div key={`blog-list-${i}`}>
                    <img className="relative z-10 object-cover w-full rounded-md h-96" src={x.image} alt={x.imageAlt || x.title} />

                    <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                        <Link to={`/blog/${x.uid}`} className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                            {x.title}
                        </Link>

                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            {x.description}
                        </p>

                        <p className="mt-3 text-sm text-blue-500">{x.lastPublicationDate}</p>
                    </div>
                </div>
              ))}
            </div>
        </div>
    </section>
    <Pagination page={page} pageSize={totalPages} route={`/tag/${tag}`} />
  </>
  )
}
