'use client';
import { Icon } from '@iconify-icon/react';
import { Button, Card, CardBody, Image, Pagination } from '@nextui-org/react';
import { project, skills } from '@prisma/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Footer } from '@/components/footer';
import { ContactButtons } from '@/features/core/components/contact.buttons';
import { Container } from '@/features/core/components/container';

interface ProjectHomeProps {
  projects: Array<
    Pick<project, 'handle' | 'name' | 'thumbnail'> & { skills: skills[] }
  >;
  projectsTotalPages: number;
}

export default function ProjectHome(props: ProjectHomeProps) {
  const router = useRouter();

  return (
    <Container>
      <header className="py-10 text-center">
        <div className="mb-3">
          <a
            href="https://github.com/fvcoder"
            className="inline-flex pl-1 pr-3 py-1 transition rounded-full gap-1.5 items-center cursor-pointer border border-neutral-400 bg-neutral-100 text-neutral-500  hover:bg-neutral-200 active:bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300  dark:hover:bg-neutral-800 dark:active:bg-neutral-700"
          >
            <Image
              src="https://github.com/fvcoder.png"
              alt="fvcoder"
              className="rounded-full w-8 h-8"
            />
            <span>fvcoder</span>
          </a>
        </div>
        <h1 className="text-balance font-semibold text-5xl leading-snug">
          Proyectos de
          <br />
          Fernando Ticona
        </h1>
        <div>
          <ContactButtons />
        </div>
      </header>
      <main>
        <section className="flex items-center gap-2 w-full">
          <div className="relative min-w-0 flex-1 flex gap-2 overflow-x-hidden flex-wrap-reverse	 justify-center">
            {props.projects
              .map((x) => x.skills)
              .flat()
              .map((x, i) => (
                <Button
                  as={Link}
                  href={`/skill/${x.handle}`}
                  size="sm"
                  variant="bordered"
                  className="flex rounded-full pl-2"
                  style={{
                    color: x.color,
                    borderColor: x.color,
                    background: 'transparent',
                  }}
                  startContent={<Icon icon={x.icon} width={18} height={18} />}
                  key={`skill-${x.handle}-${i}`}
                >
                  {x.name}
                </Button>
              ))}
          </div>
        </section>
        <section className="mt-10 mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {props.projects.map((x, i) => (
            <Card
              shadow="sm"
              key={`project-${i}`}
              isPressable
              onPress={() => router.push(`/project/${x.handle}`)}
            >
              <Image src={x.thumbnail} />
              <CardBody>
                <h3>{x.name}</h3>
              </CardBody>
            </Card>
          ))}
        </section>
        <div className="flex justify-center mb-10">
          <Pagination
            total={props.projectsTotalPages}
            initialPage={1}
            onChange={(page) => {
              router.push(`/project?page=${page - 1}`);
            }}
          />
        </div>
      </main>
      <Footer />
    </Container>
  );
}
