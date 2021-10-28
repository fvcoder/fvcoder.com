import React from 'react'
import Img from 'next/image'
import YTCodeImg from './../../../assets/image/ytcode.png'
import YoutubeImg from './../../../assets/image/brand/youtube.svg'
import InstagramImg from './../../../assets/image/brand/instagram.svg'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Typography } from '@mui/material'

export function ContentSection(): JSX.Element {
  const content = [
    {
      img: YTCodeImg,
      brand: YoutubeImg,
      title: 'thefersh on code',
      redirect: 'https://www.youtube.com/channel/UC_nMwrzCN1f0OkqTQ2l3z7Q',
      description:
        'Es un espacio donde busco poner mi experiencia para que los desarrolladores puedan puedan aprender de los videos y a la vez aprender de sus observaciones.'
    },
    {
      img: YTCodeImg,
      brand: InstagramImg,
      title: 'thefersh24',
      redirect: 'https://www.instagram.com/thefersh24/',
      description:
        'Imagenes utiles de conceptos de programacion que ayudan a la memoria y algunas historias de mi vida'
    }
  ]
  return (
    <section className="mx-auto container py-6 px-4 md:px-0">
      <Typography variant="h3" className="mb-6">
        Descubre mi Contenido
      </Typography>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 grid-rows-2 md:grid-rows-1">
        {content.map((x, i) => (
          <div key={`content${i}`}>
            <div className="relative inline-block select-none mb-6">
              <div>
                <Img
                  src={x.img}
                  alt="img"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="absolute -bottom-2 -right-1">
                <Img src={x.brand} width={20} />
              </div>
            </div>
            <Typography className="mb-6 text-gr-900" variant="h4">
              {x.title}
            </Typography>
            <Typography className="mb-6" variant="body2">
              {x.description}
            </Typography>
            <a href={x.redirect} target="_blank" rel="noreferrer">
              <Typography
                className="mb-6 flex items-center"
                variant="body2"
                color="primary"
              >
                <span className="mr-1">Ver mas</span>
                <OpenInNewIcon color="primary" />
              </Typography>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
