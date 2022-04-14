import { LoaderFunction, useLoaderData } from "remix";
import { ArticleCard } from "~/components/card/article";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { Pagination } from "~/components/pagination";
import { BlogLoader, BlogLoaderReturn } from "~/services/prismic/blog";
import { MetatagsPage } from "~/utils/metatags";

interface BlogHomeData extends BlogLoaderReturn {
  page: number;
}

export const loader: LoaderFunction = async (ctx) => {
  try {
    const urlQuery = new URL(ctx.request.url);
    const page = urlQuery.searchParams.has("page")
      ? Number.isNaN(urlQuery.searchParams.get("page"))
        ? 1
        : Number(urlQuery.searchParams.get("page"))
      : 1;
    return {
      page,
      ...(await BlogLoader(page)),
    };
  } catch {
    throw new Response("Not Found", {
      status: 404,
    });
  }
};

export const meta = MetatagsPage({
  title: "Blog de Fernando Ticona",
  description:
    "Explora algunos articulos de tecnologia, programacion, frontend",
});

export default function BlogHome(): JSX.Element {
  const { data, page, pageSize } = useLoaderData<BlogHomeData>();
  return (
    <>
      <header className="container mx-auto px-4 md:px-0 pt-6 pb-12">
        <h1 className="text-3xl">Blog de Fernando Ticona</h1>
      </header>
      <section className="container mx-auto px-4 md:px-0 grid gap-4 grid-cols-1 md:grid-cols-3">
        {data.map((x, i) => (
          <ArticleCard key={`article-item-${i + 1}`} data={x} />
        ))}
      </section>
      <Pagination size={pageSize} page={page} />
    </>
  );
}
