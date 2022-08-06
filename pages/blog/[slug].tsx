import { GetServerSideProps, NextPage } from 'next'
import { ArticleDocument } from '../../types/article'
import Img from 'next/image'
import Link from 'next/link'
import { shareSocialNetworks } from '../../data/shareSocialNetwork.data'
import { LinkCard } from '../../components/link.card'
import { RenderArticle } from '../../components/article'
import { getArticle } from '../../prismic/article'
import { Badge } from '../../styles/badge.style'
import Head from 'next/head'

interface BlogArticleLoader extends ArticleDocument {
  url: string
}

const ViewBlogPage: NextPage<BlogArticleLoader> = ({
  title,
  image,
  imageAlt,
  lastPublicationDate,
  data,
  tags,
  url
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={data.description[0].text} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={data.description[0].text} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:type" content="article" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={data.description[0].text} />
        <meta name="og:image" content={image} />
      </Head>
      <header className="w-full h-96 relative">
        <Img
          className="w-full h-full object-cover"
          src={image}
          alt={imageAlt}
          layout="fill"
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
              href={`/tag/${x}`}
              key={`article-tag-${i}`}
              className="inline-block mr-2"
              passHref
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
                <l.icon color={l.color} />
              </a>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<
  BlogArticleLoader
> = async ({ req, params }) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_URL_BASE}${req.url}`)
  const data = await getArticle({
    slug: params?.slug as string,
    url
  })
  return {
    props: {
      ...data,
      url: url.toString()
    }
  }
}

export default ViewBlogPage
