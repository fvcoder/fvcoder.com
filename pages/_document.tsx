import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../src/theme'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/pace/1.2.4/themes/blue/pace-theme-minimal.min.css"
            integrity="sha512-4chYZ6A4vvq/i1Aihe1dEkNNLEjy0zuZqTL65CncfJoKxxMPDwrEpD9jB9kJY+Fa35sA8YbAowsdFGHNf5re+g=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/pace/1.2.4/pace.min.js"
            integrity="sha512-2cbsQGdowNDPcKuoBd2bCcsJky87Mv0LEtD/nunJUgk6MOYTgVMGihS/xCEghNf04DPhNiJ4DZw5BxDd1uyOdw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
