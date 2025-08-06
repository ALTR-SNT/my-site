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

// Тип для props
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const query = groq`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    mainImage{
      asset->{
        url
      }
    },
    author->{
      name
    }
  }
`;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post: BlogPost = await client.fetch(query, { slug: params.slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-invert mx-auto">
      {post.mainImage?.url && (
        <Image
          src={post.mainImage.url}
          alt={post.title}
          className="w-full h-auto mb-4 rounded-xl"
          width={800}
          height={400}
          priority
        />
      )}
      <h1 className="text-3xl font-bold">{post.title}</h1>
      {post.author && <p className="text-gray-400">By {post.author.name}</p>}
      <p className="text-sm text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString('uk-UA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <PortableText value={post.body} />
    </article>
  );
}
