// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { getPostBySlug } from '@/sanity/lib/client';
import type { Post } from '@/types';

// Додано для форматування дати
const dateFormatter = new Intl.DateTimeFormat('uk-UA', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post: Post | null = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post._createdAt ? dateFormatter.format(new Date(post._createdAt)) : null;

  // 💡 Логіка для видалення повторюваного заголовка
  const bodyWithoutDuplicateTitle = post.body.filter((block, index) => {
    // Перевіряємо, чи це перший блок і чи його текст відповідає заголовку
    if (index === 0 && block._type === 'block' && block.children?.[0]?.text?.trim() === post.title?.trim()) {
      return false; // Якщо так, не включаємо цей блок
    }
    return true; // Включаємо всі інші блоки
  });

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

        {post.mainImage && (
          <div className="relative mb-16 rounded-xl overflow-hidden">
            <Image
              src={post.mainImage.url}
              alt={post.title || 'Зображення поста'}
              width={200}
              height={100}
              className="object-cover rounded-xl"
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