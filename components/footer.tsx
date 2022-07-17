import { styled } from '../stitches.config'
import { Container } from '../styles/container.style'
import { Twitter, Github } from '@icons-pack/react-simple-icons'

const FooterBox = styled('footer', Container, {
  padding: '$3 $2'
})
const FooterInfo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '$gray11'
})
const FooterSocial = styled(FooterInfo, {
  justifyContent: 'flex-start',
  gap: '$1',
  userSelect: 'none',
  a: {
    color: '$gray11'
  }
})

export function Footer(): JSX.Element {
  return (
    <FooterBox>
      <FooterInfo>
        <small>thefersh.com &copy; 2022</small>
        <FooterSocial>
          <a
            href="https://twitter.com/thefersh24"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://github.com/thefersh/"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </FooterSocial>
      </FooterInfo>
    </FooterBox>
  )
}
