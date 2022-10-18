import type { ProjectDocument } from "~/types/project"
import type { getArticleI } from "./article"
import { dateFormat } from "~/utils/format.date"
import { client } from "./prismic"

export function getProject({
  slug,
  url
}: getArticleI): Promise<ProjectDocument> {
  return new Promise(async (resolve, reject) => {
    try {
      const d = await client.getByUID('project', slug, {
        pageSize: 1,
        ref: url?.searchParams.get('token') || undefined
      })

      const lastPublicationDate = dateFormat(d.first_publication_date)
      resolve({
        title: d.data.title[0].text as string,
        image: d.data.cover.url as string,
        imageAlt: d.data.cover.alt as string,
        lastPublicationDate,
        data: d.data,
        tags: d.tags
      })
    } catch {
      reject('Not found')
    }
  })
}
