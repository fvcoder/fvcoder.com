import 'tailwindcss/tailwind.css'
import './../styles/index.scss'
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './../src/theme'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-V67XHX9Q5V' })
  }, [])
  return (
    <Provider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
