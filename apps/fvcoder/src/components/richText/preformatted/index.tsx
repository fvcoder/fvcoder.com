import type { JSXMapSerializer } from "@prismicio/react";

import { Code } from "./code";
import { NextPost } from "./post.next";
import { PreviewPost } from "./post.preview";

export const preformatted: JSXMapSerializer["preformatted"] = ({ text, children }) => {
  const t = String(text);

  return PreviewPost({ t }) ?? NextPost({ t }) ?? Code({ t }) ?? <>{children}</>;
};
