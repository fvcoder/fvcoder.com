import { client } from "../config";

export interface getByTagLoaderRes {
  uid: string;
  title: string;
  image: string;
}

export async function getByTagLoader(
  key: string,
  page = 1
): Promise<getByTagLoaderRes[]> {
  const tags = await client.getByTag(key, {
    orderings: {
      direction: "desc",
      field: "document.last_publication_date",
    },
    page: page,
    pageSize: 9,
  });
  return tags.results.map((x) => {
    return {
      uid: x.uid as string,
      title: x.data.title[0].text,
      image: x.type === "blog" ? x.data.image.url : x.data.image_cover.url,
    };
  });
}
