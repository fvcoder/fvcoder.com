import { styled } from '../stitches.config'
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

interface PaginationProps {
  page: number
  pageSize: number
}

const PaginationMain = styled('div', {
  display: 'inline-flex',
  maxWidth: '100%',
  width: 'fit-content'
})

const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 12px',
  gap: '4px',
  border: '1px solid',
  fontSize: '14px',
  userSelect: 'none',
  variants: {
    color: {
      light: {
        backgroundColor: '#fff',
        borderColor: '#F3F4F6'
      }
    },
    rounded: {
      start: {
        borderRadius: '4px 0px 0px 4px'
      },
      end: {
        borderRadius: '0px 4px 4px 0px'
      },
      none: {}
    }
  }
})

export function Pagination({ page, pageSize }: PaginationProps): JSX.Element {
  console.log(pageSize)
  return (
    <PaginationMain>
      {page !== 1 && (
        <Link href={`/blog?page=${page - 1}`} passHref>
          <Button as="a" color="light" rounded="start">
            <CaretLeftIcon />
            Anterior
          </Button>
        </Link>
      )}
      <Button
        color="light"
        rounded={page === 1 ? 'start' : page === pageSize ? 'end' : 'none'}
        style={{ pointerEvents: 'none' }}
      >
        Pagina {page}
      </Button>
      {page !== pageSize && (
        <Link href={`/blog?page=${page + 1}`} passHref>
          <Button as="a" color="light" rounded="end">
            Siguiente
            <CaretRightIcon />
          </Button>
        </Link>
      )}
    </PaginationMain>
  )
}
