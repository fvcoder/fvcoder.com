import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { Badge } from 'flowbite-react'
import { RenderArticle } from '~/components/article'
import { LinkCard } from '~/components/card/link.card'
import { shareSocialNetworks } from '~/data/social.data'
import { getArticle } from '~/prismic/article'
import type { ArticleDocument } from '~/types/article'
import { MetatagBlog } from '~/utils/meta.blog'

interface BlogArticleLoader extends ArticleDocument {
  url: string
}

export const loader: LoaderFunction = async req => {
  try {
    const data = await getArticle(req.params.slug as string)
    return { ...data, url: req.request.url }
  } catch {
    throw new Response('Not Found', {
      status: 404
    })
  }
}

export const meta: MetaFunction = MetatagBlog()

export default function BlogArticlePage(): JSX.Element {
  const { title, image, imageAlt, lastPublicationDate, data, tags, url } =
    useLoaderData<BlogArticleLoader>()
  return (
    <>
      <header className="w-full h-auto md:h-96">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={imageAlt}
        />
      </header>
      <article className="prose dark:prose-invert py-6 mx-auto px-4 md:px-0">
        <h1>{title}</h1>
        <small>{lastPublicationDate}</small>
        <p>{data.description[0].text}</p>
        <RenderArticle render={data.body} />
        <div className="w-full">
          {tags.map((x, i) => (
            <Link
              to={`/tag/${x}`}
              key={`article-tag-${i}`}
              className="inline-block mr-2"
            >
              <Badge>{x}</Badge>
            </Link>
          ))}
        </div>
        <div>
          <h4>Recursos</h4>
          <div className="grid gap-4 grid-cols-1">
            {(data.resource as string).split(/\n/).map((x, i) => (
              <LinkCard href={x} key={`link-${i}`} />
            ))}
          </div>
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
                <l.icon />
              </a>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
