import { redirect } from 'next/navigation';

import { prisma } from '@/features/core/lib/prisma.server';
import { ProjectEditPage } from '@/features/projects/page/project.edit';
import { PageProps } from '@/types/next.page';

export default async function EditProjectPage(props: PageProps) {
  const id = props.searchParams.id;

  if (!id) {
    redirect('/project');
  }

  const project = await prisma.project.findFirst({
    where: {
      id,
    },
    include: {
      skills: true,
    },
  });

  if (!project) {
    redirect('/project');
  }

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

  return <ProjectEditPage skillList={skillList} project={project} />;
}
