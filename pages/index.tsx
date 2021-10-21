import React from 'react'
import { NextPage } from 'next'
import Img from 'next/image'
import Head from 'next/head'
import { Navbar, NavbarAuth } from '../components/navbar'
import JSImg from './../assets/image/js.png'
import ReactImg from './../assets/image/react.png'
import AngularImg from './../assets/image/angular.png'
import { useSession } from 'next-auth/client'
import Link from 'next/link'
import EyeIcon from '@heroicons/react/outline/EyeIcon'
import Client from '../util/prismic'
import { useGetStaticProps } from 'next-slicezone/hooks'

const HomeNoAuth = () => {
  const skills = [
    { img: ReactImg, name: 'React', path: '/skill/react' },
    { img: JSImg, name: 'Javascript', path: '/skill/javascript' },
    { img: AngularImg, name: 'Angular', path: '/skill/angular' }
  ]
  return (
    <>
      <Head>
        <title>Thefersh.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <header className="container mx-auto px-4 md:px-0">
          <div className="py-12 md:py-24 grid grid-rows-none	grid-cols-1 md:grid-cols-2 md:grid-rows-1">
            <div className="grid grid-flow-row grid-cols-1 gap-8">
              <h1
                className="text-7xl font-inter font-bold"
                style={{ lineHeight: '98px' }}
              >
                Hola, soy Fernando
              </h1>
              <p className="font-inter leading-8 text-lg font-normal">
                Soy un desarrollador web y creador de contenido
              </p>
              <div>
                <button className="btn-lg btn-primary  md:hidden inline-block">
                  Ver Recompensas
                </button>
              </div>
            </div>
            <div className="row-start-1 md:col-start-2 pb-4">
              <div className="w-full h-full flex flex-wrap gap-4 justify-center items-center">
                {skills.map((x, i) => (
                  <Link href={'/'} key={`skilsimg${i}`}>
                    <a className="w-12 h-12">
                      <Img src={x.img} alt={x.name} width={48} height={48} />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </header>
        <section className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/project">
              <a className="btn btn-primary inline-block col-start-2 text-center">
                Ver Proyectos
              </a>
            </Link>
          </div>
        </section>
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
