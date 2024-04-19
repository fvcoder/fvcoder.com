import { prisma } from '@/features/core/lib/prisma.server';
import { getMetadata } from '@/features/core/utils/metadata';
import ProjectHome from '@/features/projects/page/home';

export function generateMetadata() {
  return getMetadata({
    title: 'Habilidades de Fernando Ticona | fvcoder',
    description:
      'Explora mis habilidades en fvcoder, en diferentes tecnologías y recursos como: JavaScript, TypeScript, React, Next.js, Tailwind',
  });
}

export default async function ProjectHomePage() {
  const skills = await prisma.skills.findMany({
    select: {
      handle: true,
      name: true,
      icon: true,
      color: true,
    },
    orderBy: { authority: 'desc' },
  });

  return <ProjectHome skills={skills} />;
}
