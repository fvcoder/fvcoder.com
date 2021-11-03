import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { Content } from '../components/pages/index/content.p'
import Client from '../util/prismic'
import Prismic from '@prismicio/client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home: NextPage<{ article: any[] }> = a => {
  const title = 'Fernando Ticona | thefersh.com'
  const description =
    'Desarrollador Frontend | React js | Angular | Sass | Node Js'
  const seoUrl = 'https://thefersh.com/'
  const artcles = a.article.map(x => ({
    uid: x.uid,
    title: x.data.title[0].text,
    img: x.data.image.url,
    description: x.data.description[0].text
  }))
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={seoUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Head>
      <main>
        <Navbar />
        <Content article={artcles} />
        <Footer />
      </main>
    </>
  )
}

Home.getInitialProps = async ctx => {
  try {
    const art = await Client(ctx.req).query(
      Prismic.predicates.at('document.type', 'blog')
    )
    return {
      article: art.results
    }
  } catch (e) {
    return {
      article: []
    }
  }
}

export default Home
