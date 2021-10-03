import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Img from 'next/image'
import GithubIcon from './../icons/github.svg'
import YoutubeIcon from './../icons/youtube.svg'
import TwitterIcon from './../icons/twitter.svg'
import NodeJsImg from './../img/nodejs.png'
import ReactImg from './../img/react.png'
import AngularImg from './../img/angular.png'
import { NavbarPublic } from '../components/navbar'

const Home: NextPage = () => {
  const staks = [
    { src: NodeJsImg, alt: 'Node Js' },
    { src: ReactImg, alt: 'React' },
    { src: AngularImg, alt: 'Angular' }
  ]
  return (
    <>
      <Head>
        <title>Thefersh.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavbarPublic />
        <div className="mx-auto container h-auto md:h-80 bg-win-200 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4 px-5 md:px-10 py-10">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl">Hola, soy Fernando</h1>
            <p>Soy un desarrollador web</p>
          </div>
          <div className="grid grid-cols-5 grid-flow-row content-center gap-4 select-none">
            {staks.map((x, i) => (
              <div
                className="flex items-center col-span-1"
                key={i}
                style={{ gridColumnStart: i + 2 }}
              >
                <Img src={x.src} alt={x.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-flow-col gap-2 container mx-auto h-16">
          <a
            href="https://www.youtube.com/channel/UC_nMwrzCN1f0OkqTQ2l3z7Q"
            target="_blank"
            className="flex items-center justify-center h-full"
            rel="noreferrer"
          >
            <Img src={YoutubeIcon} alt="Youtube" />
            <span className="ml-2 hidden md:inline">The fersh</span>
          </a>
          <a
            href="https://github.com/thefersh"
            target="_blank"
            className="flex items-center justify-center h-full"
            rel="noreferrer"
          >
            <Img src={GithubIcon} alt="Github" />
            <span className="ml-2 hidden md:inline">thefersh</span>
          </a>
          <a
            href="https://twitter.com/thefersh24"
            target="_blank"
            className="flex items-center justify-center h-full"
            rel="noreferrer"
          >
            <Img src={TwitterIcon} alt="Twitter" />
            <span className="ml-2 hidden md:inline">thefersh24</span>
          </a>
        </div>
      </main>
    </>
  )
}

export default Home
