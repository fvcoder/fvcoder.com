import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

import { Footer } from '@/components/footer';
import { Container } from '@/features/core/components/container';
import { EditorRender } from '@/features/core/components/editor.render';
import { prisma } from '@/features/core/lib/prisma.server';

export default async function ProjectDetailPage() {
  const skills = await prisma.skills.findMany({
    select: {
      handle: true,
      name: true,
      icon: true,
      color: true,
    },
    take: 5,
    orderBy: { authority: 'desc' },
  });

  return (
    <Container className="prose dark:prose-invert py-10" fullWidth>
      <header className="text-center pb-4">
        <span className="block mb-4">
          <time>17 de abril de 2024</time>
        </span>
        <div>
          <h1>
            Así es como aprendí a programar, mi plan de estudios + Cursos Gratis
          </h1>
          <div className="aspect-video bg-black rounded-md"></div>
        </div>
      </header>
      <article>
        <EditorRender
          content={{
            blocks: [
              { type: 'paragraph', id: '1', data: { text: 'Primer párrafo' } },
            ],
          }}
        />
        <EditorRender
          content={{
            blocks: [
              { type: 'paragraph', id: '2', data: { text: 'Primer párrafo' } },
            ],
          }}
        />
        <div className="">
          <p>
            <strong>Construido con:</strong>
          </p>
          <div className="not-prose flex gap-2 flex-wrap">
            {skills.map((x, i) => (
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
        </div>
      </article>
      <Footer />
    </Container>
  );
}
