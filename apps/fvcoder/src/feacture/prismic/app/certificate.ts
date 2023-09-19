import type { Query } from "@prismicio/types";

import { prismic } from "../dom/connect";
import type { BlogDocument, CertificatesDocument } from "../types/schema";
import type { queryList, querySlug } from "../types/query";

/**
 * Retrieves a list of blogs based on query parameters.
 *
 * @param {queryList} query - Object containing query parameters.
 * @param {string} query.locale - The locale of the blog to retrieve.
 * @param {number} query.page - The page number of the blog to retrieve.
 * @param {number} query.pageSize - The number of blogs to retrieve per page.
 * @return {Promise<Query<BlogDocument<string>>>} A Promise that returns a Query object of BlogDocuments.
 */
export async function getCertificatesList({
  page,
  pageSize,
}: queryList): Promise<Query<CertificatesDocument<string>>> {
  const d = await prismic.getByType("certificates", {
    lang: 'es-BO',
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
    pageSize: pageSize ?? 30,
    page: page ?? 1,
    fetchLinks: ["author"],
  });

  return d;
}

export async function getCertificatesUrl(): Promise<string[]> {
  const d = await prismic.getByType("certificates", {
    lang: 'es-BO',
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
    pageSize: 100,
  });
  
  return [
    `${import.meta.env.URL_BASE}/certificates`,
    ...d.results.map(x => `${import.meta.env.URL_BASE}/certificates/${x.uid}`)
  ];
}

export async function getCertificatesBySlug({ slug }: querySlug): Promise<CertificatesDocument<string>> {
  const a = await prismic.getByUID("certificates", slug, {
    fetch: "author.author_name",
    lang: 'es-BO',
  });

  return a;
}
