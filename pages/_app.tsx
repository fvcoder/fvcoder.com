import 'normalize.css'
import './../styles/resource/montserrat.font.css'
import './../styles/resource/openSans.font.css'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global.styles'
import ProgressBar from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
