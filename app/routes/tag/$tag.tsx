import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { useLoaderData, useNavigate } from '@remix-run/react'
import { Pagination } from 'flowbite-react'
import { MainCard } from '~/components/card/main.card'
import type { getBlogListR } from '~/prismic/blog.list'
import { getBlogListByTag } from '~/prismic/blog.list'

interface BlogHomeData extends getBlogListR {
  page: number
  tagName: string
}

export const meta: MetaFunction = ({ data }) => {
  return {
    title: `${String(data.tagName).replace(
      /-/g,
      ' '
    )} | Blog de Fernando Ticona | Pagina ${data.page}`
  }
}

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const urlQuery = new URL(request.url)
    const page = urlQuery.searchParams.has('page')
      ? Number.isNaN(urlQuery.searchParams.get('page'))
        ? 1
        : Number(urlQuery.searchParams.get('page'))
      : 1
    return {
      page,
      tagName: String(params.tag),
      ...(await getBlogListByTag(String(params.tag), page))
    }
  } catch {
    return new Response('not found', {
      status: 404
    })
  }
}

export default function TagIndexPage(): JSX.Element {
  const { data, page, pageSize, tagName } = useLoaderData<BlogHomeData>()
  const navigate = useNavigate()
  return (
    <main className="py-6 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-0">
        {data.map((x, i) => (
          <MainCard key={`main-card-${i}`} data={x} />
        ))}
      </div>
      <div className="pt-6 text-center">
        <Pagination
          showIcons
          layout="navigation"
          currentPage={page}
          totalPages={pageSize}
          onPageChange={a => {
            navigate(`/tag/${tagName}?page=${a}`)
          }}
        />
      </div>
    </main>
  )
}
