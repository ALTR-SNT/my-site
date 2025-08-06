import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import type { TypedObject } from '@portabletext/types';

interface BlogPost {
  mainImage?: {
    url: string;
    [key: string]: unknown;
  };
  title: string;
  body: TypedObject[];
  publishedAt: string;
  author?: {
    name: string;
  };
}

const query = groq`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    author->{
      name
    }
  }
`;

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: BlogPost = await client.fetch(query, { slug: params.slug });

  if (!post) {
    notFound();
  }

  return (
    <article>
      {post.mainImage && (
        <Image
          src={post.mainImage.url}
          alt={post.title}
          className="w-full h-auto mb-4"
          width={800}
          height={400}
          priority
        />
      )}
      <h1 className='text-3xl'>{post.title}</h1>
      {post.author && <p>By {post.author.name}</p>}
      <p className="text-sm text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
      <PortableText value={post.body} />
    </article>
  );
}