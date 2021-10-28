import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar, NavbarAuth } from '../components/navbar'
import { Footer } from '../components/footer'
import { useSession } from 'next-auth/client'
import EyeIcon from '@heroicons/react/outline/EyeIcon'
import { ContentSection } from '../components/pages/index/content.p'
import { Header } from '../components/pages/index/header.p'

const HomeNoAuth = () => {
  const title = 'Fernando Ticona | thefersh.com'
  const description =
    'Desarrollador Frontend | React js | Angular | Sass | Node Js'
  const seoUrl = 'https://thefersh.com/'
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={seoUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Head>
      <main>
        <Navbar />
        <Header />
        <ContentSection />
        <Footer />
      </main>
    </>
  )
}

const HomeAuth = () => {
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <NavbarAuth />
      <main className="container mx-auto grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="bg-white border border-gr-500 rounded-md mx-2 md:mx-0">
          <h2 className="py-2 px-3 font-inter text-2xl">Podcast</h2>
          <div>
            <button className="hover:bg-gray-100 active:bg-gray-200 py-2 px-3 cursor-pointer w-full flex items-center select-none">
              <div>
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  alt="podcast alt"
                  className="w-12 h-auto rounded-md"
                />
              </div>
              <div className="ml-3 flex-grow min-w-0 text-left">
                <h4 className="font-inter text-base truncate">
                  Hola este es el titulo de el nuevo podcast
                </h4>
                <div className="flex items-center">
                  <span className="badge mr-2">Nuevo</span>
                  <span className="text-xs font-inter flex items-center">
                    <span>123</span>
                    <EyeIcon width={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="bg-white border border-gr-500 rounded-md mx-2 md:mx-0">
          videos recientes
        </div>
        <div className="bg-white border border-gr-500 rounded-md mx-2 md:mx-0">
          estados de proyectos
        </div>
      </main>
    </>
  )
}

const Home: NextPage = () => {
  const [session] = useSession()
  return !session?.user ? <HomeNoAuth /> : <HomeAuth />
}

export default Home
