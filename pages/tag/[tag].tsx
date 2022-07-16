import { GetServerSideProps, NextPage } from 'next'
import { Card } from '../../components/card'
import { Pagination } from '../../components/pagination'
import { getBlogListByTag, getBlogListR } from '../../prismic/blog.list'
import { Container } from '../../styles/container.style'
import { Main } from '../../styles/main.style'

interface BlogHomeData extends getBlogListR {
  page: number
  tagName: string
}

const TagExplorer: NextPage<BlogHomeData> = ({
  data,
  page,
  pageSize,
  tagName
}) => {
  return (
    <Container>
      <Main>
        {data.map((x, i) => (
          <Card key={`main-card-${i}`} index={i + 1} data={x} />
        ))}
      </Main>
      <div className="pt-6 text-center">
        <Pagination page={page} pageSize={pageSize} route={`/tag/${tagName}`} />
      </div>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<BlogHomeData> = async ({
  params,
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
      tagName: String(params?.tag),
      ...(await getBlogListByTag(String(params?.tag), page))
    }
  }
}

export default TagExplorer
