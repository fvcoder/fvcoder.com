import { Link, useLoaderData, LoaderFunction } from "remix";
import { CardPost } from "~/components/card/post";
import { CardProject } from "~/components/card/project";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { IndexLoader, IndexLoaderI } from "~/services/prismic";

export const loader: LoaderFunction = async () => {
  try {
    await IndexLoader();
  } catch {
    throw new Response("Not Found", {
      status: 404,
    });
  }
};

export default function Index() {
  const data = useLoaderData<IndexLoaderI>();
  return (
    <>
      <Navbar />
      <header className="container mx-auto px-4 md:px-0 py-6 md:py-12">
        <div className="w-full md:w-3/4">
          <h1 className="text-5xl leading-normal text-purple font-bold">
            Soy Fernando, Desarrollador web frontend
          </h1>
          <p className="text-dark text-lg">
            Creo interfaces en paginas web, para que los usuarios puedan tener
            una experiencia agradable e intuitiva. Conoceme mejor en mi{" "}
            <Link to="/blog" className="text-lightRed underline">
              blog
            </Link>{" "}
            o puedes ver mi trabajo en de{" "}
            <a
              href="https://github.com/thefersh"
              className="text-blue-400 underline"
            >
              github
            </a>{" "}
            y{" "}
            <Link to="/project" className="text-green-500 underline">
              proyectos
            </Link>
            .
          </p>
        </div>
      </header>
      <section className="container mx-auto px-4 md:px-0 flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-3/4 px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg">Articulos recientes</h2>
            <Link
              to="/blog"
              className="text-sm hidden md:block hover:underline"
            >
              ver mas
            </Link>
          </div>
          {data.articles.map((x, i) => (
            <CardPost
              uid={x.uid}
              title={x.title}
              image={x.image}
              lastPublicationDate={x.lastPublicationDate}
              key={`article-item-${i + 1}`}
            />
          ))}
        </div>
        <div className="w-full lg:w-2/5 xl:w-1/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg">Proyectos</h2>
            <Link
              to="/project"
              className="text-sm hidden md:block hover:underline"
            >
              ver mas
            </Link>
          </div>
          {data.projects.map((x, i) => (
            <CardProject
              uid={x.uid}
              title={x.title}
              image={x.image}
              key={`project-item-${i + 1}`}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
