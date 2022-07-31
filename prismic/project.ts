import type { PrismicDocumentMeta } from '../types/blog'
import { dateFormat } from '../utils/format.date'
import * as prismic from '@prismicio/client'
import { getArticleI } from './article'
import { ArticleDocument } from '../types/article'

const endpoint = prismic.getEndpoint('thefershprojects')
const client = prismic.createClient(endpoint)

export interface getBlogListR {
  data: PrismicDocumentMeta[]
  pageSize: number
}

export async function getProjectList(page = 1) {
  const data = await client.getByType('project', {
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc'
    },
    pageSize: 12,
    page
  })
  return {
    data: data.results.map(x => {
      return {
        uid: x.uid as string,
        title: x.data.title[0].text as string,
        image: x.data.img.url as string,
        imageAlt: x.data.img.alt as string,
        description: x.data.desc[0].text as string,
        tags: x.tags,
        lastPublicationDate: dateFormat(x.last_publication_date)
      }
    }),
    pageSize: data.total_pages
  }
}

/** obtener un proyecto en especifico */
export async function getProject({
  slug,
  url
}: getArticleI): Promise<ArticleDocument> {
  const d = await client.getByUID('project', slug, {
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

  const lastPublicationDate = dateFormat(d.first_publication_date)
  //
  return {
    uid: d.uid as string,
    title: d.data.title[0].text as string,
    image: d.data.img.url as string,
    imageAlt: d.data.img.alt as string,
    lastPublicationDate,
    data: d.data,
    tags: d.tags
  }
}
