import { client } from "../config";
import { dateFormat } from "../utils";
import {
  PrismicDocument,
  PrismicDocumentMeta,
  PrismicDocumentProject,
} from "./types";

export async function ProjectLoader(limit = 9): Promise<PrismicDocumentMeta[]> {
  const data = await client.getByType("projects", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });
  const filter = data.results.map((x) => {
    if (x.tags[0] !== "readme") return null;
    return {
      uid: x.uid as string,
      title: x.data.title[0].text as string,
      image: x.data.image_cover.url as string,
      lastPublicationDate: dateFormat(x.last_publication_date),
    };
  });
  const s = filter.filter((x) => x !== null) as PrismicDocumentMeta[];
  return s.slice(s.length - limit < 0 ? 0 : s.length - limit, s.length);
}

export async function ProjectPostLoader(
  slug: string
): Promise<PrismicDocumentProject> {
  const x = await client.getByUID("projects", slug);

  const docs = await client.getAllByTag(slug);

  const documents = docs.map((y) => ({
    image: y.data.image.url,
    lastPublicationDate: dateFormat(y.last_publication_date),
    title: y.data.title[0].text,
    uid: y.uid,
  })) as PrismicDocumentMeta[];

  return {
    exist: true,
    uid: x.uid as string,
    title: x.data.title[0].text,
    image: x.data.image_cover.url,
    lastPublicationDate: dateFormat(x.last_publication_date),
    data: x.data,
    tags: [],
    documents,
  };
}

/**
 * Project Document
 */
export async function ProjectDocumentLoader(
  slug: string,
  docSlug: string
): Promise<PrismicDocument> {
  const d = await client.getByUID("projects", slug);

  if (!d || d.tags[0] !== "readme") {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  /**
   * get subDocumentsMetadata
   */
  const doc = await client.getByUID("projects", docSlug);
  if (!doc || doc.tags[0] !== d.uid) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return {
    uid: `${d.uid}/${doc.uid}`,
    title: `${doc.data.title[0].text} - ${d.data.title[0].text}`,
    image: doc.data.image_cover.url as string,
    lastPublicationDate: dateFormat(doc.last_publication_date),
    exist: true,
    data: doc.data,
    tags: [],
  };
}
