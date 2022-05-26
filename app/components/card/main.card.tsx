import { Link } from '@remix-run/react'
import { Card } from 'flowbite-react'
import type { PrismicDocumentMeta } from '~/types/blog'

interface MainCardProps {
  data: PrismicDocumentMeta
}

export function MainCard({ data }: MainCardProps): JSX.Element {
  return (
    <Link to={`/blog/${data.uid}`} className="h-full w-full">
      <Card
        imgAlt={data.imageAlt}
        imgSrc={data.image}
        className="h-full hover:text-blue-500 active:text-blue-500 hover:border-blue-500 transition-colors"
      >
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
          {data.title}
        </h5>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {data.description}
        </p>
      </Card>
    </Link>
  )
}
