import Image from "next/image"
export default function About() {
  return (
    <>
    <main className="flex flex-col items-center min-h-screen gap-3">
      <h1 className="text-4xl text-rose-500">About me</h1>
      <p className="text-1xl">And EXO-Y4</p>
      <section className="w-full max-w-4xl p-4">
        <h2 className = "text-rose-500">ALTR-SNT | Y.4.N </h2>
        <p className="w-100">
          I&apos;m a student with a keen interest in Full-stack development.<br/> 
          My journey is all about learning, growing, and sharpening my skills.
        </p>
      </section>
       <aside className="w-full max-w-4xl p-4 flex justify-end">
         <Image
      src="/me.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
    />
      </aside>
      <section className="w-full max-w-4xl p-4">
        <h2 className = "text-rose-500">EXO-Y4</h2>
        <p className="w-100">
          EXO-Y4 is my personal platform where I explore and experiment with new technologies, tools, and ideas. <br/>
          Think of it as a dedicated space for cutting-edge development and creativity in the world of coding.
        </p>
      </section>
       <aside className="w-full max-w-4xl p-4 flex justify-end">
         <Image
      src="/something.jpg"
      width={400}
      height={400}
      alt="Picture of the author"
    />
      </aside>
    </main>
    </>
  )
}
