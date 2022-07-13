import Link from 'next/link'
import Img from 'next/image'
import { NavbarContainer } from '../styles/navbar.style'
import LogoImg from '../public/android-icon-48x48.png'
import { styled } from '../stitches.config'

const Logo = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  textDecoration: 'none',
  '> span': {
    fontFamily: '$sans',
    fontSize: '1rem',
    color: '$gray12'
  }
})

export function Navbar(): JSX.Element {
  return (
    <NavbarContainer>
      <Link href="/" passHref>
        <Logo>
          <Img
            src={LogoImg}
            alt="Fernando Ticona logo"
            width={35}
            height={35}
          />
          <span>Fernando Ticona</span>
        </Logo>
      </Link>
    </NavbarContainer>
  )
}
