import type { LoaderFunction } from "@remix-run/node";
import type { ArticleDocument } from "~/types/article";
import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node"
import { getArticle } from "~/prismic/article";
import { Link, useLoaderData } from "@remix-run/react";
import { RenderArticle } from "~/components/article";
import { LinkCard } from "~/components/link.card";
import { shareSocialNetworks } from "~/data/shareSocialNetwork.data";

export type BlogViewLoader = ArticleDocument & { url: string}

export const meta: MetaFunction<BlogViewLoader> = ({ data }) => {
  return {
    title: data.title,
    titleMeta: {
      name: "title",
      content: data.title,
    },
    description: data.data.description[0].text,
    robots: "index,follow,max-image-preview:large",
    "og:type": "website",
    "og:site_name": "Fernando Ticona",
    "og:url": data.url,
    "og:title": data.title,
    "og:description": data.data.description[0].text,
    "og:image": data.image,
    "twitter:card": "summary_large_image",
    "twitter:site": "@thefersh24",
    "twitter:url": data.url,
    "twitter:title": data.title,
    "twitter:description": data.data.description[0].text,
    "twitter:image": data.image,
    "theme-color": "#000000",
    "article:author": new URL(data.url).origin,
    "author": "Fernando Ticona"
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  try {
    const a = await getArticle({ slug: String(params.slug), url: new URL(request.url)})
    return json<BlogViewLoader>({...a, url: request.url.split("?")[0] })
  } catch(e) {
    return new Response("Not found", { status: 404 })
  }
}

export default function BlogViewPage(): JSX.Element {
  const { title, lastPublicationDate, image, imageAlt, data, tags, url } = useLoaderData<BlogViewLoader>()
  return (
    <div>
      <header className="block text-center prose dark:prose-invert my-6 mx-auto">
        <h1 className="px-4">{title}</h1>
        <small className="text-blue-500 px-4">{lastPublicationDate}</small>
        <img src={image} alt={imageAlt ?? title} className="block w-full aspect-video object-cover sm:rounded-md shadow" />
      </header>
      <article className="prose dark:prose-invert mx-auto px-4 mb-6">
        <RenderArticle render={data.body} />
        <div className="flex gap-2 flex-wrap">
          {tags.map((x, i) => (
            <Link to={`/tag/${x}`} className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 text-sm transition-colors duration-300 rounded-lg no-underline" key={`article-tag-${i}`}>{x}</Link>
            ))}
        </div>
        <h4>Recursos</h4>
        <div className="grid gap-4 grid-cols-1">
            {(data.resource as string).split(/\n/).map((x, i) => (
              <LinkCard href={x} key={`link-${i}`} />
            ))}
        </div>
        <div className="flex justify-between items-center mt-3">
          <p>Comparte</p>
          <div className="flex gap-3">
            {shareSocialNetworks.map((l, i) => (
              <a
                href={l.format + url}
                title={`Comparte en ${l.name}`}
                key={`share-${i}`}
                className="bg-gray-100 dark:bg-transparent px-2 py-1 rounded-full share-social-network"
                target="_blank"
                rel="noreferrer"
              >
                <l.icon color={l.color} />
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
