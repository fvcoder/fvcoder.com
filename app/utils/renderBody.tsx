/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PrismicRichText,
  JSXFunctionSerializer,
  JSXMapSerializer,
} from "@prismicio/react";
import Highlight from "react-highlight";
import hlc from "highlight.js";

const renderHelpers: JSXMapSerializer | JSXFunctionSerializer = {
  preformatted: (p) => {
    const t = String(p.text);
    if (t.startsWith("thefersh")) {
      const re = /thefersh:(.*)\n/;
      let language = "";
      t.replace(re, function (match) {
        language = match.replace(/thefersh:/, "").replace(/\n/, "");
        return "";
      });
      const code = hlc.highlight(t.replace(/thefersh:(.*)\n/, ""), {
        language,
      }).value;

      return (
        <pre>
          <code
            className={"hljs language-" + language}
            dangerouslySetInnerHTML={{ __html: code }}
          />
        </pre>
      );
    }
    return <Highlight>{p.children}</Highlight>;
  },
};

export function RenderBody({ render }: { render: any }): JSX.Element {
  return <PrismicRichText field={render} components={renderHelpers} />;
}
