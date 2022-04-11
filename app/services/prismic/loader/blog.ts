import { client } from "../config";
import { dateFormat } from "../utils";
import { PrismicDocument, PrismicDocumentMeta } from "./types";

interface BlogLoaderRes {
  data: PrismicDocumentMeta[];
  pageSize: number;
}

export async function BlogLoader(limit = 5): Promise<BlogLoaderRes> {
  const data = await client.getByType("blog", {
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
    pageSize: limit,
  });
  return {
    data: data.results.map((x) => {
      return {
        uid: x.uid as string,
        title: x.data.title[0].text as string,
        image: x.data.image.url as string,
        lastPublicationDate: dateFormat(x.last_publication_date),
      };
    }),
    pageSize: data.total_pages,
  };
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

  const lastPublicationDate =
    new Date(d.last_publication_date) !== new Date(d.first_publication_date)
      ? `${dateFormat(d.first_publication_date)}. Actualizado ${dateFormat(
          d.last_publication_date
        )}`
      : dateFormat(d.first_publication_date);
  //
  return {
    uid: d.uid as string,
    title: d.data.title[0].text as string,
    image: d.data.image.url as string,
    lastPublicationDate,
    data: d.data,
    exist: true,
    tags: d.tags,
  };
}
