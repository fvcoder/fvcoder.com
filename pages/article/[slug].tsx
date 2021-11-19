import React from 'react'
import { NextPage } from 'next'
import Client from '../../util/prismic'
import { Document } from '@prismicio/client/types/documents'
import moment from 'moment'
import * as parse from 'prismic-reactjs'
import { Navbar } from '../../components/navbar'
import Head from 'next/head'
import { Footer } from '../../components/footer'
import { Tooltip } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'

const PBlog: NextPage<{ post: Document; seoUrl: string }> = ({
  post,
  seoUrl
}) => {
  const social = [
    {
      icon: FacebookIcon,
      name: 'Facebook',
      color: '#1877F2',
      format: 'https://www.facebook.com/sharer/sharer.php?u='
    },
    {
      icon: TwitterIcon,
      name: 'Twitter',
      color: '#1DA1F2',
      format: 'http://www.twitter.com/share?url='
    },
    {
      icon: WhatsAppIcon,
      name: 'Whatsapp',
      color: '#25D366',
      format: 'https://api.whatsapp.com/send?text='
    },
    {
      icon: TelegramIcon,
      name: 'Telegram',
      color: '#26A5E4',
      format: 'https://t.me/share/url?url='
    }
  ]

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
            <div className="flex justify-between items-center mt-3">
              <p>Comparte</p>
              <div className="flex gap-4">
                {social.map((l, i) => (
                  <Tooltip title={`Comparte en ${l.name}`} key={`share-${i}`}>
                    <a
                      href={l.format + seoUrl}
                      className="bg-gray-100 px-2 py-1 rounded-full"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <l.icon sx={{ color: l.color }} />
                    </a>
                  </Tooltip>
                ))}
              </div>
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
      seoUrl: process.env.NEXT_PUBLIC_URL + '/article/' + slug || ''
    }
  } catch (e) {
    return {
      post: null,
      seoUrl: ''
    }
  }
}

export default PBlog
