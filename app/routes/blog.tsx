import { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { Outlet, useLoaderData } from "@remix-run/react";

import { Layout } from "~/features/core/components/layout";

export type Frontmatter = {
  title: string;
  description: string;
  pubDate: string;
  heroImage: string;
  tags: string[];
  slug: string;
};

export const loader: LoaderFunction = (c) => {
  const path = c.request.url.replace(
    new RegExp("http(s?):\\/\\/(localhost|fvcoder.com)(:[0-9]{4}?)/blog/"),
    "",
  );

  if (path.startsWith("http")) {
    return {};
  }

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

  const currentArticle = post.find((post) => post.slug === path);
  console.log(currentArticle, path);

  return { currentArticle, path, slugs: post.map((post) => post.slug) };
};

export const meta: MetaFunction = (c) => {
  const data = c.data as { currentArticle?: Frontmatter };
  if (!data.currentArticle) {
    return [];
  }

  return [
    { title: data.currentArticle.title },
    { name: "description", content: data.currentArticle.description },
    { name: "title", content: data.currentArticle.title },
    { name: "og:type", content: "article" },
    {
      name: "og:url",
      content: `https://fvcoder.com/blog/${data.currentArticle.slug}`,
    },
    { property: "og:title", content: data.currentArticle.title },
    {
      property: "og:description",
      content: data.currentArticle.description,
    },
    {
      property: "og:image",
      content: data.currentArticle.heroImage,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:url",
      content: `https://fvcoder.com/blog/${data.currentArticle.slug}`,
    },
    {
      name: "twitter:title",
      content: data.currentArticle.title,
    },
    {
      name: "twitter:description",
      content: data.currentArticle.description,
    },
    {
      name: "twitter:image",
      content: data.currentArticle.heroImage,
    },
  ];
};

export default function BlogLayout() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loader = useLoaderData<any>();

  console.log(loader);

  return (
    <Layout>
      <div>{loader.path}</div>
      <div>{JSON.stringify(loader.slugs)}</div>
      <main className="max-w-5xl mx-auto px-6">
        {loader.currentArticle ? (
          <article className="">
            <header>
              <div>
                <img
                  src={loader.currentArticle.heroImage}
                  alt={`${loader.currentArticle.title} portada`}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="py-10 prose text-center dark:prose-invert max-w-full">
                <time dateTime={loader.currentArticle.pubDate}>
                  {new Date(loader.currentArticle.pubDate).toLocaleString(
                    "es-MX",
                    { year: "numeric", month: "long", day: "numeric" },
                  )}
                </time>
                <h1 className="mb-2">{loader.currentArticle.title}</h1>
                <p className="mt-2">Por Fernando Ticona</p>
              </div>
            </header>

            <main className="prose dark:prose-invert mx-auto">
              <Outlet />
            </main>
          </article>
        ) : (
          <Outlet />
        )}
      </main>
    </Layout>
  );
}
