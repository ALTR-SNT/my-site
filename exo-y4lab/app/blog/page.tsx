import SomeText from "../components/SomeText"
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Blog() {
  const posts = await getPosts();
  return (
    <>
      <main className="flex flex-col items-center min-h-screen gap-3">
        <SomeText
          title="EXO-Y4 Blog"
          description="Here you will find the latest updates and articles."
        />
        <section className="flex  w-100 h-100 ">
       <div className="">
         {posts.map((post) => (
           <div key={post.slug} className="p-4 border-b">
             <h2 className="text-xl font-bold">
               <Link href={`/blog/${post.slug}`}>{post.title}</Link>
             </h2>
           </div>
         ))}
       </div>
      </section>
    </main>
    </>
  )
}
