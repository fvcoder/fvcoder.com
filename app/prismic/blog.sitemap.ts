import day from 'dayjs'
import { client } from './prismic'

const urlBase = 'https://www.thefersh.com/'

export function SitemapDateHelper(d: string) {
  return day(d).format('YYYY-MM-DDTHH:mm:ssZ')
}

export async function sitemapBlog() {
  const data = await client.getByType('blog', {
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc'
    }
  })
  return data.results.map(x => {
    return {
      url: {
        loc: `${urlBase}blog/${x.uid}`,
        lastmod: SitemapDateHelper(x.last_publication_date)
      }
    }
  })
}

export async function sitemapProjects() {
  const data = await client.getByType('projects', {
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc'
    }
  })
  return data.results.map(x => {
    return {
      url: {
        loc: `${urlBase}project/${x.uid}`,
        lastmod: SitemapDateHelper(x.last_publication_date)
      }
    }
  })
}

export async function sitemapLoader() {
  const blogData = await sitemapBlog()
  // const projectsData = await sitemapProjects()
  return {
    _name: 'urlset',
    _attrs: {
      xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
    },
    _content: [
      ...blogData,
      {
        url: {
          loc: urlBase
        }
      },
      {
        url: {
          loc: `${urlBase}blog`
        }
      }
    ]
  }
}
