import { Link, useLoaderData } from '@remix-run/react'
import { Card } from 'flowbite-react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { MainCard } from '~/components/card/main.card'
import { HeaderCard } from '~/components/card/header.card'
import type { LoaderFunction } from '@remix-run/node'
import type { getBlogListR } from '~/prismic/blog.list'
import { getBlogList } from '~/prismic/blog.list'

export const loader: LoaderFunction = async () => {
  try {
    return await getBlogList()
  } catch {
    throw new Response('Not Found', {
      status: 404
    })
  }
}

export default function Index() {
  const { data } = useLoaderData<getBlogListR>()
  return (
    <>
      <header className="bg-gray-100 dark:bg-gray-900 px-6 py-6 md:py-14">
        <div className="container mx-auto flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/4">
            <HeaderCard data={{ ...data[0] }} />
          </div>
          <div className="w-full md:w-2/4 grid gap-6 grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2">
            <HeaderCard data={{ ...data[1] }} />
            <HeaderCard data={{ ...data[2] }} />
            <HeaderCard data={{ ...data[3] }} />
            <HeaderCard data={{ ...data[4] }} />
          </div>
        </div>
      </header>
      <main className="container mx-auto py-6 px-4 md:px-0">
        <h1 className="py-6 text-2xl text-gray-900 dark:text-white">
          Articulos Recientes
        </h1>
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-4 gap-6">
          {data.map((x, i) => {
            if (i < 5) return null
            return <MainCard data={x} key={`main-card-${i}`} />
          })}
          <Link to="/blog?page=2" className="w-full h-full">
            <Card className="h-full text-gray-900 dark:text-gray-200 hover:text-blue-500 active:text-blue-500 hover:border-blue-500 transition-colors">
              Mas articulos <ArrowRightIcon className="w-5" />
            </Card>
          </Link>
        </div>
      </main>
    </>
  )
}
