import Link from "next/link"
export default function Home() {
  return (
<>
    <main className="flex flex-col items-center justify-center min-h-screen gap-3">
        <h1 className="text-4xl text-rose-500">Welcome to EXO-Y4</h1>
        <p className="text-1xl">Unlock the Future of Code with Limitless Creativity.</p>
        <Link
          href="/services"
          className="bg-rose-600 text-white w-32 h-12 rounded-md mt-4
            flex items-center justify-center
            transition-all duration-300 ease-in-out
           hover:bg-rose-500 hover:shadow-xl hover:shadow-rose-700/60">
          Get started
        </Link>
    </main>
</>
  )
}
