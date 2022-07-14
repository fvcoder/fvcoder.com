import 'normalize.css'
import './../styles/resource/montserrat.font.css'
import './../styles/resource/openSans.font.css'
import './../styles/resource/tailwind.css'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global.styles'
import { Layout } from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
