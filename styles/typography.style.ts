import { css, styled } from '../stitches.config'

export const typographyBase = css({
  fontFamily: '$sans'
})

export const H1 = styled('h1', typographyBase, {
  fontSize: '$h1',
  lineHeight: '2rem'
})
export const H2 = styled('h2', typographyBase, {
  fontSize: '$h2',
  lineHeight: '1.75rem'
})
export const H3 = styled('h3', typographyBase, {
  fontSize: '$h3',
  lineHeight: '1.75rem'
})
export const H4 = styled('h4', typographyBase, {
  fontSize: '$h4',
  lineHeight: '1.5rem'
})
