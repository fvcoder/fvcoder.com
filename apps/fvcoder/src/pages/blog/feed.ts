import RRS from 'rss'
import { asText } from '@prismicio/helpers'
import type { APIRoute } from 'astro';
import { getBlogList } from '../../feacture/prismic';

export const get: APIRoute = async () => {
    const feed = new RRS({
        title: 'Blog de Fernando Ticona (@fvcoder)',
        description: '¡Explora el Mundo del Desarrollo Web con Fernando Ticona! Únete a mí en mi viaje como Full-Stack Dev Junior mientras comparto mis experiencias, conocimientos y proyectos en el emocionante mundo del desarrollo frontend y backend. Sumérgete en artículos, tutoriales y reflexiones que te guiarán a través de mis aprendizajes. ¡Conéctate y descubre nuevas oportunidades en el universo del código!',
        feed_url: import.meta.env.URL_BASE + "/blog/feed",
        site_url: import.meta.env.URL_BASE + "/blog",
        language: 'es-BO'
    })

    const data = await getBlogList({})

    data.results.forEach(x=> {
      feed.item({
        title: asText(x.data.title),
        author: 'Fernando Ticona <contact@fvcoder.com>',
        description: asText(x.data.description),
        url: import.meta.env.URL_BASE + "/blog/" + x.uid,
        date: x.last_publication_date,
      })
    })
    
    return new Response(feed.xml({indent: true}) ?? '', {
        status: 200,
        headers: {
          "Content-Type": "application/xml"
        }
      })
}