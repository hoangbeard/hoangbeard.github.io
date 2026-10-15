import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { postUrl, publishedPosts } from '../posts'

export async function GET(context: APIContext) {
  const posts = await publishedPosts()
  return rss({
    title: 'HoangBeard',
    description: 'Tutorials, labs, tips and tools on DevSecOps, cloud security and AI security.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postUrl(post),
    })),
  })
}
