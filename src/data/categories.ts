export const categories = [
  {
    slug: 'articles',
    name: 'Articles',
    summary: 'Longer pieces on how security fits into building and running software.',
  },
  {
    slug: 'tutorials',
    name: 'Tutorials',
    summary: 'Step-by-step guides you can follow from start to finish.',
  },
  {
    slug: 'tips',
    name: 'Tips & Tricks',
    summary: 'Short, practical notes that save time in daily work.',
  },
  {
    slug: 'labs',
    name: 'Labs & POCs',
    summary: 'Hands-on experiments and proofs of concept, with the code to try them yourself.',
  },
  {
    slug: 'knowledge-base',
    name: 'Knowledge Base',
    summary: 'Checklists, runbooks and best practices to come back to.',
  },
  {
    slug: 'news',
    name: 'News',
    summary: 'Security news worth knowing about, with a short take on why it matters.',
  },
] as const

export type CategorySlug = (typeof categories)[number]['slug']
export const categorySlugs = categories.map(category => category.slug) as [CategorySlug, ...CategorySlug[]]
