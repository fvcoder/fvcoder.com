import { css } from '../../stitches.config'

export const container = css({
  maxWidth: '100%',
  '@bpMd': {
    maxWidth: 768
  },
  '@bpLg': {
    maxWidth: 1024
  }
})
