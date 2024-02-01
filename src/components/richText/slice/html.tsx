/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { asHTML } from '@prismicio/helpers';
import { RTNode } from '@prismicio/types';

interface HTMLProps {
  content: RTNode;
  key?: string;
}

export function HTML({ content }: HTMLProps) {
  return <div dangerouslySetInnerHTML={{ __html: asHTML([content]) }} />;
}
