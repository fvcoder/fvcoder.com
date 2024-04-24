import z from 'zod';

export const createSkillSchema = z.object({
  name: z.string().min(5),
  handle: z.string().min(3),
  color: z.string(),
  icon: z.string().min(5),
  colorSelect: z.string(),
});

export type CreateSkillSchema = z.infer<typeof createSkillSchema>;
