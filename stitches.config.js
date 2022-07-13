import { createStitches } from '@stitches/react'
import { gray } from '@radix-ui/colors'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      ...gray
    },
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
