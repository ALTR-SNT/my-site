import { createClient } from 'next-sanity'
import type { Post } from '@/types';
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export async function getPostBySlug(slug: string): Promise<Post | null> {
  // Правильний GROQ-запит для отримання одного поста за його slug
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    body,
    mainImage {
      "url": asset->url
    }
  }`;

  const post = await client.fetch<Post>(query, { slug });
  
  return post;
}