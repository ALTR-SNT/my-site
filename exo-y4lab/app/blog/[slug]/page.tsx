import { getPost } from "@/lib/posts";


export async function generateStaticParams() {
  const posts = await import("@/lib/posts").then((m) => m.getPosts());
  return posts.map((post) => ({ slug: post.slug }));
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);
  return (
    <article className="prose mx-auto p-4">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
