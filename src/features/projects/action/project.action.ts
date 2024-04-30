/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { faker } from '@faker-js/faker/locale/es_MX';
import { project } from '@prisma/client';

import { prisma } from '@/features/core/lib/prisma.server';
import { generateUid } from '@/features/core/utils/generateUid';

export async function createProjectAction(): Promise<project> {
  const id = generateUid('project');

  return await prisma.project.create({
    data: {
      id,
      handle: id,
      name: faker.animal.bird(),
      description: '',
      thumbnail: 'https://placehold.co/1200x628',
      body: JSON.stringify({ blocks: [] }),
      state: 'draft',
    },
  });
}

export async function editProjectAction(
  id: string,
  data: Partial<any>,
): Promise<project> {
  return await prisma.project.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteProjectAction(id: string): Promise<project> {
  return await prisma.project.delete({
    where: {
      id,
    },
  });
}
