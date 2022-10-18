import type { ArticleDocument } from '../types/article'
import { dateFormat } from '../utils/format.date'
import { client } from './prismic'

export interface getArticleI {
  slug: string
  url?: URL
}

/** obtener un articulo en especifico */
export function getArticle({
  slug,
  url
}: getArticleI): Promise<ArticleDocument> {
  return new Promise(async (resolve, reject) => {
    try {
      const d = await client.getByUID('blog', slug, {
        pageSize: 1,
        ref: url?.searchParams.get('token') || undefined
      })
      const lastPublicationDate = dateFormat(d.first_publication_date)
      resolve({
        uid: d.uid as string,
        title: d.data.title[0].text as string,
        image: d.data.image.url as string,
        imageAlt: d.data.image.alt as string,
        lastPublicationDate,
        data: d.data,
        tags: d.tags
      })
    } catch {
      reject(new Error('Not Found'))
    }
  })
}
