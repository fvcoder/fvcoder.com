/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PrismicRichText,
  JSXFunctionSerializer,
  JSXMapSerializer,
} from "@prismicio/react";
import Highlight from "react-highlight";
import { CodeByLangHelper } from "./helpers/codeByLang";
import { LinkByCodeHelper } from "./helpers/linkByCode";

const renderHelpers: JSXMapSerializer | JSXFunctionSerializer = {
  image: ({ node }) => (
    <img className="mx-auto" src={node.url} alt={node.alt || ""} />
  ),
  preformatted: (p) => {
    const t = String(p.text);
    let e: JSX.Element | null = null;
    e = CodeByLangHelper({ t });
    e = LinkByCodeHelper({ t });
    if (e) {
      return e;
    }
    return <Highlight>{p.children}</Highlight>;
  },
};

export function RenderBody({ render }: { render: any }): JSX.Element {
  return <PrismicRichText field={render} components={renderHelpers} />;
}
