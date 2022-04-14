import { FC } from "react";
import { useLoaderData, LoaderFunction, Link, MetaFunction } from "remix";
import { Carrousel } from "~/components/carrousel";
import { PrismicDocumentMeta } from "~/services/prismic";
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

interface ArticleCardProps {
  data: PrismicDocumentMeta;
}

const ArticleCard: FC<ArticleCardProps> = ({ data }) => {
  const {
    uid,
    image,
    imageAlt,
    lastPublicationDate,
    title,
    description,
    tags,
  } = data;

  const imgUrlSm = new URL(image);
  const imgUrlMd = new URL(image);
  const imgUrlLg = new URL(image);

  imgUrlSm.searchParams.set("w", "300");
  imgUrlMd.searchParams.set("w", "500");
  imgUrlLg.searchParams.set("w", "1000");
  return (
    <Link to={`/blog/${uid}`}>
      <img
        className=" rounded-lg"
        srcSet={`${imgUrlSm.href} 300w, ${imgUrlMd.href} 500w, ${imgUrlLg.href} 1000w`}
        src={image}
        alt={imageAlt}
      />
      <div className="mt-8 mb-4 dark:text-white text-black">
        <span className="text-base opacity-50">{lastPublicationDate}</span>
        <h3 className="text-4xl mt-4 font-openSans">{title}</h3>
        <p className="text-base my-4 opacity-50">{description}</p>
        <div>
          {tags.map((x, i) => {
            if (i <= 2) {
              return (
                <p
                  className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 inline-block"
                  key={`article-item-${i}-${x}`}
                >
                  {x}
                </p>
              );
            }
            return null;
          })}
        </div>
      </div>
    </Link>
  );
};

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
