import { createStitches } from '@stitches/react'
import { gray } from '@radix-ui/colors'

export const { styled, getCssText, globalCss, css } = createStitches({
  theme: {
    colors: {
      ...gray
    },
    fonts: {
      sans: '"Open Sans", sans-serif',
      montserrat: 'Montserrat, system-ui'
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px'
    },
    sizes: {
      8: '65px'
    }
  },
  media: {
    bpMd: '(min-width: 768px)',
    bpLg: '(min-width: 1024px)'
  }
})
