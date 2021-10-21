import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Client from '../../util/prismic'
import Prismic from '@prismicio/client'
import { Document } from '@prismicio/client/types/documents'
import Link from 'next/link'
import { Navbar } from '../../components/navbar'
import Head from 'next/head'

const Project: NextPage<{ post: Document[] }> = ({ post }) => {
  const title = 'Proyectos de Fernando Ticona | thefersh.com'
  const description =
    'Fernando Ticona: Estos son mis proyectos como desarrollador web'
  const seoUrl = 'https://thefersh.com/project'
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
      <Navbar />
      <main>
        <section
          role="feed"
          className="container mx-auto grid grid-cols-1 md:grid-cols-3 px-2 md:px-0 my-2"
        >
          {post.map((x, i) => (
            <Link href={`/project/${x.uid}`} key={`projectCard${i}`}>
              <a className="relative aspect-w-16 aspect-h-9 shadow-sm">
                <img
                  src={x.data.image_cover.url}
                  alt={x.data.image_cover.alt}
                  className="rounded-md"
                />
                <div className="absolute inset-0 p-2 rounded-md text-white flex flex-col justify-end hover:bg-black hover:bg-opacity-20 transition">
                  <h2 className="font-inter text-base">
                    {x.data.title[0].text}
                  </h2>
                  <p className="font-inter text-sm font-light">
                    {x.data.description[0].text}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await Client().query(
      Prismic.predicates.at('document.type', 'projects')
    )
    return {
      props: {
        post: res.results
      }
    }
  } catch (e) {
    console.error(e)
    return {
      props: {
        post: []
      }
    }
  }
}

export default Project
