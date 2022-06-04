import type { LoaderFunction } from '@remix-run/node'
import { toXML } from 'jstoxml'
import { buildFeed, getFeedBlog } from '~/prismic/blog.feed'
import xml from 'xml'

export const loader: LoaderFunction = async () => {
  /**
  {
      channel: {
        title: 'ss',
        description: 'asd',
        generator: 'thefersh.com',
        language: 'es-BO'
      },
      ...(await getFeedBlog())
    },
    {
      header: '<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">'
    }
   */
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
            title: 'YOUR-WEBSITE-TITLE'
          },
          {
            link: 'YOUR-WEBSITE/'
          },
          { description: 'YOUR-WEBSITE-DESCRIPTION' },
          { language: 'en-US' },
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
