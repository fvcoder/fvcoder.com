import 'tailwindcss/tailwind.css'
import './../styles/index.scss'
import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  )
}
