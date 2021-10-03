/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Link from 'next/link'
import AppsDroptodown from './droptodowns/app.droptodown'
import PropsTypes, { InferProps } from 'prop-types'

function NavbarPublic(
  props: InferProps<typeof NavbarPublic.propTypes>
): JSX.Element {
  const name = 'Thefersh.com'
  return (
    <nav className="min-h-10 px-2">
      <div className="container mx-auto w-full h-full flex justify-between items-center">
        <Link href="/">
          <a className="text-sm font-semibold">
            <span>{name} </span>
            {props.app ? (
              <small className="block md:inline">for {props.app}</small>
            ) : null}
          </a>
        </Link>
        <div className="grid gap-2 grid-flow-col">
          <AppsDroptodown />
          <div className="py-2">
            <Link href="/login">
              <a className="btn btn--primary btn-center">Iniciar Sesion</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

NavbarPublic.propTypes = {
  app: PropsTypes.string
}

export { NavbarPublic }
