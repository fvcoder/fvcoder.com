import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { NavbarPublic } from '../../components/navbar'
import NextUrl from 'next-absolute-url'

interface Metatags {
  title: string
  description: string
  url: string
  type?: string
  img?: string
}

const IndexLoproda: NextPage<Metatags> = ({
  title,
  description,
  url,
  img,
  type
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content={type || 'website'} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {img ? <meta property="og:image" content={img} /> : null}

        <meta
          property="twitter:card"
          content={img ? 'summary_large_image' : 'summary'}
        />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        {img ? <meta property="twitter:image" content={img} /> : null}
      </Head>
      <NavbarPublic app="Loproda" />
      <div className="container mx-auto py-10">
        <p className="text-center">En Construccion</p>
      </div>
    </>
  )
}

IndexLoproda.getInitialProps = ({ req }) => {
  const { origin } = NextUrl(req)
  return {
    title: 'Loproda - Optimización para escuelas',
    description:
      'Ayudamos a escuelas para que pueda gestionar el aprendizaje de sus alumnos',
    url: origin + '/loproda'
  }
}

export default IndexLoproda
