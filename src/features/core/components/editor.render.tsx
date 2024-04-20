'use client';
/* eslint-disable no-case-declarations */
import { OutputData } from '@editorjs/editorjs';
import { Checkbox, Image } from '@nextui-org/react';
import { Fragment } from 'react';

import { EmbedRender } from './render/embed';

interface EditorRenderProps {
  content: OutputData;
}

export function EditorRender(props: EditorRenderProps) {
  return (
    <Fragment>
      {props.content.blocks.map((block) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p
                key={block.id}
                dangerouslySetInnerHTML={{ __html: block.data.text }}
              />
            );
          case 'header':
            const Component =
              `h${block.data.level}` as keyof JSX.IntrinsicElements;

            return <Component key={block.id}>{block.data.text}</Component>;
          case 'quote':
            return (
              <blockquote key={block.id} data-caption={block.data.caption}>
                {block.data.text} -{' '}
                <span className="not-prose font-normal not-italic">
                  {block.data.caption}
                </span>
              </blockquote>
            );
          case 'warning':
            return (
              <div
                key={block.id}
                role="alert"
                className="not-prose flex gap-2 items-start border rounded-md p-2 bg-yellow-50/50 border-yellow-300 dark:bg-yellow-950 dark:border-yellow-700"
              >
                <div>
                  <Image
                    src="https://cdn.fvcoder.com/emoji/dedo-%C3%ADndice-hacia-arriba.png"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  {block.data.title && (
                    <p className="text-sm dark:text-neutral-200">
                      <strong>{block.data.title}</strong>
                    </p>
                  )}
                  {block.data.message && (
                    <p className="text-base dark:text-neutral-300">
                      {block.data.message}
                    </p>
                  )}
                </div>
              </div>
            );
          case 'delimiter':
            return <hr key={block.id} />;
          case 'checklist':
            return (
              <div key={block.id}>
                {block.data.items.map(
                  (item: { text: string; checked: boolean }, i: number) => (
                    <div key={`${block.id}-${i}`} className="not-prose">
                      <Checkbox
                        readOnly
                        isSelected={item.checked}
                        defaultSelected={item.checked}
                      >
                        <span dangerouslySetInnerHTML={{ __html: item.text }} />
                      </Checkbox>
                    </div>
                  ),
                )}
              </div>
            );
          case 'embed':
            return <EmbedRender key={block.id} {...block.data} />;
          default:
            return null;
        }
      })}
    </Fragment>
  );
}
