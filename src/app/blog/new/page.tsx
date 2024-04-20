'use client';
import { OutputData } from '@editorjs/editorjs';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';

import { Container } from '@/features/core/components/container';
import { EditorRender } from '@/features/core/components/editor.render';

const Editor = dynamic(() => import('@/features/core/lib/editor'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function NewBlogPage() {
  const [content, setContent] = useState<OutputData>({ blocks: [] });

  const cont = useMemo<OutputData>(() => {
    if (typeof window !== 'undefined') {
      const items = window.localStorage.getItem('editorjs');
      if (items) {
        return JSON.parse(items) as OutputData;
      }
    }

    return {
      blocks: [],
    };
  }, [content]);

  return (
    <Container className="grid grid-cols-2 gap-4" fullWidth>
      <div className="border rounded-md py-4">
        <Editor
          initialData={cont}
          onChange={(d) => {
            if (typeof window !== 'undefined') {
              window.localStorage.setItem('editorjs', JSON.stringify(d));
            }
            setContent(d);
          }}
        />
      </div>
      <div className="prose mx-auto w-full border rounded-md py-4">
        <EditorRender content={content} />
      </div>
    </Container>
  );
}
