'use client';
import hlc from 'highlight.js';

interface CodeRenderProps {
  code: string;
  mode: string;
}

export function CodeRender(props: CodeRenderProps) {
  const html = hlc.highlight(props.code, { language: props.mode }).value;

  return (
    <div className="not-prose">
      <pre>
        <code
          className={`hljs language-${props.mode} rounded-xl`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </div>
  );
}
