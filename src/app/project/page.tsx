import { prisma } from '@/features/core/lib/prisma.server';
import { getMetadata } from '@/features/core/utils/metadata';
import ProjectHome from '@/features/projects/page/home';
import { PageProps } from '@/types/next.page';

export function generateMetadata() {
  return getMetadata({
    title: 'Habilidades de Fernando Ticona | fvcoder',
    description:
      'Explora mis habilidades en fvcoder, en diferentes tecnologías y recursos como: JavaScript, TypeScript, React, Next.js, Tailwind',
  });
}

export default async function ProjectHomePage(props: PageProps) {
  const skills = await prisma.skills.findMany({
    select: {
      id: true,
      handle: true,
      name: true,
      icon: true,
      color: true,
    },
    orderBy: { authority: 'desc' },
  });

  const projects = await prisma.project.findMany({
    select: {
      handle: true,
      name: true,
      thumbnail: true,
      skills: true,
    },
    take: 12,
    skip: props.searchParams.page ? +props.searchParams.page * 12 : 0,
    orderBy: { authority: 'desc' },
  });

  const projectsCount = await prisma.project.count();

  const projectsPage = Math.ceil(projectsCount / 12);

  return (
    <ProjectHome
      skills={skills}
      projects={projects}
      projectsTotalPages={projectsPage}
    />
  );
}
