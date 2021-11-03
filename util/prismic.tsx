import Prismic from '@prismicio/client'
import { ApiOptions } from '@prismicio/client/types/Api'

// Constantes
const apiEndpoint = `https://thefersh.cdn.prismic.io/api/v2`
const accessToken = process.env.NEXT_PUBLIC_PRISMIC_TOKEN || ''

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))

function createClientOptions(
  req = null,
  prismicAccessToken = null
): ApiOptions {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {}
  return {
    ...reqOption,
    ...accessTokenOption
  }
}

export default Client
