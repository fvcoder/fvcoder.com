import { prisma } from '@/features/core/lib/prisma.server';
import { ProjectEditPage } from '@/features/projects/page/project.edit';

export default async function NewEditProjectPage() {
  const skillList = await prisma.skills.findMany({
    select: {
      id: true,
      handle: true,
      name: true,
      icon: true,
      color: true,
    },
    orderBy: { authority: 'desc' },
  });

  return <ProjectEditPage skillList={skillList} />;
}
