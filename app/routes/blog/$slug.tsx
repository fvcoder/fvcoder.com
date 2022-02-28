import {
  LoaderFunction,
  MetaFunction,
  useLoaderData,
  LinksFunction,
} from "remix";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { BlogPostLoader, PrismicDocument } from "~/services/prismic";
import * as parse from "prismic-reactjs";
import { shareSocialNetworks } from "~/utils/socialNetwork";
import { MetatagsBlog } from "~/utils/metatags";
import { LinkExternal } from "~/utils/link";

interface LoaderDataI extends PrismicDocument {
  url: string;
}

export const meta: MetaFunction = MetatagsBlog();

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "https://indestructibletype.com/fonts/Jost.css" },
];

export const loader: LoaderFunction = async (req) => {
  try {
    const data = await BlogPostLoader(req.params.slug as string);
    return { ...data, url: req.request.url };
  } catch {
    throw new Response("Not Found", {
      status: 404,
    });
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
          <parse.RichText render={d.data.body} />
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

          <div className="">
            <h4>Recursos</h4>
            <div className="grid gap-4 grid-cols-1">
              {(d.data.resource as string).split(/\n/).map((x, i) => (
                <LinkExternal href={x} key={`link-${i}`} />
              ))}
            </div>
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
