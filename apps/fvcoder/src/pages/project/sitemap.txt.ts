import type { APIRoute } from 'astro';
import { getProjectUrl } from '../../feacture/prismic';

export const get: APIRoute = async () => {
  const dta = await getProjectUrl()

  return new Response(dta.join('\n'), {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}