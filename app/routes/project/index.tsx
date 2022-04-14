import { LoaderFunction, useLoaderData } from "remix";
import { ArticleCard } from "~/components/card/article";
import { Pagination } from "~/components/pagination";
import { BlogLoaderReturn } from "~/services/prismic/blog";
import { ProjectLoader } from "~/services/prismic/projects";

interface ProjectHomeProps extends BlogLoaderReturn {
  page: number;
}

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const urlQuery = new URL(request.url);
    const page = urlQuery.searchParams.has("page")
      ? Number.isNaN(urlQuery.searchParams.get("page"))
        ? 1
        : Number(urlQuery.searchParams.get("page"))
      : 1;
    return {
      page,
      ...(await ProjectLoader()),
    };
  } catch {
    throw new Response("Not Found", {
      status: 404,
    });
  }
};

export default function ProjectHome(): JSX.Element {
  const { page, pageSize, data } = useLoaderData<ProjectHomeProps>();
  return (
    <div className="container mx-auto px-4 md:px-0">
      <header className="my-4">
        <h1 className="text-4xl capitalize">Proyectos</h1>
      </header>
      <main className="grid gap-4 grid-cols-1 md:grid-cols-3 ">
        {data.map((x, i) => (
          <ArticleCard key={`article-item-${i + 1}`} data={x} url="/project/" />
        ))}
        <div className="col-span-1 md:col-span-3">
          <Pagination page={page} size={pageSize} url={`/project`} />
        </div>
      </main>
    </div>
  );
}
