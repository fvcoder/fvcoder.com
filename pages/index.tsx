import React from 'react'
import { NextPage } from 'next'
import Img from 'next/image'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import JSImg from './../assets/image/js.png'
const Home: NextPage = () => {
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
                <div className="w-12 h-12">
                  <Img src={JSImg} alt="Javascript" width={48} height={48} />
                </div>
              </div>
            </div>
          </div>
        </header>
      </main>
    </>
  )
}

export default Home
