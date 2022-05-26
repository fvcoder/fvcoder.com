import type { LoaderFunction } from '@remix-run/node'
import { toXML } from 'jstoxml'
import { sitemapLoader } from '~/prismic/blog.sitemap'

export const loader: LoaderFunction = async () => {
  const data = toXML(await sitemapLoader(), {
    header: '<?xml version="1.0" encoding="UTF-8"?>'
  })

  return new Response(data, {
    headers: {
      'Content-Type': 'text/xml'
    }
  })
}
