'use client';
/* eslint-disable no-case-declarations */
import { OutputData } from '@editorjs/editorjs';
import { Checkbox, Image, Tooltip } from '@nextui-org/react';
import { Fragment } from 'react';

import { RenderAttaches } from './render/attaches';
import { CodeRender } from './render/code';
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
              <div key={block.id} className="py-4">
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
          case 'code':
            return (
              <CodeRender
                key={block.id}
                mode={block.data.mode}
                code={block.data.code}
              />
            );
          case 'embed':
            return <EmbedRender key={block.id} {...block.data} />;
          case 'attaches':
            return <RenderAttaches key={block.id} {...block.data} />;
          case 'image':
            return (
              <Tooltip key={block.id} content={block.data.caption}>
                <Image
                  src={block.data.file.url}
                  alt={block.data.caption}
                  className="w-full h-auto"
                />
              </Tooltip>
            );
          case 'list':
            const ComponentList: keyof JSX.IntrinsicElements =
              block.data.style === 'ordered' ? 'ol' : 'ul';

            return (
              <ComponentList key={block.id}>
                {block.data.items.map((item: string, i: number) => (
                  <li
                    key={`${block.id}-${i}`}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ComponentList>
            );
          default:
            return null;
        }
      })}
    </Fragment>
  );
}
