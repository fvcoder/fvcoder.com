import React from 'react'
import Img from 'next/image'
import { Tooltip, Typography } from '@mui/material'
import JSImg from './../../../assets/image/js.png'
import ReactImg from './../../../assets/image/react.png'
import AngularImg from './../../../assets/image/angular.png'

export function Header(): JSX.Element {
  const skills = [
    { img: ReactImg, name: 'React', path: '/skill/react' },
    { img: JSImg, name: 'Javascript', path: '/skill/javascript' },
    { img: AngularImg, name: 'Angular', path: '/skill/angular' }
  ]
  return (
    <header className="container mx-auto px-4 md:px-0">
      <div className="py-12 md:py-24 grid grid-rows-none grid-cols-1 md:grid-cols-2 md:grid-rows-1">
        <div className="grid grid-flow-row grid-cols-1 gap-8 text-center md:text-left">
          <Typography variant="h2">Hola, soy Fernando</Typography>
          <Typography variant="body1">
            Soy un desarrollador web y creador de contenido
          </Typography>
        </div>
        <div className="row-start-1 md:col-start-2 pb-4">
          <div className="w-full h-full flex flex-wrap gap-4 justify-center items-center">
            {skills.map((x, i) => (
              <Tooltip key={`skilsimg${i}`} title={x.name}>
                <a className="w-12 h-12 select-none">
                  <Img src={x.img} alt={x.name} width={48} height={48} />
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
