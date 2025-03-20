import { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export type Frontmatter = {
  title: string;
  description: string;
  pubDate: string;
  heroImage: string;
  tags: string[];
};

export const loader: LoaderFunction = async (c) => {
  /*
  const db = getDrizzleDb(c.context.cloudflare.env);
  const articles = await db
    .select()
    .from(article)
    .orderBy(sql`${article.updatedAt} desc nulls first`);
    */
  const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
    "./blog.*.(mdx|md)",
    { eager: true },
  );

  const post = Object.entries(modules).map(([file, post]) => {
    const slug = file
      .replace("./blog.", "")
      .replace(".mdx", "")
      .replace(".md", "");

    return {
      ...post.frontmatter,
      slug,
    };
  });

  return { post };
};

export default function Blog() {
  const loader = useLoaderData();

  return (
    <div>
      <h1>Blog</h1>
      <p>{JSON.stringify(loader)}</p>
    </div>
  );
}
