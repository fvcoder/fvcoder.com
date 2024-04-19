import { Button } from '@nextui-org/react';
import Link from 'next/link';

import { BackpackIcon } from '@/assets/icons/backpack';
import { PersonIcon } from '@/assets/icons/person';
import { BadgePill } from '@/components/badge.pill';
import { Footer } from '@/components/footer';
import { TimeLine } from '@/components/timeline';
import { EXPERIENCE } from '@/data/experience';
import { ContactButtons } from '@/features/core/components/contact.buttons';
import { getMetadata } from '@/features/core/utils/metadata';

export function generateMetadata() {
  return getMetadata({});
}

export default function Home() {
  return (
    <div className="relative min-h-[100vh]">
      <div
        className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 dark:bg-neutral-950
      			bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      			dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>

      <main className="w-full max-w-3xl px-4 mx-auto">
        <section className="py-44 pb-32" id="contacto">
          <img
            className="rounded-full size-12 mb-4"
            src="https://github.com/fvcoder.png"
            alt="fvcoder photo"
          />
          <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
            Hey, soy fvcoder{' '}
            <a
              href="https://linkedin.com/in/fvcoder"
              target="_blank"
              rel="noopener"
              className="flex justify-center items-center hover:scale-105 transition"
            >
              <BadgePill>Disponible para trabajar</BadgePill>
            </a>
          </h1>
          <h2 className="text-xl lg:text-2xl text-balance max-w-[700px] text-black dark:text-white">
            <span>{'Desarrollador independiente. '}</span>
            <span className="text-yellow-800 dark:text-yellow-200">
              {'Desarrollador FullStack y Educador. '}
            </span>
            <span className="text-red-800 dark:text-red-200">
              {'De La Paz, Bolivia. '}
            </span>
            <span className="text-sky-800 dark:text-sky-200">
              Especializado en la Experiencia de usuario.
            </span>
          </h2>

          <ContactButtons />
        </section>
        <section id="experiencia" className="pb-8">
          <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
            <BackpackIcon className="size-7" />
            Experiencia laboral
          </h2>
          <TimeLine timeline={EXPERIENCE.slice(0, 3)} />
          <Button as={Link} href="/experience">
            Ver más ...
          </Button>
        </section>
        <section id="sobre-mi">
          <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
            <PersonIcon className="size-7" />
            Sobre mi
          </h2>
          <article className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="[&>p]:mb-4 [&>p>strong]:text-yellow-600 [&>p>strong]:dark:text-yellow-400 [&>p>strong]:font-semibold text-pretty order-2 md:order-1">
              <p>
                Me llamo Fernando Ticona pero soy conocido por fvcoder. Empecé
                en la programación a causa de la música como hobby, tenía 17
                años.{' '}
                <strong>
                  Actualmente trabajo como desarrollador FullStack
                </strong>
                .
              </p>

              <p>
                Me centro en la solución de problemas con software,{' '}
                <strong>
                  automatizo procesos interconectando diferentes recursos,{' '}
                </strong>
                acelerando la productividad y aumentando la eficiencia.
              </p>
            </div>

            <img
              src="https://github.com/fvcoder.png"
              className="rounded-full size-64 order-1 md:order-2"
              alt="fvcoder photo"
            />
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
