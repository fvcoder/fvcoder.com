import { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../prismic/prismic'

const blogPreview = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_URL_BASE}${req.url}`)

  const redirectURL = await client.resolvePreviewURL({
    defaultURL: '/',
    documentID: String(url.searchParams.get('documentId')),
    previewToken: String(url.searchParams.get('token')),
    linkResolver: d => {
      if (d.type === 'blog') {
        return `/blog/${d.uid}?preview=true&document=${d.id}&lang=${
          d.lang
        }&token=${String(url.searchParams.get('token'))}`
      }
      return '/'
    }
  })
  res.redirect(redirectURL)
}

export default blogPreview
