import { prisma } from '@/features/core/lib/prisma.server';

export async function GET(): Promise<Response> {
  const projects = await prisma.project.findMany({
    select: {
      handle: true,
    },
    where: {
      state: 'published',
    },
  });

  return new Response(
    `https://www.fvcoder.com/project\n${projects.map(({ handle }) => `https://www.fvcoder.com/project/${handle}`).join('\n')}`,
    {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    },
  );
}
