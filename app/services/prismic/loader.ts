/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "./config";
import { dateFormat } from "./utils";

export interface PrismicDocumentMeta {
  uid: string;
  title: string;
  image: string;
  lastPublicationDate: string;
}

export interface PrismicDocument extends PrismicDocumentMeta {
  exist: boolean;
  data: any;
  tags: string[];
}

export interface IndexLoaderI {
  articles: PrismicDocumentMeta[];
  projects: Omit<PrismicDocumentMeta, "lastPublicationDate">[];
}

export async function IndexLoader(limit = 5): Promise<IndexLoaderI> {
  const data = await client.getByType("blog", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    pageSize: limit,
  });
  return {
    articles: data.results.map((x) => {
      return {
        uid: x.uid as string,
        title: x.data.title[0].text as string,
        image: x.data.image.url as string,
        lastPublicationDate: dateFormat(x.last_publication_date),
      };
    }),
    projects: [],
  };
}

export async function BlogLoader(limit = 5): Promise<PrismicDocumentMeta[]> {
  const data = await client.getByType("blog", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    pageSize: limit,
  });
  return data.results.map((x) => {
    return {
      uid: x.uid as string,
      title: x.data.title[0].text as string,
      image: x.data.image.url as string,
      lastPublicationDate: dateFormat(x.last_publication_date),
    };
  });
}

export async function BlogPostLoader(slug: string): Promise<PrismicDocument> {
  const d = await client.getByUID("blog", slug, {
    pageSize: 1,
  });

  if (!d) {
    return {
      uid: "",
      title: "",
      image: "",
      lastPublicationDate: "",
      data: "",
      exist: false,
      tags: [],
    };
  }
  return {
    uid: d.uid as string,
    title: d.data.title[0].text as string,
    image: d.data.image.url as string,
    lastPublicationDate: dateFormat(d.last_publication_date),
    data: d.data,
    exist: true,
    tags: d.tags,
  };
}
