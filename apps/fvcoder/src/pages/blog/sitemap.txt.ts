import type { APIRoute } from 'astro';
import { getBlogUrl } from '../../feacture/prismic/app/blog';

export const get: APIRoute = async () => {
  const dta = await getBlogUrl()

  return new Response(dta.join('\n'), {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}