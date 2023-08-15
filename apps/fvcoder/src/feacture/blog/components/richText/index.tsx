/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { JSXMapSerializer } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

import { preformatted } from "./preformatted";

const renderHelpers: JSXMapSerializer = {
  image: ({ node }) => (
    <img className="max-w-full mx-auto rounded-xl h-auto" src={node.url} alt={node.alt ?? ""} />
  ),
  preformatted,
  embed: (p) => {
    let id = "";
    if (/youtube.com/.test(p.node.oembed.embed_url)) {
      const url = new URL(p.node.oembed.embed_url);
      if (!url.searchParams.has("v")) {
        return;
      }
      id = String(url.searchParams.get("v"));
    } else {
      id = new URL(p.node.oembed.embed_url).pathname.replace("/", "");
    }

    return (
      <div className="w-full relative mb-4  " style={{ paddingTop: "56.25%" }}>
        <iframe
          className="inset-0 absolute w-full h-full rounded-md shadow"
          src={`https://www.youtube.com/embed/${id}`}
          title={p.node.oembed.title as string}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  },
};

export function RenderArticle({ render }: { render: any }): JSX.Element {
  return <PrismicRichText field={render} components={renderHelpers} />;
}
