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
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="text-center">
        {post.mainImage?.asset?.url && (
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <Image
                src={urlFor(post.mainImage).width(600).height(300).crop('center').url()}
                alt={post.title}
                width={600}
                height={300}
                className="rounded-2xl w-full h-auto"
                priority
              />
            </div>
          </div>
        )}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2">{post.title}</h1>
        {post.author && <p className='text-amber-400 mb-2 text-sm sm:text-base'>By {post.author.name}</p>}
        <p className="text-xs sm:text-sm text-gray-300 mb-6 sm:mb-8">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <div className="text-left prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none px-2 sm:px-0">
          <PortableText value={post.body} />
        </div>
      </div>
    </section>
  );
}