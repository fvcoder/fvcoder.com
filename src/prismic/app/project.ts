/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { filter } from '@prismicio/client';
import type { Query } from '@prismicio/types';

import { prismic } from '../dom/connect';
import type { queryList, querySlug } from '../types/query';
import type { ProjectsDocument } from '../types/schema';

/**
 * Retrieves a list of blogs based on query parameters.
 *
 * @param {queryList} query - Object containing query parameters.
 * @param {string} query.locale - The locale of the blog to retrieve.
 * @param {number} query.page - The page number of the blog to retrieve.
 * @param {number} query.pageSize - The number of blogs to retrieve per page.
 * @return {Promise<Query<ProjectsDocument<string>>>} A Promise that returns a Query object of ProjectsDocuments.
 */
export async function getProjectList({
  page,
  pageSize,
}: queryList): Promise<Query<ProjectsDocument<string>>> {
  const d = await prismic.getByType('projects', {
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

export async function getProjectByTag(tag: string) {
  const d = await prismic.getByTag(tag, {
    lang: 'es-BO',
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc',
    },
    pageSize: 13,
    page: 1,
    fetchLinks: ['author'],
    filters: [filter.at('document.type', 'projects')],
  });

  return d;
}

export async function getProjectUrl(): Promise<string[]> {
  const d = await prismic.getByType('projects', {
    lang: 'es-BO',
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc',
    },
    pageSize: 100,
  });

  return [
    `${process.env.NEXT_PUBLIC_URL_BASE}/project`,
    ...d.results.map(
      (x) => `${process.env.NEXT_PUBLIC_URL_BASE}/project/${x.uid}`,
    ),
  ];
}

export async function getProjectBySlug({
  slug,
}: querySlug): Promise<ProjectsDocument<string>> {
  const a = await prismic.getByUID('projects', slug, {
    fetch: 'author.author_name',
    lang: 'es-BO',
  });

  return a;
}
