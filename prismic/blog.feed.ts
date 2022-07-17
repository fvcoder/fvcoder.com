import { client } from './prismic'

const urlBase = 'https://www.thefersh.com/blog'

export async function getFeedBlog() {
  const data = await client.getByType('blog', {
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc'
    }
  })
  return data.results.map(x => ({
    title: String(x.data.title[0].text),
    date: String(x.last_publication_date),
    slug: String(x.uid),
    description: String(x.data.description[0].text)
  }))
}

export function buildFeed(
  posts: { title: string; date: string; slug: string; description: string }[]
) {
  const sortedPosts = posts.sort(function (first, second) {
    return new Date(second.date).getTime() - new Date(first.date).getTime()
  })

  const feedItems = []

  feedItems.push(
    ...sortedPosts.map(function (post) {
      const feedItem = {
        item: [
          { title: post.title },
          { link: `${urlBase}/${post.slug}/` },
          {
            pubDate: new Date(post.date as string).toUTCString()
          },
          {
            guid: `${urlBase}/${post.slug}/`
          },
          {
            description: post.description
          }
        ]
      }
      return feedItem
    })
  )

  return feedItems
}
