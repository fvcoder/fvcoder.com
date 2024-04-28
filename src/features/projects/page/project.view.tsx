'use client';
import 'dayjs/locale/es-mx';

import { Icon } from '@iconify-icon/react';
import { Button, Image, Link } from '@nextui-org/react';
import { project, skills } from '@prisma/client';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

import { Footer } from '@/components/footer';
import { Container } from '@/features/core/components/container';
import { EditorRender } from '@/features/core/components/editor.render';
import { JsonParse } from '@/features/core/utils/json';

export interface ProjectViewPageProps extends project {
  skills: skills[];
}

export function ProjectViewPage(props: ProjectViewPageProps) {
  dayjs.extend(LocalizedFormat);
  const time = dayjs(props.updatedAt).locale('es-mx');

  return (
    <Container className="prose dark:prose-invert py-10" fullWidth>
      <header className="text-center pb-4">
        <span className="block mb-4">
          <time dateTime={time.format('YYYY-MM-DD')}>{time.format('LL')}</time>
        </span>
        <div>
          <h1>{props.name}</h1>
          <div>
            <Image
              src={props.thumbnail}
              alt={props.name}
              className="w-full h-full object-cover rounded-md aspect-video"
            />
          </div>
        </div>
      </header>
      <article>
        <EditorRender content={JsonParse(props.body)} />
        <div>
          <p>
            <strong>Construido con:</strong>
          </p>
          <div className="not-prose flex gap-2 flex-wrap pb-4">
            {props.skills.map((x, i) => (
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
