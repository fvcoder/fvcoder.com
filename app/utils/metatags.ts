import { MetaFunction } from "remix";

interface MetatagsProps {
  title: string;
  description: string;
}

export function MetatagsBlog({
  title,
  description,
}: MetatagsProps): MetaFunction {
  return () => ({
    title,
    description,
    "twitter:title": title,
    "twitter:description": description,
    "og:type": "article",
    "og:title": title,
    "og:description": description,
  });
}
