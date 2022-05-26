import type { MetaFunction } from '@remix-run/node'

export function MetatagBlog(): MetaFunction {
  return d => {
    const title = d.data.title || ''
    const description = d.data.data.description[0].text || ''
    const image = d.data.image || ''
    return {
      title,
      description,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
      'twitter:card': 'summary_large_image',
      'og:type': 'article',

      'og:title': title,
      'og:description': description,
      'og:image': image
    }
  }
}
