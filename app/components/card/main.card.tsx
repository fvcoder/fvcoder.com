import { Link } from '@remix-run/react'
import type { PrismicDocumentMeta } from '~/types/blog'
import { Img } from '../img'

interface MainCardProps {
  data: PrismicDocumentMeta
}

export function MainCard({ data }: MainCardProps): JSX.Element {
  return (
    <Link to={`/blog/${data.uid}`} className="h-full w-full">
      <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col h-full hover:text-blue-500 active:text-blue-500 hover:border-blue-500 transition-colors">
        <Img className="rounded-t-lg" src={data.image} alt={data.imageAlt} />
        <div className="flex h-full flex-col justify-start gap-4 p-6">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
            {data.title}
          </h5>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            {data.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
