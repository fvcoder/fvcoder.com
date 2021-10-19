import Link from 'next/link'
import React from 'react'

export function Navbar(): JSX.Element {
  const links = [
    { name: 'Recompensas', path: '/' },
    { name: 'Proyectos', path: '/' }
  ]
  return (
    <nav className="py-5 border-b border-gr-500">
      <div className="container mx-auto flex justify-between px-4 md:px-0">
        <div>
          <Link href="/">
            <a
              role="img"
              aria-label="Thefersh.com logo"
              className="font-inter text-sm font-bold inline-block select-none"
            >
              Thefersh.com
            </a>
          </Link>
          <div className="hidden md:inline-grid ml-8 gap-8 grid-rows-1 grid-flow-col">
            {links.map((x, i) => (
              <Link href={x.path} key={`nvLinksBig${i}`}>
                <a className="text-sm font-inter leading-5 cursor-pointer font-medium select-none">
                  {x.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Link href="/">
            <a className="btn btn-primary">Iniciar Sesion</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
