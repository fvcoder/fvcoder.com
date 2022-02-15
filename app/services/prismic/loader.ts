import { client } from "./config";
import { dateFormat } from "./utils";

export interface PrismicDocumentMeta {
  uid: string;
  title: string;
  image: string;
  lastPublicationDate: string;
}

export interface IndexLoaderI {
  articles: PrismicDocumentMeta[];
  projects: Omit<PrismicDocumentMeta, "lastPublicationDate">[];
}

export async function IndexLoader(): Promise<IndexLoaderI> {
  const data = await client.getByType("blog", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    pageSize: 5,
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
