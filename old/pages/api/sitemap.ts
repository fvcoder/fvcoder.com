import { toXML } from 'jstoxml'
import { NextApiRequest, NextApiResponse } from 'next'
import { sitemapLoader } from '../../prismic/blog.sitemap'

const feedRrs = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = toXML(await sitemapLoader(), {
    header: '<?xml version="1.0" encoding="UTF-8"?>'
  })
  res.setHeader('Content-Type', 'text/xml')
  res.send(data)
}

export default feedRrs
