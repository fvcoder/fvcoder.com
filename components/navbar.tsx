import Link from 'next/link'
import React from 'react'
import Button from '@mui/material/Button'

export function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <div className="navbar-section">
        <Link href="/">
          <a
            role="img"
            aria-label="Thefersh.com logo"
            className="font-roboto text-sm font-bold inline-block select-none"
          >
            Thefersh.com
          </a>
        </Link>
      </div>
      <div className="navbar-section">
        <Link href="/project">
          <Button color="inherit" component="a">
            Proyectos
          </Button>
        </Link>
      </div>
    </nav>
  )
}
