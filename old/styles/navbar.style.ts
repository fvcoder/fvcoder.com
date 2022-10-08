import { styled } from '../stitches.config'
import { container } from './util/container.css'

export const NavbarBox = styled('nav', {
  backgroundColor: '#fff'
})

export const NavbarContainer = styled('div', container, {
  height: 'auto',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$2',
  '@bpMd': {
    height: '$8',
    padding: '0 $2'
  }
})
