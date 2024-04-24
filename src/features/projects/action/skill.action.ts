'use server';

import { skills } from '@prisma/client';

import { prisma } from '@/features/core/lib/prisma.server';
import { generateUid } from '@/features/core/utils/generateUid';

import { CreateSkillSchema } from '../schema/skill.schema';

export async function createSkillAction(
  data: CreateSkillSchema,
): Promise<{ msg: string; data: skills }> {
  const exist = await prisma.skills.findMany({
    select: {
      id: true,
    },
    where: {
      handle: data.handle,
    },
    take: 1,
  });

  if (exist.length > 0) {
    return Promise.reject({ msg: 'La habilidad ya existe' });
  }

  const skillId = generateUid('skill');

  await prisma.skills.create({
    data: {
      id: skillId,
      handle: data.handle,
      name: data.name,
      icon: data.icon,
      color: data.color,
      colorSelect: data.colorSelect,
      authority: 0,
    },
  });

  return Promise.resolve({
    msg: 'Habilidad creada',
    data: {
      ...data,
      authority: 0,
      id: skillId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
}

export async function editSkillAction(
  data: Partial<CreateSkillSchema>,
): Promise<{ msg: string; data: skills }> {
  const exist = await prisma.skills.findMany({
    where: {
      handle: data.handle,
    },
    take: 1,
  });

  if (exist.length === 0) {
    return Promise.reject({ msg: 'La habilidad no existe' });
  }

  await prisma.skills.update({
    data,
    where: {
      id: exist[0].id,
    },
  });

  return Promise.resolve({
    msg: 'Habilidad creada',
    data: Object.assign(exist[0], data),
  });
}
