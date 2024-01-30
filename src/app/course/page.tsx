'use client';
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import { Footer } from '@/components/footer';

export default function CourseListPage() {
  const router = useRouter();

  return (
    <div className="w-full max-w-3xl px-4 mx-auto">
      <header className="px-5 pt-10 md:pt-20 pb-10 min-h-40 bg-gradient-to-tr from-blue-500 to-sky-400 rounded-xl flex flex-col items-start md:items-center justify-center">
        <h1 className="text-white text-3xl font-bold">
          Cursos de Programacion Web
        </h1>
        <p className="text-zinc-100 mt-2">
          Aprende a programar, o refuerza tu conocimiento
        </p>
        <div className="mt-4">
          <Button variant="solid">Explorar</Button>
        </div>
      </header>
      <main className="mb-4">
        <section className="w-full my-4 flex items-center gap-2 flex-wrap">
          <Button size="sm">Html</Button>
          <Button size="sm">Css</Button>
          <Button size="sm">JavaScript</Button>
          <Button size="sm">SEO</Button>
          <Button size="sm">Git</Button>
          <Button size="sm">Ux/Ui</Button>
        </section>
        <section className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <Card
              shadow="sm"
              key={i}
              isPressable
              onPress={() => {
                router.push('/course/slug-course');
              }}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={'post'}
                  className="w-full object-cover h-[140px]"
                  src="https://nextui.org/images/fruit-8.jpeg"
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b className="line-clamp-1">Titulo del curso</b>
              </CardFooter>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
