import { urlFor } from "../../sanity/lib/image"
import { client } from "../../sanity/lib/client"
import Link from "next/link"
import Image from "next/image"


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
       <section className="flex flex-col items-center gap-3 absolute top-24 w-full">
        <h2 className="text-4xl max-sm:text-2xl">Blog</h2>
        <p className="text-2xl max-sm:text-xl">Latest articles and updates</p>
        <div className="flex flex-row items-center px-6 py-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="mb-8">
                <svg 
                  className="mx-auto h-30 w-30 text-gray-300" 
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
              <h3 className="text-lg font-medium text-fuchsia-500 mb-2">
                Articles will be available here soon
              </h3>
              <p className="text-gray-300 max-w-md mx-auto">
                I am preparing interesting content for you about the latest updates and news from EXO-Y4. Please check back later!
              </p>
            </div>
          ) : (
            <div className="w-full grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
              {posts.map((post) => (
                <div 
                  key={post._id} 
                  className=" overflow-hidden h-60 hover:shadow-lg backface-visible transition-shadow transform hover:scale-110 duration-300 ease-in-out"
                >
                  {post.mainImage && (
                    <div className="aspect-video relative">
                      <Image
                        src={urlFor(post.mainImage).width(900).height(500).url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover border rounded-xl"
                      />
                    </div>
                  )}
                  
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2 transition-colors">
                      <Link href={`/blog/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>
                    )}
                    
                    <div className="flex justify-between items-center text-sm">
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
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}