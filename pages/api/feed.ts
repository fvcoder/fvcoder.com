import { NextApiRequest, NextApiResponse } from 'next'
import xml from 'xml'
import { buildFeed, getFeedBlog } from '../../prismic/blog.feed'

const feedRrs = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_URL_BASE}${req.url}`)
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
            lastBuildDate: new Date().toUTCString()
          },
          { language: 'es-BO' },
          ...buildFeed(await getFeedBlog())
        ]
      }
    ]
  }
  const data = '<?xml version="1.0" encoding="UTF-8"?>' + xml(feedObject)
  res.setHeader('Content-Type', 'text/xml')
  res.send(data)
}

export default feedRrs
