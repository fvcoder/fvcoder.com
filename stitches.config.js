import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      sans: '"Open Sans", sans-serif',
      montserrat: 'Montserrat, system-ui'
    },
    space: {
      5: '25px'
    },
    sizes: {
      8: '65px'
    }
  }
})
