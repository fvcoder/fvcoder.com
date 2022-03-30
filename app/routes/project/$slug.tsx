import {
  LoaderFunction,
  MetaFunction,
  useLoaderData,
  LinksFunction,
  Link,
} from "remix";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { ProjectPostLoader, PrismicDocumentProject } from "~/services/prismic";
import * as parse from "prismic-reactjs";
import { shareSocialNetworks } from "~/utils/socialNetwork";
import { MetatagsBlog } from "~/utils/metatags";
import { DocumentIcon } from "@heroicons/react/solid";
import { RenderBody } from "~/utils/renderBody";
import { LinkExternal } from "~/utils/link";

interface LoaderDataI extends PrismicDocumentProject {
  url: string;
}

export const meta: MetaFunction = MetatagsBlog();

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "https://indestructibletype.com/fonts/Jost.css" },
];

export const loader: LoaderFunction = async (req) => {
  try {
    const data = await ProjectPostLoader(req.params.slug as string);
    return { ...data, url: req.request.url };
  } catch (e) {
    console.error(e);
  }
};

export default function BlogPost(): JSX.Element {
  const d = useLoaderData<LoaderDataI>();
  return (
    <>
      <Navbar />
      <main
        className="mb-12"
        style={{ fontFamily: "'Jost','Mulish', sans-serif" }}
      >
        <header className="prose mx-auto px-4 mx:px-0 mb-5">
          <img
            src={d.image}
            alt={`Portada de ${d.title}`}
            className="w-full h-auto mb-4"
          />
          <h1 className="mb-2">{d.title}</h1>
          <span className="text-dark text-sm">{d.lastPublicationDate}</span>
          <p>{d.data.description[0].text}</p>
        </header>
        <article className="prose mx-auto px-4 mx:px-0">
          <RenderBody render={d.data.body} />

          <div className="grid gap-4 grid-cols-1">
            {d.documents.map((x, i) => (
              <LinkExternal
                href={`${new URL(d.url).origin}/blog/${x.uid}`}
                img={x.image}
                title={x.title}
                description={x.lastPublicationDate}
                key={`project-document-${i + 1}`}
              />
            ))}
          </div>

          <div>
            {d.tags.map((x, i) => (
              <span
                className="badge inline-block mr-2 select-none"
                key={`posttag${i}`}
              >
                {x}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-3">
            <p>Comparte</p>
            <div className="flex gap-3">
              {shareSocialNetworks.map((l, i) => (
                <a
                  href={l.format + d.url}
                  title={`Comparte en ${l.name}`}
                  key={`share-${i}`}
                  className="bg-gray-100 px-2 py-1 rounded-full share-social-network"
                  target="_blank"
                  rel="noreferrer"
                >
                  <l.icon />
                </a>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
