import { dateFormat } from '../utils/format.date'
import { client } from './prismic'

export interface getProjectListRes {
  data: {
    uid: string
    tags: string[]
    lastPublicationDate: string
    title: string
    logo: string
    logoAlt: string
    data: any
  }[]
  pageSize: number
}

export async function getProjectList(page = 1): Promise<getProjectListRes> {
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
        tags: x.tags,
        lastPublicationDate: dateFormat(x.last_publication_date),
        title: x.data.title[0].text as string,
        logo: x.data.logo.url as string,
        logoAlt: x.data.logo.alt as string,
        data: x.data as any
      }
    }),
    pageSize: data.total_pages
  }
}
