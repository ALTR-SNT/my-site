import Link from "next/link"
import SomeText from "./components/SomeText";
export default function Home() {
  return (
<>
    <main className="flex flex-col items-center justify-center  gap-4">
        <SomeText 
        title="Welcome to EXO-Y4" 
        description="Created by Y.4.N." />
        <Link
          href="/projects"
          className="bg-amber-600 text-white w-32 h-12 rounded-md mt-4
            flex items-center justify-center
            transition-all duration-300 ease-in-out
           hover:bg-amber-500 hover:shadow-xl hover:shadow-amber-700/60"> 
          Get started
        </Link>
    </main>
</>
  )
}
