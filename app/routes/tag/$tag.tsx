import { useEffect } from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { CardProject } from "~/components/card/project";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import {
  getByTagLoader,
  getByTagLoaderRes,
} from "~/services/prismic/loader/tags";
import { MetatagsPage } from "~/utils/metatags";

interface TagPageData {
  data: getByTagLoaderRes[];
  tag: string;
}

export const meta = MetatagsPage({
  title: "Explorar Tag",
  description: "Puedes explorar el contenido del tag",
});

export const loader: LoaderFunction = async ({ params }) => {
  return { data: await getByTagLoader(String(params.tag)), tag: params.tag };
};

export default function TagPage() {
  const { data, tag } = useLoaderData<TagPageData>();
  useEffect(() => {
    if (typeof document !== "undefined") document.title = `Explora ${tag}`;
  }, []);
  return (
    <>
      <Navbar />
      <header className="container mx-auto px-4 md:px-0 my-4">
        <h1 className="text-2xl">
          Explora{" "}
          <span className="mr-2 select-none bg-slate-100 hover:bg-slate-200 rounded-lg py-1 px-2 border border-slate-200 ">
            {tag}
          </span>
        </h1>
      </header>
      <main className="container mx-auto px-4 md:px-0 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((x, i) => (
          <CardProject
            uid={x.uid}
            title={x.title}
            image={x.image}
            key={`tag-item-${i}`}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
