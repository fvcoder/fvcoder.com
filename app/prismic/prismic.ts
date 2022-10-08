import * as prismic from '@prismicio/client'

const endpoint = prismic.getEndpoint('thefersh')
const client = prismic.createClient(endpoint, {
  accessToken: process.env.NEXT_PUBLIC_PRISMIC_TOKEN
})
client.enableAutoPreviews()

export { client }
