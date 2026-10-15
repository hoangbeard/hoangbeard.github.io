import { getCollection, type CollectionEntry } from 'astro:content'
import type { CategorySlug } from './data/categories'

export type Post = CollectionEntry<'posts'>

/** Published posts, newest first, optionally from one category. */
export async function publishedPosts(category?: CategorySlug): Promise<Post[]> {
  const posts = await getCollection(
    'posts',
    post => !post.data.draft && (category === undefined || post.data.category === category),
  )
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export function postUrl(post: Post): string {
  return `/blog/${post.data.category}/${post.id}/`
}
