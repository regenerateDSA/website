import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const mailingList = defineCollection({
	// Load Markdown and MDX files in the `src/content/mailing-list/` directory.
	loader: glob({ base: './src/content/mailing-list', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const pointsOfUnity = defineCollection({
  loader: glob({ base: './src/content/points-of-unity', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    lastAmended: z.coerce.date(),
  }),
});


const top8 = defineCollection({
  loader: glob({ base: './src/content/top8', pattern: '**/*.md' }),
  schema: z.object({
    organization: z.string(),
	why: z.string(),
	logo: z.url(),
	color: z.string(),
  }),
});

export const collections = { mailingList, pointsOfUnity, top8 };
