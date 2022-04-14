/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PrismicDocumentMeta {
  uid: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  tags: string[];
  lastPublicationDate: string;
}

export interface PrismicDocument
  extends Omit<PrismicDocumentMeta, "description"> {
  data: any;
  tags: string[];
}

export interface PrismicDocumentProject extends PrismicDocument {
  documents: PrismicDocumentMeta[];
}

export interface IndexLoaderI {
  articlesPages: number;
  articles: PrismicDocumentMeta[];
  projects: Omit<PrismicDocumentMeta, "lastPublicationDate">[];
}
