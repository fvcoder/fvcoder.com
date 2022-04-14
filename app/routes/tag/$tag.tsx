import { LoaderFunction, useLoaderData } from "remix";
import { ArticleCard } from "~/components/card/article";
import { Pagination } from "~/components/pagination";
import { BlogLoaderReturn } from "~/services/prismic/blog";
import { getBlogTagPage } from "~/services/prismic/tag";

interface TagExplorerPageProps extends BlogLoaderReturn {
  tagName: string;
  page: number;
}

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const urlQuery = new URL(request.url);
    const page = urlQuery.searchParams.has("page")
      ? Number.isNaN(urlQuery.searchParams.get("page"))
        ? 1
        : Number(urlQuery.searchParams.get("page"))
      : 1;
    return {
      page,
      tagName: String(params.tag),
      ...(await getBlogTagPage(String(params.tag), page)),
    };
  } catch {
    return new Response("not found", {
      status: 404,
    });
  }
};

export default function TagExplorerPage(): JSX.Element {
  const { data, pageSize, tagName, page } =
    useLoaderData<TagExplorerPageProps>();

  return (
    <div className="container mx-auto px-4 md:px-0">
      <header className="my-4">
        <h1 className="text-4xl capitalize">{tagName}</h1>
      </header>
      <main className="grid gap-4 grid-cols-1 md:grid-cols-3 ">
        {data.map((x, i) => (
          <ArticleCard key={`article-item-${i + 1}`} data={x} />
        ))}
        <div className="col-span-1 md:col-span-3">
          <Pagination page={page} size={pageSize} url={`/tag/${tagName}`} />
        </div>
      </main>
    </div>
  );
}
