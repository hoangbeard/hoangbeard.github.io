import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'
import { categorySlugs } from './data/categories'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(categorySlugs),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})

export const collections = { posts }
