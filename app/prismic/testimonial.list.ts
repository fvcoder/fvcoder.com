import { client } from './prismic'

export interface getTestimonialListRes {
  data: {
    name: string
    profile: string
    profileAlt: string
    testimonial: string
    relationship: string
  }[]
  pageSize: number
}

export async function getTestimonialList(page = 1): Promise<getTestimonialListRes> {
  const data = await client.getByType('testimonial', {
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
        name: x.data.name[0].text,
        profile: x.data.profile.url,
        profileAlt: x.data.profile.alt,
        testimonial: x.data.testimonial[0].text,
        relationship: x.data.relationship[0].text
      }
    }),
    pageSize: data.total_pages
  }
}
