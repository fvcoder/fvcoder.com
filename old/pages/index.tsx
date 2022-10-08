import Link from 'next/link'
import type { GetServerSideProps, NextPage } from 'next'
import { Container } from '../styles/container.style'
import { H1 } from '../styles/typography.style'
import { getBlogList, getBlogListR } from '../prismic/blog.list'
import { Card } from '../components/card'
import { styled } from '../stitches.config'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Main } from '../styles/main.style'
import Head from 'next/head'

const NextPageCard = styled('a', {
  background: '#fff',
  borderRadius: '$borderRatius',
  flexBasis: 'calc(50% - 1rem)',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  div: {
    padding: '$3',
    display: 'flex',
    alignItems: 'center',
    gap: '$1',
    color: '$gray12',
    textDecoration: 'none',
    fontSize: '$h3'
  }
})

const Home: NextPage<getBlogListR> = ({ data }) => {
  return (
    <Container css={{ padding: 'var(--space-2)' }}>
      <Head>
        <meta
          content="Creo interfaces en paginas web, para que los usuarios puedan tener una experiencia agradable e intuitiva."
          name="description"
        />
        <meta content="summary" name="twitter:card" />
        <meta content="@thefersh24" name="twitter:creator" />
        <meta content="@thefersh24" name="twitter:site" />
        <meta
          content="Fernando Ticona | Desarrollador web Frontend"
          name="twitter:title"
        />
        <meta
          content="Creo interfaces en paginas web, para que los usuarios puedan tener una experiencia agradable e intuitiva."
          name="twitter:description"
        />
        <meta content="website" property="og:type" />
        <meta
          content="Fernando Ticona | Desarrollador web Frontend"
          property="og:title"
        />
        <meta
          content="Creo interfaces en paginas web, para que los usuarios puedan tener una experiencia agradable e intuitiva."
          property="og:description"
        />
      </Head>
      <H1>Artículos Recientes</H1>
      <Main>
        {data.map((x, i) => (
          <Card data={x} index={i} key={`index-card-${i}`} />
        ))}
        <Link href="/blog?page=2" passHref>
          <NextPageCard aria-label="Ver Archivo">
            <div>
              Ver archivo
              <ArrowRightIcon />
            </div>
          </NextPageCard>
        </Link>
      </Main>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<
  getBlogListR
> = async () => {
  return {
    props: await getBlogList()
  }
}

export default Home
