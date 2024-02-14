import type { RTPreformattedNode } from '@prismicio/types';
import hlc from 'highlight.js';

import { PrePromoPlatzi } from './promo/platzi';

interface PreformattedSliceProps {
  content: RTPreformattedNode;
}

export function PreformattedSlice({ content }: PreformattedSliceProps) {
  let textRaw = content.text;
  let language = 'text';
  let enabledCard = false;
  let card = '';

  if (content.text.startsWith('promo:')) {
    enabledCard = true;
    card = content.text.split('\n')[0].replace('promo:', '');
  }

  if (content.text.startsWith('languaje')) {
    const firstLine = content.text.split('\n')[0];
    language = firstLine.replace('languaje:', '');
    textRaw = content.text.replace(`${firstLine}\n`, '');
  }

  const html = hlc.highlight(textRaw, { language }).value;

  if (!enabledCard) {
    return (
      <div className="not-prose">
        <pre className="">
          <code
            className={`hljs language-${language} rounded-xl`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </pre>
      </div>
    );
  }

  if (card !== '') {
    return (
      <div className="mb-4">{card === 'platzi' && <PrePromoPlatzi />}</div>
    );
  }
}
