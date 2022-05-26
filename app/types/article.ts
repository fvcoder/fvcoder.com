/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PrismicDocumentMeta } from './blog'

export interface ArticleDocument
  extends Omit<PrismicDocumentMeta, 'description'> {
  data: any
  tags: string[]
}
