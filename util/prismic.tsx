import React from 'react'
import Prismic from '@prismicio/client'
import Link from 'next/link'
import { ApiOptions } from '@prismicio/client/types/Api'

// Constantes
const apiEndpoint = `https://thefersh.cdn.prismic.io/api/v2`
const accessToken = process.env.PRISMIC_TOKEN || ''
/*
const linkResolver = (doc) => {
  if (doc.type === 'post') {
    return `/blog/${doc.uid}`
  }
  return '/'
}
const hrefResolver = (doc) => {
  if (doc.type === 'post') {
    return '/blog/[uid]'
  }
  return '/'
}


export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
)
*/

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
