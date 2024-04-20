'use client';
import Delimiter from '@editorjs/delimiter';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import { useEffect, useRef } from 'react';

interface EditorProps {
  holder?: string;
  initialData?: OutputData;
  onChange?: (data: OutputData) => void;
}

export default function Editor(props: EditorProps) {
  const instanceId = props.holder ? props.holder : 'editorjs';
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: instanceId,
        autofocus: true,
        data: props.initialData,
        placeholder: 'Write something ...',
        tools: {
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },
          header: {
            class: Header,
            config: {
              placeholder: 'Enter a header',
              levels: [2, 3, 4],
              defaultLevel: 2,
            },
          },
          quote: Quote,

          warning: {
            class: Warning,
            inlineToolbar: true,
            config: {
              titlePlaceholder: 'Title',
              messagePlaceholder: 'Message',
            },
          },
          delimiter: Delimiter,
        },
        async onChange(api) {
          const data = await api.saver.save();
          if (props.onChange) {
            props.onChange(data);
          }
        },
      });
      ref.current = editor;
    }

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return (
    <div
      id={instanceId}
      className="prose dark:prose-invert max-w-none mx-auto"
    />
  );
}
