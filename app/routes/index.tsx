import { Link } from '@remix-run/react'
import { Card } from 'flowbite-react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { MainCard } from '~/components/card/main.card'
import { HeaderCard } from '~/components/card/header.card'

export default function Index() {
  return (
    <>
      <header className="bg-gray-100 dark:bg-gray-900 px-6 py-6 md:py-14">
        <div className="container mx-auto flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/4">
            <HeaderCard />
          </div>
          <div className="w-full md:w-2/4 grid gap-6 grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2">
            <HeaderCard />
            <HeaderCard />
            <HeaderCard />
            <HeaderCard />
          </div>
        </div>
      </header>
      <main className="container mx-auto py-6">
        <h1 className="py-6 text-2xl text-gray-900 dark:text-white">
          Articulos Recientes
        </h1>
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-4 gap-6">
          {Array.from({ length: 12 - 5 }).map((_, i) => (
            <MainCard key={`main-card-${i}`} />
          ))}
          <Link to="/" className="w-full h-full">
            <Card className="h-full text-gray-900 dark:text-gray-200 hover:text-blue-500 active:text-blue-500 hover:border-blue-500 transition-colors">
              Mas articulos <ArrowRightIcon className="w-5" />
            </Card>
          </Link>
        </div>
      </main>
    </>
  )
}
