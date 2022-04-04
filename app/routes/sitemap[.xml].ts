import { LoaderFunction } from "remix";
import { toXML } from "jstoxml";
import { sitemap } from "~/services/prismic/loader/sitemap";

export const loader: LoaderFunction = async () => {
  const data = toXML(await sitemap(), {
    header: '<?xml version="1.0" encoding="UTF-8"?>',
  });

  return new Response(data, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
};
