import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()),
	}),
});

const project = defineCollection({
	loader: glob({ base: './src/content/project', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		client: z.string(),
		role: z.string(),
		heroImage: z.string().optional(),
		description: z.string(),
		pubDate: z.coerce.date(),
	}),
})

export const collections = { blog, project };
