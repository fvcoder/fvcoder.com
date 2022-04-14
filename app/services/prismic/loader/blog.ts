import { client } from "../config";
import { dateFormat } from "../utils";
import { PrismicDocumentMeta } from "./types";

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
