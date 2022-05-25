import { Link } from '@remix-run/react'
import type { PrismicDocumentMeta } from '~/types/blog'

interface HeaderCardProps {
  data: Pick<
    PrismicDocumentMeta,
    'title' | 'image' | 'imageAlt' | 'lastPublicationDate' | 'uid'
  >
}

export function HeaderCard({ data }: HeaderCardProps): JSX.Element {
  return (
    <div className="aspect-w-5 aspect-h-4 h-full w-auto">
      <img
        src={data.image}
        alt={data.imageAlt}
        className="w-full h-full object-cover rounded-lg"
      />
      <Link
        to={`/blog/${data.uid}`}
        className="bg-black/30 md:hover:bg-black/20 transition-colors flex flex-col justify-end p-4"
      >
        <h1 className="text-xl text-white truncate">{data.title}</h1>
        <p className="text-sm text-gray-300 truncate">
          {data.lastPublicationDate}
        </p>
      </Link>
    </div>
  )
}
