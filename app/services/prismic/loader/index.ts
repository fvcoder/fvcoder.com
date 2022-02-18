import { client } from "../config";
import { dateFormat } from "../utils";
import { ProjectLoader } from "./project";
import { IndexLoaderI } from "./types";

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
    projects: await ProjectLoader(3),
  };
}

export * from "./types";
export * from "./project";
export * from "./blog";
