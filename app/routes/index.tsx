import { useLoaderData, LoaderFunction, MetaFunction } from "remix";
import { ArticleCard } from "~/components/card/article";
import { Carrousel } from "~/components/carrousel";
import { BlogLoader, BlogLoaderReturn } from "~/services/prismic/blog";
import { MetatagsPage } from "~/utils/metatags";

export const loader: LoaderFunction = async () => {
  try {
    return await BlogLoader();
  } catch {
    throw new Response("Not Found", {
      status: 404,
    });
  }
};

export const meta: MetaFunction = MetatagsPage({
  title: "Blog de Fernando Ticona | Desarrollador web Frontend",
  description:
    "Hola, soy Fernando y escribo articulos acerca de lo que aprendo recientemente.",
});

export default function Index() {
  const { data } = useLoaderData<BlogLoaderReturn>();
  return (
    <>
      <header className="container mx-auto">
        <Carrousel data={data} />
      </header>
      <section className="container mx-auto my-4 grid gap-4 grid-cols-1 md:grid-cols-6">
        {data.map((x, i) => {
          if (i <= 3) return null;
          return (
            <div
              className={
                "col-span-1 " +
                (i === 4 || i === 5 ? "md:col-span-3" : "md:col-span-2")
              }
              key={`index-card-article-${i}`}
            >
              <ArticleCard data={x} />
            </div>
          );
        })}
      </section>
    </>
  );
}
