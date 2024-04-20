'use client';
import AttachesTool from '@editorjs/attaches';
import Checklist from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import CodeTool from '@rxpm/editor-js-code';
import ImageTool from 'editorjs-image-with-link';
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
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          embed: Embed,
          code: {
            class: CodeTool,
            config: {
              modes: {
                text: 'Texto',
                js: 'JavaScript',
                ts: 'TypeScript',
                py: 'Python',
                go: 'Go',
                cpp: 'C++',
                cs: 'C#',
                md: 'Markdown',
              },
              defaultMode: 'go',
            },
          },
          attaches: {
            class: AttachesTool,
            config: {
              endpoint: '/api/file',
            },
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: '/api/file', // Your backend file uploader endpoint
                byUrl: '/api/file', // Your endpoint that provides uploading by Url
              },
            },
          },
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
