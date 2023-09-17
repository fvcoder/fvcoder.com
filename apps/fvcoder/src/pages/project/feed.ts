import RRS from 'rss'
import { asText } from '@prismicio/helpers'
import type { APIRoute } from 'astro';
import { getProjectList } from '../../feacture/prismic';

export const get: APIRoute = async () => {
    const feed = new RRS({
        title: 'Explora mis Creaciones: Proyectos de Fernando Ticona, Full-Stack Dev Junior',
        description: 'Sumérgete en el fascinante mundo de mis creaciones como Full-Stack Dev Junior. Desde aplicaciones web dinámicas hasta soluciones backend innovadoras, descubre una variedad de proyectos que reflejan mi pasión por el desarrollo web. Explora cómo aplico mis habilidades para dar vida a ideas digitales emocionantes.',
        feed_url: import.meta.env.URL_BASE + "/project/feed",
        site_url: import.meta.env.URL_BASE + "/project",
        language: 'es-BO'
    })

    const data = await getProjectList({})

    data.results.forEach(x=> {
      feed.item({
        title: asText(x.data.title),
        author: 'Fernando Ticona <contact@fvcoder.com>',
        description: asText(x.data.description),
        url: import.meta.env.URL_BASE + "/project/" + x.uid,
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