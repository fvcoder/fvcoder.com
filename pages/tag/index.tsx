import { GetServerSideProps } from 'next'
import Link from 'next/link'

export default function Redirect(): JSX.Element {
  return (
    <Link href="/">
      <a>Ir a inicio</a>
    </Link>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/'
    },
    props: {}
  }
}
