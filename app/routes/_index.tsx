import { Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/cloudflare";

import { getAuth, getAuthProps } from "~/features/auth/lib/auth";
import { ContributionGraph } from "~/features/core/components/contributionGraph";
import { Layout } from "~/features/core/components/layout";
import { contactData } from "~/features/core/data/contact";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async (c) => {
  const auth = getAuth(c.context.cloudflare.env as getAuthProps);
  const session = await auth.api.getSession({ headers: c.request.headers });

  return session;
};

export const action: ActionFunction = async (c) => {
  const auth = getAuth(c.context.cloudflare.env as getAuthProps);
  const url = new URL(c.request.url);

  const data = await auth.api.signInMagicLink({
    headers: c.request.headers,
    body: {
      email: "fvcoder1@gmail.com",
      callbackUrl: url.origin,
    },
  });

  return data;
};

export default function Index() {
  const project = [];

  return (
    <Layout>
      <header className="max-w-5xl mx-auto px-6 mt-20">
        <section className="flex flex-col-reverse md:flex-row md:items-center md:justify-center justify-between gap-12 mb-16 overflow-x-hidden md:overflow-x-visible">
          <div>
            <div>
              <h1 className="font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight min-w-full">
                Frontend Developer | Next.js & React | Backend con NestJS
              </h1>
              <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
                Mi enfoque está en ofrecer soluciones personalizadas que se
                adapten a las necesidades de tu negocio, asegurando una
                experiencia de usuario impecable en todos los dispositivos. Ya
                sea que necesites desarrollar un sitio web completo, optimizar
                tu página actual o integrar APIs, estoy aquí para ayudarte a
                alcanzar tus objetivos digitales.
              </p>
              <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mt-4">
                Contácteme hoy para discutir cómo puedo ayudarte a crear un
                sitio web que cautive a tus usuarios y te impulse al éxito.
              </p>
            </div>
            <div className="opacity-100 transform-none">
              <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">
                {contactData.map((x) => (
                  <li>
                    <a
                      rel="noopener"
                      target="_blank"
                      className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group"
                      href={`${x.href}?ref=https://fvcoder.com`}
                    >
                      <Icon
                        icon={x.icon}
                        className="flex-shrink-0 size-4 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                      />
                      &nbsp;{x.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full pb-10 md:pb-0 md:w-1/3">
            <svg className="w-full md:w-[450px]" viewBox="0 0 1273 906">
              <path
                fill="none"
                d="M318.587 315.483v195.453l158.957-79.545V236.949m-158.957 78.534L159.63 236.949m158.957 78.534 158.957-78.534m-158.957 78.534v194.442L159.63 589.469m158.957-273.986L159.63 237.286.674 315.483m317.913 0L159.63 394.016m317.914-157.067-158.957-78.196-158.957 78.196m317.914 0v195.453m0-195.453-158.957-78.533 158.957-78.197L636.5 158.416l-158.956 78.533Zm-317.914 0V79.545m0 509.924V394.016m0 195.453L.674 509.925V315.483m0 0 158.956 78.533m0-314.47L318.587 1.348l158.957 78.196-158.957 78.534L159.63 79.545ZM795.457 395.7V237.286m0 0L636.5 159.09l-158.956 78.196m317.913 0L636.5 315.82m-158.956-78.534v194.442l123.595 60.034M477.544 237.286 636.5 315.82m0 0v157.067m317.914 195.116V473.561m0 0-158.957-78.197L636.5 473.561l158.957 78.533m158.957-78.533-158.957 78.533m158.957-78.533v195.453m0-195.453-158.957-78.534 158.957-78.196 158.956 78.196-158.956 78.534Zm-158.957 78.533L636.5 473.898l-158.956 78.196m317.913 0L636.5 630.628m-158.956-78.534v194.44L636.5 826.078v-195.45m-158.956-78.534L636.5 630.628m158.957 78.87v195.451m0-195.451L636.5 630.965m158.957 78.533 158.957-78.533M795.457 904.949l158.957-79.545V630.965M795.457 904.949 636.5 825.404V630.965m0 0 158.957-78.197 158.957 78.197m158.956-78.534v195.451m0-195.451-158.956-78.533m158.956 78.533 158.96-78.533m-158.96 273.984 158.96-79.542V473.898m-158.96 273.984L954.414 668.34V473.898m0 0 158.956-78.197 158.96 78.197"
                className="path"
                style={{
                  strokeOpacity: 0.7,
                  strokeLinecap: "round",
                  strokeWidth: 3,
                  stroke: "#6ed04d",
                  fillOpacity: 0,
                }}
              />
            </svg>
          </div>
        </section>
      </header>
      <section className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="font-incognito text-3xl font-semibold tracking-tight">
            Gráfico de Contribuciones de código
          </h2>
        </div>
        <div>
          <ContributionGraph />
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <div className="mb-8">
          <h2 className="font-incognito text-3xl font-semibold tracking-tight">
            Proyectos
          </h2>
        </div>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.map((x, i) => (
            <article key={`project-${i}`}>
              <a href={`/project/${x.id}`} className="block">
                <img
                  src={x.data.heroImage}
                  alt=""
                  className="w-full h-auto aspect-video object-cover rounded-xl"
                />
              </a>
              <div className="flex justify-between items-start mt-4">
                <div>
                  <a href={`/project/${x.id}`} className="block">
                    <h3 className="text-xl font-semibold">{x.data.title}</h3>
                  </a>
                  <p className="text-neutral-500">{x.data.role}</p>
                </div>
                <div>
                  <Button
                    as="a"
                    href={`/project/${x.id}`}
                    size="sm"
                    variant="ghost"
                  >
                    Ver caso de estudio
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </main>
      </section>
    </Layout>
  );
}
