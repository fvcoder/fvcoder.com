import type { ArticleDocument } from '~/types/article'
import { dateFormat } from '~/utils/format.date'
import { client } from './prismic'

export interface getArticleI {
  slug: string
  url?: URL
}

/** obtener un articulo en especifico */
export async function getArticle({
  slug,
  url
}: getArticleI): Promise<ArticleDocument> {
  const d = await client.getByUID('blog', slug, {
    pageSize: 1,
    ref: url?.searchParams.get('token') || undefined
  })

  if (!d) {
    return {
      uid: '',
      title: '',
      image: '',
      imageAlt: '',
      lastPublicationDate: '',
      data: '',
      tags: []
    }
  }

  const lastPublicationDate =
    new Date(d.last_publication_date) !== new Date(d.first_publication_date)
      ? `Actualizado ${dateFormat(d.last_publication_date)}`
      : dateFormat(d.first_publication_date)
  //
  return {
    uid: d.uid as string,
    title: d.data.title[0].text as string,
    image: d.data.image.url as string,
    imageAlt: d.data.image.alt as string,
    lastPublicationDate,
    data: d.data,
    tags: d.tags
  }
}
