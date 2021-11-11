import React, { useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Navbar } from '../../components/navbar'
import { Footer } from '../../components/footer'
import { Content } from '../../components/pages/index/content.p'
import Client from '../../util/prismic'
import Prismic from '@prismicio/client'
import { Document } from '@prismicio/client/types/documents'
import { Stack, Pagination } from '@mui/material'

interface Blog {
  article: Document[]
  page: number
  totalPages: number
}

const HomePage: NextPage<Blog> = a => {
  const router = useRouter()
  const [page, setPage] = useState(a.page || 1)

  const pageChange = (n: unknown, v: number) => {
    setPage(v)
    if (v === 1) {
      router.push(`/`)
    } else {
      router.push(`/page/${v}`)
    }
  }

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
        <Content article={artcles}>
          <Stack spacing={2} sx={{ alignItems: 'center', margin: '1rem 0' }}>
            <Pagination
              count={a.totalPages}
              page={page}
              onChange={pageChange}
            />
          </Stack>
        </Content>
        <Footer />
      </main>
    </>
  )
}

HomePage.getInitialProps = async ctx => {
  try {
    const art = await Client(ctx.req).query(
      Prismic.predicates.at('document.type', 'blog'),
      {
        orderings: '[document.first_publication_date desc]',
        pageSize: 7,
        page: Number.isNaN(Number(ctx.query.number))
          ? 1
          : Number(ctx.query.number)
      }
    )
    return {
      article: art.results,
      page: art.page,
      totalPages: art.total_pages
    }
  } catch (e) {
    return {
      article: [],
      page: 0,
      totalPages: 0
    }
  }
}

export default HomePage
