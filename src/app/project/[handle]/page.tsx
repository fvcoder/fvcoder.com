import { notFound } from 'next/navigation';

import { prisma } from '@/features/core/lib/prisma.server';
import { getMetadata } from '@/features/core/utils/metadata';
import { ProjectViewPage } from '@/features/projects/page/project.view';
import { PageProps } from '@/types/next.page';

export async function generateMetadata({ params }: PageProps) {
  try {
    const article = await prisma.project.findFirst({
      select: {
        name: true,
        description: true,
        thumbnail: true,
        handle: true,
      },
      where: {
        handle: params.handle,
        state: 'published',
      },
    });

    if (!article) {
      return getMetadata({ title: '404 | Project not found' });
    }

    return getMetadata({
      title: `${article.name} | Proyecto de Fernando Ticona | fvcoder`,
      alternates: {
        canonical: `/project/${article.handle}`,
      },
      description: article.description,
      openGraph: {
        images: article.thumbnail,
      },
      twitter: {
        images: article.thumbnail,
      },
    });
  } catch {
    return getMetadata({ title: '404 | Project not found' });
  }
}

export default async function ProjectPageServer(props: PageProps) {
  try {
    if (!props.params.handle) {
      notFound();
    }

    const article = await prisma.project.findFirst({
      where: {
        handle: props.params.handle,
        state: 'published',
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
