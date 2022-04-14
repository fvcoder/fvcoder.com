import { Link, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { PrismicDocument } from "~/services/prismic/loader/types";
import { shareSocialNetworks } from "~/utils/socialNetwork";
import { MetatagsBlog } from "~/utils/metatags";
import { LinkExternal } from "~/utils/link";
import { RenderBody } from "~/utils/renderBody";
import { getBlogPostLoader } from "~/services/prismic/blog";

interface LoaderDataI extends PrismicDocument {
  url: string;
}

export const meta: MetaFunction = MetatagsBlog();

export const loader: LoaderFunction = async (req) => {
  try {
    const data = await getBlogPostLoader(req.params.slug as string);
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
    <main className="mb-12 font-openSans">
      <header className="prose mx-auto px-4 mx:px-0 mb-5 dark:prose-invert">
        <img
          src={d.image}
          alt={`Portada de ${d.title}`}
          className="w-full h-auto mb-4"
        />
        <h1 className="mb-2">{d.title}</h1>
        <span className="text-dark text-sm">{d.lastPublicationDate}</span>
        <p>{d.data.description[0].text}</p>
      </header>
      <article className="prose mx-auto px-4 mx:px-0 dark:prose-invert">
        <RenderBody render={d.data.body} />
        <div>
          {d.tags.map((x, i) => (
            <Link
              to={`/tag/${x}`}
              className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 inline-block no-underline"
              key={`posttag${i}`}
            >
              {x}
            </Link>
          ))}
        </div>

        <div>
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
                className="bg-gray-100 dark:bg-transparent px-2 py-1 rounded-full share-social-network"
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
  );
}
