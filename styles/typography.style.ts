import { css, styled } from '../stitches.config'

export const typographyBase = css({
  fontFamily: '$sans',
  lineHeight: '1.2'
})

export const H1 = styled('h1', typographyBase, {
  fontSize: '$h1'
})
export const H2 = styled('h2', typographyBase, {
  fontSize: '$h2'
})
export const H3 = styled('h3', typographyBase, {
  fontSize: '$h3'
})
export const H4 = styled('h4', typographyBase, {
  fontSize: '$h4'
})
