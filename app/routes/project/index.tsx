import { Link, LoaderFunction, useLoaderData } from "remix";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { PrismicDocumentMeta, ProjectLoader } from "~/services/prismic";

export const loader: LoaderFunction = async () => {
  const data = await ProjectLoader();
  return data;
};

function CardProject({
  uid,
  title,
  image,
}: Omit<PrismicDocumentMeta, "lastPublicationDate">): JSX.Element {
  return (
    <Link
      to={`/project/${uid}`}
      className="shadow bg-white rounded-b-lg border border-slate-200"
    >
      <img src={image} className="w-full h-auto" alt={`Portada de ${title}`} />
      <p className="text-base p-2 truncate">{title}</p>
    </Link>
  );
}

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
