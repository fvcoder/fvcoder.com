import { notFound } from 'next/navigation';

import { prisma } from '@/features/core/lib/prisma.server';
import { getMetadata } from '@/features/core/utils/metadata';
import { SkillDetail } from '@/features/projects/page/skill.detail';
import { PageProps } from '@/types/next.page';

export async function generateMetadata(props: PageProps) {
  const skill = await prisma.skills.findFirst({
    where: { handle: props.params.handle },
    select: {
      handle: true,
      name: true,
      icon: true,
      color: true,
      colorSelect: true,
    },
  });
  if (!skill) {
    return getMetadata({ title: '404 | Skill not found' });
  }

  return getMetadata({
    title: `Proyectos realizados con ${skill.name} por Fernando Ticona | fvcoder`,
    description: `Explora los impresionantes proyectos desarrollados por Fernando Ticona con ${skill.name}. ¡Sumérgete en su portafolio y sé inspirado por su habilidad para dar vida a la imaginación con ${skill.name}`,
  });
}

export default async function SkillExplorePage(props: PageProps) {
  const skill = await prisma.skills.findFirst({
    where: { handle: props.params.handle },
    select: {
      handle: true,
      name: true,
      icon: true,
      color: true,
      colorSelect: true,
      project: {
        select: {
          handle: true,
          thumbnail: true,
          name: true,
        },
        where: {
          state: 'published',
        },
        orderBy: {
          authority: 'desc',
        },
        take: 12,
      },
    },
  });
  if (!skill) {
    return notFound();
  }

  return <SkillDetail skill={skill} />;
}
