import type { PrismicDocumentMeta } from '~/types/blog'
import { dateFormat } from '~/utils/format.date'
import { client } from './prismic'

export interface getBlogListR {
  data: PrismicDocumentMeta[]
  pageSize: number
}

export async function getBlogList(page = 1) {
  const data = await client.getByType('blog', {
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
        image: x.data.image.url as string,
        imageAlt: x.data.image.alt as string,
        description: x.data.description[0].text as string,
        tags: x.tags,
        lastPublicationDate: dateFormat(x.last_publication_date)
      }
    }),
    pageSize: data.total_pages
  }
}

export async function getBlogListByTag(tag: string, page = 1) {
  const items = await client.getByTag(tag, {
    orderings: {
      direction: 'desc',
      field: 'document.last_publication_date'
    },
    page,
    pageSize: 12
  })

  return {
    data: items.results.map(x => {
      return {
        uid: x.uid as string,
        title: x.data.title[0].text as string,
        image: x.data.image.url as string,
        imageAlt: x.data.image.alt as string,
        description: x.data.description[0].text as string,
        tags: x.tags,
        lastPublicationDate: dateFormat(x.last_publication_date)
      }
    }),
    pageSize: items.total_pages
  }
}
