import { MetaFunction } from "remix";

interface MetatagsProps {
  title: string;
  description: string;
}

export function MetatagsBlog(): MetaFunction {
  return (d) => {
    const title = d.data.title || "";
    const description = d.data.data.description[0].text || "";
    const image = d.data.image || "";
    return {
      title,
      description,
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image,
      "twitter:card": "summary_large_image",
      "og:type": "article",

      "og:title": title,
      "og:description": description,
      "og:image": image,
    };
  };
}

export function MetatagsPage({
  title,
  description,
}: MetatagsProps): MetaFunction {
  return () => ({
    title,
    description,
    "twitter:title": title,
    "twitter:description": description,
    "og:type": "website",
    "og:title": title,
    "og:description": description,
  });
}
