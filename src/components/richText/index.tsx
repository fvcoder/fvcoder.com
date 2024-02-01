import type { RTNode } from '@prismicio/types';
import { Fragment } from 'react';

import { EmbedSlice } from './slice/embed';
import { HTML } from './slice/html';
import { ImageSlice } from './slice/image';
import { PreformattedSlice } from './slice/preformatted';

interface RenderRichTextProps {
  role?: string;
  content: RTNode[];
}

export function RenderRichText({ content, role }: RenderRichTextProps) {
  return (
    <Fragment>
      {content.map((slice, i) => {
        const keyId = `article-${role ? role : 'root'}-slice-${i}`;
        switch (slice.type) {
          case 'preformatted':
            return <PreformattedSlice content={slice} key={keyId} />;
          case 'image':
            return <ImageSlice {...slice} key={keyId} />;
          case 'embed':
            return <EmbedSlice {...slice} key={keyId} />;
          default:
            return <HTML content={slice} key={keyId} />;
        }
      })}
    </Fragment>
  );
}
