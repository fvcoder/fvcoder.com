import { prisma } from '@/features/core/lib/prisma.server';
import { ProjectListPage } from '@/features/projects/page/project.list';

export default async function ProjectExplorerPageServer() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return <ProjectListPage projects={projects} />;
}
