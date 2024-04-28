import { notFound } from 'next/navigation';

import { prisma } from '@/features/core/lib/prisma.server';
import { ProjectViewPage } from '@/features/projects/page/project.view';
import { PageProps } from '@/types/next.page';

export default async function PreviewPageServer(props: PageProps) {
  try {
    if (!props.searchParams.id) {
      notFound();
    }

    const article = await prisma.project.findFirst({
      where: {
        id: props.searchParams.id,
      },
      include: {
        skills: true,
      },
    });

    if (!article) {
      notFound();
    }

    return <ProjectViewPage {...article} />;
  } catch {
    notFound();
  }
}
