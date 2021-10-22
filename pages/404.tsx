import React from 'react'
import Img from 'next/image'
import SolarImg from './../assets/image/solar.svg'
import Link from 'next/link'

export default function page404() {
  return (
    <div className="relative w-screen h-screen">
      <Img
        src={SolarImg}
        alt={'space'}
        className="w-full h-full"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center font-inter gap-4 text-center">
        <h1 className="text-5xl">404</h1>
        <p className="text-lg">La pagina que buscas, no se encontro</p>
        <Link href="/">
          <a className="btn btn-primary">Ir a inicio</a>
        </Link>
      </div>
    </div>
  )
}
