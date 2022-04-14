import { client } from "./config";
import { PrismicDocumentMeta } from "./loader/types";
import { dateFormat } from "./utils";

export interface BlogLoaderReturn {
  data: PrismicDocumentMeta[];
  pageSize: number;
}

export async function BlogLoader(page = 1): Promise<BlogLoaderReturn> {
  const data = await client.getByType("blog", {
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
    pageSize: 12,
    page: page,
  });
  return {
    data: data.results.map((x) => {
      return {
        uid: x.uid as string,
        title: x.data.title[0].text as string,
        image: x.data.image.url as string,
        imageAlt: x.data.image.alt as string,
        description: x.data.description[0].text as string,
        tags: x.tags,
        lastPublicationDate: dateFormat(x.last_publication_date),
      };
    }),
    pageSize: data.total_pages,
  };
}
