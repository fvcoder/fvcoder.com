/* eslint-disable no-case-declarations */
import { OutputData } from '@editorjs/editorjs';
import { Fragment } from 'react';

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
          default:
            return null;
        }
      })}
    </Fragment>
  );
}
