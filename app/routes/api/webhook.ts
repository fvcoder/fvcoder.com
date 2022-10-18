import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { client } from "~/prismic/prismic";
import { res404 } from "~/utils/response.404";

interface prismicWebhook {
  type: string
  masterRef: 'Y06rOhAAAPo9dIbz',
  documents: string[],
  domain: string
  apiUrl: string
  secret: string
}

export const loader: LoaderFunction = async({ params, request }) => {
  res404()
}


export const action: ActionFunction = async({ params, request }) => {
  const url = new URL(request.url)
  let d: prismicWebhook = await request.json()
  // if (!d.secret || d.secret !== '7016db2c-dd4f-43bf-b99c-501625939fdd') res404()

  const doc = await client.getByID(d.documents[0])
  if (!doc) res404()

  await fetch(`https://maker.ifttt.com/trigger/newArticlePost/with/key/${process.env.IFTTT_WEBHOOK_KEY}?value1=${url.origin}/blog/${doc.uid}`)
  return json({})
}
