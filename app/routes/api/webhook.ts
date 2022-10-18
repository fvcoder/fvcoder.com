import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { client } from "~/prismic/prismic";
import { res404 } from "~/utils/response.404";

interface prismicWebhook {
  type: string
  masterRef: string,
  documents: string[],
  domain: string
  apiUrl: string
  secret: string
}

export const loader: LoaderFunction = () => {
  res404()
}


export const action: ActionFunction = async({ request }) => {
  const url = new URL(request.url)
  let d: prismicWebhook = await request.json()
  if (!d.secret || d.secret !== process.env.PRISMIC_WEBHOOK_SECRET) return json({})

  const doc = await client.getByID(d.documents[0])
  if (!doc) return json({})
  if (doc.type !== 'blog') return json({})

  await fetch(`https://maker.ifttt.com/trigger/${process.env.IFTTT_WEBHOOK_EVENT}/with/key/${process.env.IFTTT_WEBHOOK_KEY}?value1=${url.origin}/blog/${doc.uid}`)
  return json({})
}
