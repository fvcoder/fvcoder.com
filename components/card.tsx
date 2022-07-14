import { styled } from '../stitches.config'
import { PrismicDocumentMeta } from '../types/blog'
import Image from 'next/image'
import { H2 } from '../styles/typography.style'
import { animationAll } from '../styles/util/animation.css'
import Link from 'next/link'

const Img = styled(Image, animationAll, {
  borderRadius: '$borderRatius',
  variants: {
    type: {
      hero: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        '@bpMd': {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        }
      },
      base: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    }
  }
})

const CardBox = styled('a', {
  display: 'flex',
  gap: '1rem',
  width: '100%',

  backgroundColor: '#fff',
  borderRadius: '$borderRatius',
  color: '$gray12',
  textDecoration: 'none',

  '&:hover img': {
    transform: 'scale(1.1)',
    filter: 'brightness(0.8)'
  },

  variants: {
    orientation: {
      vertical: {
        flexDirection: 'column'
      },
      horizontal: {
        '@bpMd': {
          flexDirection: 'row'
        }
      }
    },
    type: {
      hero: {
        width: '100%',
        gap: '0',
        flexDirection: 'column',
        '@bpMd': {
          flexBasis: '100%',
          alignItems: 'center',
          paddingRight: '$3',
          flexDirection: 'row'
        }
      },
      base: {
        width: '100%',
        gap: '0',
        '@bpMd': {
          flexBasis: 'calc(50% - 1rem)'
        }
      }
    }
  }
})

const CardImg = styled('div', {
  position: 'relative',
  aspectRatio: '16/9',
  variants: {
    type: {
      hero: {
        flexBasis: '60%'
      },
      base: {
        flexBasis: '100%'
      }
    }
  }
})

const CardTitle = styled('div', {
  padding: '$3'
})

export function Card({
  data,
  index
}: {
  data: PrismicDocumentMeta
  index: number
}): JSX.Element {
  return (
    <Link href={`/blog/${data.uid}`} passHref>
      <CardBox
        aria-label={data.title}
        orientation={index === 0 ? 'horizontal' : 'vertical'}
        type={index === 0 ? 'hero' : 'base'}
      >
        <CardImg type={index === 0 ? 'hero' : 'base'}>
          <Img
            src={data.image}
            alt={data.imageAlt}
            layout="fill"
            type={index === 0 ? 'hero' : 'base'}
          />
        </CardImg>
        <CardTitle>
          <H2>{data.title}</H2>
          <small>{data.lastPublicationDate}</small>
        </CardTitle>
      </CardBox>
    </Link>
  )
}
