import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Thefersh.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav className="h-10 bg-win-200 shadow-md">
          <div className="container mx-auto w-full h-full flex justify-between items-center">
            <a className="text-sm font-semibold">Thefersh.com</a>
            <div className="grid gap-2 grid-flow-col">
              <a className="btn btn-outline--primary">Iniciar Sesion</a>
              <a className="btn btn--primary">Iniciar Sesion</a>
            </div>
          </div>
        </nav>
      </main>
    </div>
  )
}

export default Home
