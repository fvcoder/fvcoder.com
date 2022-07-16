// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['images.prismic.io']
  },
  rewrites: () => {
    return [
      {
        source: '/feed.rrs',
        destination: '/api/feed'
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ]
  }
}

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public'
  }
})
