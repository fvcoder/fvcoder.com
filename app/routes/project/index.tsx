import { LoaderFunction, useLoaderData } from "remix";
import { CardProject } from "~/components/card/project";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { PrismicDocumentMeta, ProjectLoader } from "~/services/prismic";

export const loader: LoaderFunction = async () => {
  try {
    const data = await ProjectLoader();
    return data;
  } catch {
    throw new Response("Not Found", {
      status: 404,
    });
  }
};

export default function ProjectHome(): JSX.Element {
  const d = useLoaderData<PrismicDocumentMeta[]>();
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 md:px-0 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {d.map((x, i) => (
          <CardProject
            uid={x.uid}
            title={x.title}
            image={x.image}
            key={`project-${i + 1}`}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
