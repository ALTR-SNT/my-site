import Image from "next/image";
import SomeText from "../components/SomeText";

export default function About() {
  return (
    <>
      <main className="flex flex-col items-center gap-4 py-8"> {/* Додав py-8 для вертикального відступу */}
        <SomeText
          title="About me"
          description="And EXO-Y4"
        />
        <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">

          <section className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-rose-500 text-2xl mb-2">ALTR-SNT | Y.4.N</h2>
            <p className="max-w-prose"> 
              I&apos;m a student with a keen interest in Full-stack development.<br/>
              My journey is all about learning, growing, and sharpening my skills.
            </p>
          </section>

          <aside className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/me.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              className="rounded-lg shadow-lg" 
            />
          </aside>
        </div>

        <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">
       
          <section className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-rose-500 text-2xl mb-2">EXO-Y4</h2>
            <p className="max-w-prose">
              EXO-Y4 is my personal platform where I explore and experiment with new technologies, tools, and ideas. <br/>
              Think of it as a dedicated space for cutting-edge development and creativity in the world of coding.
            </p>
          </section>

          <aside className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/something.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              className="rounded-lg shadow-lg"
            />
          </aside>

        </div>
      </main>
    </>
  );
}