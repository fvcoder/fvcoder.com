import type { LoaderFunction } from '@remix-run/node'
import { toXML } from 'jstoxml'
import { buildFeed, getFeedBlog } from '~/prismic/blog.feed'
import xml from 'xml'

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  console.log(url)
  const feedObject = {
    rss: [
      {
        _attr: {
          version: '2.0',
          'xmlns:atom': 'http://www.w3.org/2005/Atom'
        }
      },
      {
        channel: [
          {
            'atom:link': {
              _attr: {
                href: 'https://thefersh.com/feed.rss',
                rel: 'self',
                type: 'application/rss+xml'
              }
            }
          },
          {
            link: url.origin
          },
          {
            title: 'Fernando Ticona | Desarrollador web Frontend'
          },
          {
            description:
              'Creo interfaces en paginas web, para que los usuarios puedan tener una experiencia agradable e intuitiva.'
          },
          {
            generator: 'thefersh -- thefersh.com'
          },
          {
            lastBuildDate: new Date().toString()
          },
          { language: 'es-BO' },
          ...buildFeed(await getFeedBlog())
        ]
      }
    ]
  }
  const data = '<?xml version="1.0" encoding="UTF-8"?>' + xml(feedObject)
  return new Response(data, {
    headers: {
      'Content-Type': 'text/xml'
    }
  })
}
