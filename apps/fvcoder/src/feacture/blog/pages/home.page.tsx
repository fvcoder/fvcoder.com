import { prismic } from "./../prismic"

export async function getBlogList(page = 1) {
    const blogPages = await prismic.getByType("blog", {
        pageSize: 12,
        lang: 'es-BO',
        orderings: {
            field: "document.first_publication_date",
            direction: "desc"
        }
    })
    return blogPages
}
