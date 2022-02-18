import { useLoaderData } from "remix";
import { CardPost } from "~/components/card/post";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { BlogLoader, PrismicDocumentMeta } from "~/services/prismic";
import { MetatagsPage } from "~/utils/metatags";

export const loader = async () => {
  try {
    return await BlogLoader(10);
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
  const data = useLoaderData<PrismicDocumentMeta[]>();
  return (
    <>
      <Navbar />
      <header className="container mx-auto px-4 md:px-0 pt-6 pb-12">
        <h1 className="text-3xl">Blog de Fernando Ticona</h1>
      </header>
      <section className="container mx-auto px-4 md:px-0">
        {data.map((x, i) => (
          <CardPost
            uid={x.uid}
            title={x.title}
            image={x.image}
            lastPublicationDate={x.lastPublicationDate}
            key={`article-item-${i + 1}`}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}
