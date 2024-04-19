import { prisma } from '@/features/core/lib/prisma.server';
import ProjectHome from '@/features/projects/page/home';

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
