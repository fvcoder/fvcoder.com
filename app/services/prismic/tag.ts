import { BlogLoaderReturn } from "./blog";
import { client } from "./config";
import { dateFormat } from "./utils";

export async function getBlogTagPage(
  tag: string,
  page = 1
): Promise<BlogLoaderReturn> {
  const items = await client.getByTag(tag, {
    orderings: {
      direction: "desc",
      field: "document.last_publication_date",
    },
    page,
    pageSize: 12,
  });

  return {
    data: items.results.map((x) => {
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
    pageSize: items.total_pages,
  };
}
