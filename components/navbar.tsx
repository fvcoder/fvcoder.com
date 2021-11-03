import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/client'
import Button from '@mui/material/Button'
import { Avatar, Menu, MenuItem } from '@mui/material'

function ProfileBtn() {
  const [session, loading] = useSession()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    return (
      <button className="btn btn-primary inline-block" onClick={() => signIn()}>
        Iniciar Sesion
      </button>
    )
  }

  const options = [
    { name: 'Mi Perfil', path: '/me' },
    {
      name: 'Ajustes',
      path: '/me/settings'
    }
  ]

  return (
    <div>
      <button
        className="p-1 select-none"
        type="button"
        aria-controls="navbar-auth-user"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar
          alt={session.user.name}
          src={session.user.image}
          className="h-full"
          sx={{ height: '2.25rem', width: '2.25rem' }}
        />
      </button>
      <Menu
        id="navbar-auth-user"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        {options.map((x, i) => (
          <MenuItem key={`dp-user-${i}`}>
            <Link href={x.path}>
              <a>{x.name}</a>
            </Link>
          </MenuItem>
        ))}
        <MenuItem onClick={() => signOut()}>Salir</MenuItem>
      </Menu>
    </div>
  )
}

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

export function NavbarAuth() {
  return (
    <nav className="navbar">
      <div className="navbar-section">
        <Link href="/">
          <a
            role="img"
            aria-label="Thefersh.com logo"
            className="font-inter text-sm font-bold inline-block select-none"
          >
            Thefersh.com
          </a>
        </Link>
      </div>
      <div className="navbar-section">
        <ProfileBtn />
      </div>
    </nav>
  )
}
