import { styled } from '../stitches.config'
import { Container } from '../styles/container.style'
import { socialFooterLinks } from '../data/social.data'

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
          {socialFooterLinks.map((x, i) => (
            <a
              href={x.href}
              target="_blank"
              rel="noreferrer"
              key={`footer-link-${i}`}
            >
              <x.icon />
            </a>
          ))}
        </FooterSocial>
      </FooterInfo>
    </FooterBox>
  )
}
