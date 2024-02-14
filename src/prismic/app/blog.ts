import type { Query } from '@prismicio/types';

import { prismic } from '../dom/connect';
import type { queryList, querySlug } from '../types/query';
import type { BlogDocument } from '../types/schema';

/**
 * Retrieves a list of blogs based on query parameters.
 *
 * @param {queryList} query - Object containing query parameters.
 * @param {string} query.locale - The locale of the blog to retrieve.
 * @param {number} query.page - The page number of the blog to retrieve.
 * @param {number} query.pageSize - The number of blogs to retrieve per page.
 * @return {Promise<Query<BlogDocument<string>>>} A Promise that returns a Query object of BlogDocuments.
 */
export async function getBlogList({
  page,
  pageSize,
}: queryList): Promise<Query<BlogDocument<string>>> {
  const d = await prismic.getByType('blog', {
    lang: 'es-BO',
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc',
    },
    pageSize: pageSize ?? 13,
    page: page ?? 1,
    fetchLinks: ['author'],
  });

  return d;
}

export async function getBlogUrl(): Promise<string[]> {
  const d = await prismic.getByType('blog', {
    lang: 'es-BO',
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc',
    },
    pageSize: 100,
  });

  return [
    `${process.env.NEXT_PUBLIC_URL_BASE}/blog`,
    ...d.results.map(
      (x) => `${process.env.NEXT_PUBLIC_URL_BASE}/blog/${x.uid}`,
    ),
  ];
}

export async function getBlogBySlug({
  slug,
}: querySlug): Promise<BlogDocument<string>> {
  const a = await prismic.getByUID('blog', slug, {
    fetch: 'author.author_name',
    lang: 'es-BO',
  });

  return a;
}
