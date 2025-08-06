import SomeText from "../components/SomeText"
import { urlFor } from "../../sanity/lib/image"
import { client } from "../../sanity/lib/client"
import Link from "next/link"
import Image from "next/image"

// Типи для постів
interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  mainImage?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  excerpt?: string
  author?: {
    name: string
  }
}

// Функція для отримання постів з Sanity
async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset,
      alt
    },
    excerpt,
    author-> {
      name
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function Blog() {
  const posts = await getPosts()

  return (
    <>
       <main className="flex flex-col items-center min-h-screen gap-3">
        <SomeText
          title="EXO-Y4 Blog"
          description="Here you will find the latest updates and articles."
        />
        <section className="flex flex-col items-center w-full max-w-7xl px-6 py-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="mb-8">
                <svg 
                  className="mx-auto h-24 w-24 text-gray-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-amber-500 mb-2">
                Articles will be available here soon
              </h3>
              <p className="text-gray-300 max-w-md mx-auto">
                I am preparing interesting content for you about the latest updates and news from EXO-Y4. Please check back later!
              </p>
            </div>
          ) : (
            // Змінено: Сітка тепер використовує 1 колонку на мобільних і 2 на великих екранах
            <div className="articles w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
              {posts.map((post) => (
                <article 
                  key={post._id} 
                  // Змінено: Видалив неіснуючі класи і додав адаптивні
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-black transform hover:scale-105 duration-300 ease-in-out"
                >
                  {post.mainImage && (
                    <div className="aspect-video relative">
                      <Image
                        src={urlFor(post.mainImage).width(900).height(500).url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>
                    )}
                    
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('uk-UA', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                      
                      {post.author && (
                        <span className="text-xs">by {post.author.name}</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  )
}