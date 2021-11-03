/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true
  },
  redirects: () => {
    return [
      {
        source: '/article',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
