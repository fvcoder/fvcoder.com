import { GetServerSideProps, NextPage } from 'next'
import { Card } from '../../components/card'
import { Pagination } from '../../components/pagination'
import { getBlogListR } from '../../prismic/blog.list'
import { Container } from '../../styles/container.style'
import { Main } from '../../styles/main.style'
import Head from 'next/head'
import { getProjectList } from '../../prismic/project'

interface BlogHomeData extends getBlogListR {
  page: number
}

const Blog: NextPage<BlogHomeData> = ({ data, page, pageSize }) => {
  return (
    <Container>
      <Head>
        <title>{`Portfolio de Fernando Ticona | Pagina ${page}`}</title>
      </Head>
      <Main>
        {data.map((x, i) => (
          <Card
            key={`main-card-${i}`}
            index={i + 1}
            data={x}
            route="/project"
          />
        ))}
      </Main>
      <div className="pt-6 text-center">
        <Pagination page={page} pageSize={pageSize} route="/project" />
      </div>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<BlogHomeData> = async ({
  req
}) => {
  const urlQuery = new URL(`${process.env.NEXT_PUBLIC_URL_BASE}${req.url}`)
  const page = urlQuery.searchParams.has('page')
    ? Number.isNaN(urlQuery.searchParams.get('page'))
      ? 1
      : Number(urlQuery.searchParams.get('page'))
    : 1
  return {
    props: {
      page,
      ...(await getProjectList(page))
    }
  }
}

export default Blog
