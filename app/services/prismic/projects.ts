import { BlogLoaderReturn } from "./blog";
import { client } from "./config";
import { PrismicDocumentMeta, PrismicDocumentProject } from "./loader/types";
import { dateFormat } from "./utils";

export async function ProjectLoader(page = 1): Promise<BlogLoaderReturn> {
  const data = await client.getByType("projects", {
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
        image: x.data.image_cover.url as string,
        imageAlt: x.data.image_cover.alt as string,
        description: x.data.description[0].text as string,
        tags: x.tags,
        lastPublicationDate: dateFormat(x.last_publication_date),
      };
    }),
    pageSize: data.total_pages,
  };
}

/** obtener un articulo en especifico */
export async function getProjectPostLoader(
  slug: string
): Promise<PrismicDocumentProject> {
  const d = await client.getByUID("projects", slug, {
    pageSize: 1,
  });

  if (!d) {
    return {
      uid: "",
      title: "",
      image: "",
      imageAlt: "",
      lastPublicationDate: "",
      data: "",
      tags: [],
      documents: [],
    };
  }

  const lastPublicationDate =
    new Date(d.last_publication_date) !== new Date(d.first_publication_date)
      ? `Actualizado ${dateFormat(d.last_publication_date)}`
      : dateFormat(d.first_publication_date);

  /**  */
  const docs = await client.getAllByTag(slug, {
    orderings: {
      field: "document.first_publication_date",
      direction: "asc",
    },
  });

  const documents = docs.map((y) => ({
    image: y.data.image.url,
    lastPublicationDate: dateFormat(y.last_publication_date),
    title: y.data.title[0].text,
    uid: y.uid,
  })) as PrismicDocumentMeta[];

  return {
    uid: d.uid as string,
    title: d.data.title[0].text as string,
    image: d.data.image_cover.url as string,
    imageAlt: d.data.image_cover.alt as string,
    lastPublicationDate,
    data: d.data,
    tags: d.tags,
    documents,
  };
}
