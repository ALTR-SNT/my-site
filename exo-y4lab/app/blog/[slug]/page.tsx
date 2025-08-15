import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PortableTextBlock } from '@portabletext/types';
import { urlFor } from '../../../sanity/lib/image'
interface BlogPost {
  mainImage?: {
    asset?: {
      url: string;
    };
  };
  title: string;
  body: PortableTextBlock[];
  publishedAt: string;
  author?: {
    name: string;
  };
}


type Props = {
  params: Promise<{ slug: string }>;
};


const query = groq`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    mainImage {
      asset->{
        url
      }
    },
    author->{
      name
    }
  }
`;

export async function generateStaticParams(): Promise<Props["params"][]> {
  const slugs = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  );
  return slugs;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post: BlogPost | null = await client.fetch(query, { slug });

  if (!post) return notFound();

  return (
    <article>
      {post.mainImage?.asset?.url && (
       <Image
      src={urlFor(post.mainImage).width(400).height(200).crop('center').url()}
      alt={post.title}
      width={400}
      height={200}
      className="mb-4 rounded-2xl"
      priority
        />
      )}
      <h1 className="text-3xl">{post.title}</h1>
      {post.author && <p className='text-amber-400'>By {post.author.name}</p>}
      <p className="text-sm text-gray-300">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <PortableText value={post.body} />
    </article>
  );
}
