import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData, useNavigate } from '@remix-run/react'
import { Pagination } from 'flowbite-react'
import { MainCard } from '~/components/card/main.card'
import type { getBlogListR } from '~/prismic/blog.list'
import { getBlogList } from '~/prismic/blog.list'

interface BlogHomeData extends getBlogListR {
  page: number
}

export const loader: LoaderFunction = async ctx => {
  try {
    const urlQuery = new URL(ctx.request.url)
    const page = urlQuery.searchParams.has('page')
      ? Number.isNaN(urlQuery.searchParams.get('page'))
        ? 1
        : Number(urlQuery.searchParams.get('page'))
      : 1
    return {
      page,
      ...(await getBlogList(page))
    }
  } catch {
    throw new Response('Not Found', {
      status: 404
    })
  }
}
export default function BlogIndexPage(): JSX.Element {
  const { data, page, pageSize } = useLoaderData<BlogHomeData>()
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
            navigate(`/blog?page=${a}`)
          }}
        />
      </div>
    </main>
  )
}
