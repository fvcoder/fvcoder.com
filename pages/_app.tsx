import 'tailwindcss/tailwind.css'
import './../styles/index.scss'
import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import Head from 'next/head'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <Provider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}
