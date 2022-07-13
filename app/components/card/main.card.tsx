import { Link } from '@remix-run/react'
import type { PrismicDocumentMeta } from '~/types/blog'
import { Img } from '../img'

interface MainCardProps {
  data: PrismicDocumentMeta
}

export function MainCard({ data }: MainCardProps): JSX.Element {
  return (
    <Link
      to={`/blog/${data.uid}`}
      className="h-full w-full block hover-image-card"
    >
      <div className="flex rounded-lg bg-white flex-col h-full">
        <div className=" aspect-w-16 aspect-h-9">
          <Img
            className="rounded-t-lg absolute inset-0 w-full h-full object-cover"
            src={data.image}
            alt={data.imageAlt}
          />
        </div>
        <div className="flex h-full flex-col justify-start gap-2 p-6">
          <h5 className="text-xl font-bold tracking-tight text-gray-900">
            {data.title}
          </h5>
          <small className="text-sm text-gray-700">
            {data.lastPublicationDate}
          </small>
        </div>
      </div>
    </Link>
  )
}
