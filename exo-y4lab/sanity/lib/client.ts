// sanity/lib/client.ts
import { createClient } from 'next-sanity';
import type { Post } from '@/types';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // true = швидше, але без live оновлень
});

// Отримати пост за slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    slug,
    mainImage {
      asset -> {
        _id,
        url
      }
    },
    body
  }`;

  const post = await client.fetch(query, { slug });

  // Приводимо зображення до простішої структури
  if (post?.mainImage?.asset?.url) {
    post.mainImage = { url: post.mainImage.asset.url };
  }

  return post || null;
}

// Отримати всі slug-и
export async function getAllPostSlugs() {
  const slugs: string[] = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return slugs.map((slug) => ({ slug }));
}
