import 'normalize.css'
import './../styles/resource/montserrat.font.css'
import './../styles/resource/openSans.font.css'
import './../styles/resource/tailwind.css'
import 'highlight.js/styles/base16/google-dark.css'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global.styles'
import { Layout } from '../components/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <Layout>
      <Head>
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <title>Fernando Ticona | Desarrollador web Frontend</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
