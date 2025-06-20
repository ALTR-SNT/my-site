import { getPost } from "@/lib/posts";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = await import("@/lib/posts").then((m) => m.getPosts());
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <article className="prose mx-auto p-4">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
