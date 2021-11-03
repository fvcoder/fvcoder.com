import React from 'react'
import Img from 'next/image'
import Link from 'next/link'
import { Tooltip, Typography } from '@mui/material'
import JSImg from './../../../assets/image/js.png'
import ReactImg from './../../../assets/image/react.png'
import AngularImg from './../../../assets/image/angular.png'
import socialData from './../../../data/social.data'

export function Header(): JSX.Element {
  const skills = [
    { img: ReactImg, name: 'React', path: '/skill/react' },
    { img: JSImg, name: 'Javascript', path: '/skill/javascript' },
    { img: AngularImg, name: 'Angular', path: '/skill/angular' }
  ]

  return (
    <div className="container mx-auto flex my-4">
      <div className="w-3/4">articulos</div>
      <div className="w-1/4">
        <div>
          <Typography variant="subtitle1" className="mb-3">
            Habilidades
          </Typography>
          <div className="flex gap-4">
            {skills.map((x, i) => (
              <Link href={x.path} key={`skillbtn-${i}`}>
                <Tooltip title={x.name}>
                  <a>
                    <Img src={x.img} alt={x.name} width={30} height={30} />
                  </a>
                </Tooltip>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-3">
          <Typography variant="subtitle1" className="mb-3">
            Redes Sociales
          </Typography>
          <div className="flex gap-4">
            {socialData.map((x, i) => (
              <Tooltip title={x.name} key={`social-link-${i}`}>
                <a href={x.redirect} target="_blank" rel="noreferrer">
                  <Img src={x.icon} alt={x.title} width={30} height={30} />
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
