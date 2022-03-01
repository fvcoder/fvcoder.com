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
  const d = await client.getByUID("projects", slug);

  if (!d || d.tags[0] !== "readme") {
    throw new Response("Not Found", {
      status: 404,
    });
  }
  d.tags.splice(d.tags.findIndex((x) => x === "readme"));

  /**
   * get subDocumentsMetadata
   */
  const sd = await client.getAllByTag(slug);
  const document: PrismicDocument[] = sd
    .map((x) => {
      if (x.tags[0] === "readme") return null;
      return {
        uid: x.uid as string,
        title: x.data.title[0].text as string,
        image: x.data.image_cover.url as string,
        lastPublicationDate: dateFormat(d.last_publication_date),
      };
    })
    .filter((x) => x !== null) as PrismicDocument[];

  return {
    uid: d.uid as string,
    title: d.data.title[0].text as string,
    image: d.data.image_cover.url as string,
    lastPublicationDate: dateFormat(d.last_publication_date),
    data: d.data,
    exist: true,
    tags: d.tags,
    documents: document,
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
