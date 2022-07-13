import { Link, useLoaderData } from '@remix-run/react'
import { Card } from 'flowbite-react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { MainCard } from '~/components/card/main.card'
import type { LoaderFunction } from '@remix-run/node'
import type { getBlogListR } from '~/prismic/blog.list'
import { getBlogList } from '~/prismic/blog.list'
import classNames from 'classnames'
import { Img } from '~/components/img'

export const loader: LoaderFunction = async () => {
  try {
    return await getBlogList()
  } catch {
    throw new Response('Not Found', {
      status: 404
    })
  }
}
/*
const d = (
  <header className="py-6">
    <div className="container mx-auto px-4 md:px-0">
      <Link
        to={'/blog/' + data[0].uid}
        className="flex items-center gap-4 bg-white pr-4 rounded-xl border border-gray-100 hover-image-card"
      >
        <div className="flex-1">
          <Img
            src={data[0].image}
            alt={data[0].imageAlt}
            className="rounded-l-xl"
          />
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl dark:text-gray-300">{data[0].title}</h1>
        </div>
      </Link>
    </div>
  </header>
)
*/

export default function Index() {
  const { data } = useLoaderData<getBlogListR>()
  return (
    <main className="bg-gray-100">
      <div className="container mx-auto">
        <div className="py-4 lg:py-14">
          <Link
            to={`/blog/${data[0].uid}`}
            className="h-full w-full block hover-image-card "
          >
            <div className="flex rounded-lg bg-white flex-col md:flex-row h-full">
              <div className="flex-1">
                <Img
                  className="md:rounded-l-lg rounded-t-lg"
                  src={data[0].image}
                  alt={data[0].imageAlt}
                />
              </div>
              <div className="flex h-full flex-col justify-start gap-2 p-6 w-full md:w-2/6">
                <h5 className="text-xl font-bold tracking-tight text-gray-900">
                  {data[0].title}
                </h5>
                <small className="text-sm text-gray-700">
                  {data[0].lastPublicationDate}
                </small>
              </div>
            </div>
          </Link>
        </div>
        <div
          className={classNames(
            'px-4 md:px-0 py-4 mx-auto gap-4',
            'w-full',
            'grid grid-cols-1 md:grid-cols-2'
          )}
        >
          {data.map((x, i) => {
            if (i < 1) return null
            return <MainCard data={x} key={`main-card-${i}`} />
          })}
          <Link to="/blog?page=2" className="w-full h-full">
            <Card className="h-full text-gray-900 dark:text-gray-200 hover:text-blue-500 active:text-blue-500 hover:border-blue-500 transition-colors">
              Mas articulos <ArrowRightIcon className="w-5" />
            </Card>
          </Link>
        </div>
      </div>
    </main>
  )
}
