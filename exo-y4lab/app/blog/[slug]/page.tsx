import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getPostBySlug, getAllPostSlugs } from '@/sanity/lib/client';

const dateFormatter = new Intl.DateTimeFormat('uk-UA', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.slug,
  }));
}
export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }
  const formattedDate =
    post.publishedAt && (typeof post.publishedAt === 'string' || typeof post.publishedAt === 'number' || post.publishedAt instanceof Date)
      ? dateFormatter.format(new Date(post.publishedAt))
      : null;
  const bodyWithoutDuplicateTitle = post.body.filter(
    (block) => !(block._type === 'block' && block.children.some((child
) => child.text === post.title))
  );

  if (!post.mainImage?.url) {
    return notFound();
  }
  if (!post.title) {
    return notFound();
  }
  if (!bodyWithoutDuplicateTitle.length) {
    return notFound();
  }


  return (
    <main className="mx-auto my-6 px-4 max-w-4xl rounded-3xl shadow-xl">
      <article className="py-10 md:py-16">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {post.title}
        </h1>

        {formattedDate && (
          <p className="text-center text-gray-400 text-sm mb-12">
            Опубліковано: {formattedDate}
          </p>
        )}

        {post.mainImage?.url && (
          <div className="relative mb-16 rounded-xl overflow-hidden">
            <Image
              src={post.mainImage.url}
              alt={post.title || 'Зображення поста'}
              width={1200}
              height={675}
              className="object-cover rounded-xl"
              priority
            />
          </div>
        )}

        <div className="prose prose-invert mx-auto max-w-prose text-gray-200">
          <PortableText value={bodyWithoutDuplicateTitle} />
        </div>
      </article>
    </main>
  );
}
