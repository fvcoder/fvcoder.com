import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { client } from '~/prismic/prismic'

export const loader: LoaderFunction = async a => {
  const url = new URL(a.request.url)

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
  return redirect(redirectURL)
}
