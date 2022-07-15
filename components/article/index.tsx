/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { JSXFunctionSerializer, JSXMapSerializer } from '@prismicio/react'
import { PrismicRichText } from '@prismicio/react'
import Highlight from 'react-highlight'
import { CodeByLangHelper } from './helpers/codeByLang'
import { LinkByCodeHelper } from './helpers/linkByCode'

const renderHelpers: JSXMapSerializer | JSXFunctionSerializer = {
  image: ({ node }) => (
    <img className="mx-auto" src={node.url} alt={node.alt || ''} />
  ),
  preformatted: p => {
    const t = String(p.text)
    const e = CodeByLangHelper({ t }) || LinkByCodeHelper({ t })
    return e || <Highlight>{p.children}</Highlight>
  },
  embed: p => {
    const id = new URL(p.node.oembed.embed_url).pathname.replace('/', '')
    return (
      <div className="w-full relative mb-4  " style={{ paddingTop: '56.25%' }}>
        <iframe
          className="inset-0 absolute w-full h-full rounded-md shadow"
          src={`https://www.youtube.com/embed/${id}`}
          title={p.node.oembed.title as string}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )
  }
}

export function RenderArticle({ render }: { render: any }): JSX.Element {
  return <PrismicRichText field={render} components={renderHelpers} />
}
