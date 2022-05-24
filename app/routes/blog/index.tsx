import { Pagination } from 'flowbite-react'
import { MainCard } from '~/components/card/main.card'

export default function BlogIndexPage(): JSX.Element {
  return (
    <main className="py-6 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <MainCard key={`main-card-${i}`} />
        ))}
      </div>
      <div className="pt-6 text-center">
        <Pagination
          currentPage={1}
          totalPages={100}
          onPageChange={a => console.log(a)}
        />
      </div>
    </main>
  )
}
