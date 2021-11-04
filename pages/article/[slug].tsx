import React from 'react'
import { NextPage } from 'next'
import Client from '../../util/prismic'
import { Document } from '@prismicio/client/types/documents'
import moment from 'moment'
import * as parse from 'prismic-reactjs'
import { Navbar } from '../../components/navbar'
import Head from 'next/head'
import { Footer } from '../../components/footer'

const PBlog: NextPage<{ post: Document; seoUrl: string }> = ({
  post,
  seoUrl
}) => {
  return (
    <>
      <Head>
        <title>{post.data.title[0].text}</title>
        <meta name="title" content={post.data.title[0].text} />
        <meta name="description" content={post.data.description[0].text} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={seoUrl} />
        <meta property="og:title" content={post.data.title[0].text} />
        <meta
          property="og:description"
          content={post.data.description[0].text}
        />
        <meta property="og:image" content={post.data.image.url} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoUrl} />
        <meta property="twitter:title" content={post.data.title[0].text} />
        <meta
          property="twitter:description"
          content={post.data.description[0].text}
        />
        <meta property="twitter:image" content={post.data.image.url} />
      </Head>
      <Navbar />
      <article>
        <div className="container mx-auto">
          <img
            src={post.data.image.url}
            alt={post.data.image.alt}
            className="mx-auto"
          />
          <main className="prose mx-auto my-5 px-2 md:px-0">
            <h1>{post.data.title[0].text}</h1>
            <small>
              {moment(post.last_publication_date).format(
                'DD/MM/YYYY HH:mm (UTCZZ)'
              )}
            </small>
            <parse.RichText render={post.data.body} />
            {(post.data.resource as string).split(/\n/).map((x, i) => (
              <a
                href={x}
                target="_blank"
                className="block"
                key={`link-${i}`}
                rel="noreferrer"
              >
                {x}
              </a>
            ))}
            <div>
              {post.tags.map((x, i) => (
                <span
                  className="badge inline-block mr-2 select-none"
                  key={`posttag${i}`}
                >
                  {x}
                </span>
              ))}
            </div>
          </main>
        </div>
      </article>
      <Footer />
    </>
  )
}

PBlog.getInitialProps = async ctx => {
  try {
    const { slug } = ctx.query
    const res = await Client().getByUID('blog', slug as string, {})
    return {
      post: res || null,
      seoUrl: process.env.NEXTAUTH_URL + '/article/' + slug || ''
    }
  } catch (e) {
    return {
      post: null,
      seoUrl: ''
    }
  }
}

export default PBlog
