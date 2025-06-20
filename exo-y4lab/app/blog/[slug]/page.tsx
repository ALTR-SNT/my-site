import { getPost } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await import("@/lib/posts").then((m) => m.getPosts());
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
 
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.contentHtml}</p>
    </div>
  )
}