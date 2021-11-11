import React from 'react'
import Img from 'next/image'
import Link from 'next/link'
import { Tooltip, Typography } from '@mui/material'
import JSImg from './../../../assets/image/js.png'
import ReactImg from './../../../assets/image/react.png'
import AngularImg from './../../../assets/image/angular.png'
import socialData from './../../../data/social.data'
import PropTypes, { InferProps } from 'prop-types'

export function Content({
  article,
  children
}: InferProps<typeof Content.propTypes>): JSX.Element {
  const skills = [
    { img: ReactImg, name: 'React', path: '/skill/react' },
    { img: JSImg, name: 'Javascript', path: '/skill/javascript' },
    { img: AngularImg, name: 'Angular', path: '/skill/angular' }
  ]

  return (
    <section className="container mx-auto flex flex-col md:flex-row my-4 gap-4">
      <div className="w-full md:w-3/4">
        <Typography variant="subtitle1" className="mb-3 px-4 md:px-0">
          Articulos Recientes
        </Typography>
        <div>
          {article.map((x, i) => (
            <Link href={`/article/${x.uid}`} key={`article-link-${i}`}>
              <a className="flex gap-4 rounded-md items-center p-3 select-none hover:bg-gray-100">
                <img src={x.img} alt={'icon'} width={60} height={60} />
                <div className=" min-w-0">
                  <Typography variant="subtitle1">{x.title}</Typography>
                  <Typography
                    variant="body1"
                    className="text-gray-500 truncate"
                  >
                    {x.description}
                  </Typography>
                </div>
              </a>
            </Link>
          ))}
        </div>
        {children}
      </div>
      <aside className="w-full md:w-1/4 px-4 md:px-0">
        <div>
          <Typography variant="subtitle1" className="mb-3">
            Habilidades
          </Typography>
          <div className="flex gap-4">
            {skills.map((x, i) => (
              <Tooltip title={x.name} key={`skillbtn-${i}`}>
                <a>
                  <Img src={x.img} alt={x.name} width={30} height={30} />
                </a>
              </Tooltip>
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
      </aside>
    </section>
  )
}

Content.propTypes = {
  article: PropTypes.arrayOf(
    PropTypes.shape({
      uid: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  children: PropTypes.node
}
