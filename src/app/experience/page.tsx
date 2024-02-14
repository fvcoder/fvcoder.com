import { Metadata } from 'next';

import { BackpackIcon } from '@/assets/icons/backpack';
import { Footer } from '@/components/footer';
import { TimeLine } from '@/components/timeline';
import { EXPERIENCIE } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Experiencia laboral de Fernando Ticona @fvcoder',
  description:
    'Descubre la trayectoria profesional de Fernando Ticona, reconocido como @fvcoder. Explora la experiencia laboral de este talentoso individuo en nuestra página web.',
};

export default function ExperiencePage() {
  return (
    <div>
      <main className="w-full max-w-3xl px-4 mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
          <BackpackIcon className="size-7" />
          Experiencia laboral de fvcoder
        </h1>
        <TimeLine timeline={EXPERIENCIE} />
      </main>
      <Footer />
    </div>
  );
}
