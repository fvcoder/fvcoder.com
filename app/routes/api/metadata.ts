import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import metadata from 'metadata-scraper'

export const loader: LoaderFunction = async ({ request, context }) => {
  try {
    const url = new URL(request.url)
    if (!url.searchParams.has('url')) return json({})
    const d = await metadata({
      url: url.searchParams.get('url') ?? ''
    })
    return json(d)

  } catch {
    return json({})
  }
}
