'use client';
import { Button, Card, CardBody, CardProps } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import { ClockIcon } from '@/assets/icons/clock';
import { Footer } from '@/components/footer';

function VideoLink(props: CardProps) {
  const image =
    'https://cdn.pixabay.com/photo/2023/12/27/22/23/horse-8472924_1280.jpg';
  const title = 'Titulo de la clase que es muy largo para que se vea bien';
  const duration = '3:21';

  return (
    <Card
      as="article"
      isPressable
      role="article"
      aria-description={`${title}`}
      {...props}
    >
      <CardBody className="flex flex-row items-start gap-2">
        <div className="w-1/4 flex-none self-center">
          <img
            src={image}
            alt={title}
            className="aspect-video rounded-md object-cover"
          />
        </div>
        <div>
          <h2 className="text-base md:text-xl line-clamp-1">{title}</h2>
          <p className="text-sm mt-1 flex items-center gap-0.5">
            <ClockIcon width={12} height={12} />
            {duration}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

export default function CourseDetailPage() {
  const router = useRouter();

  return (
    <div className="w-full max-w-3xl px-4 mx-auto">
      <header
        className="relative px-5 pt-10 md:pt-20 pb-10 md:aspect-video min-h-40 bg-cover bg-center rounded-xl flex flex-col items-start justify-center before:[content:''] before:bg-black/20 before:size-full before:absolute before:inset-0 before:rounded-xl"
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2023/11/24/18/46/forest-8410493_1280.jpg)`,
        }}
      >
        <h1 className="text-white text-xl md:text-3xl font-bold z-[1]">
          Curso de introducción a la programación
        </h1>
        <div className="mt-4 z-[1]">
          <Button variant="solid">Iniciar</Button>
        </div>
      </header>
      <main className="my-4 flex flex-col gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <VideoLink
            key={i}
            onClick={() => router.push(`/course/slug-course/lesson-id`)}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
