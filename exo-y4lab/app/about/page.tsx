import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="flex flex-col items-center gap-7 py-8"> 
        <h2 className="text-5xl max-sm:text-3xl">About</h2>
        <p className="text-3xl max-sm:text-xl">Get to know more about me and EXO-Y4</p>

        <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">

          <div className="w-full md:w-1/2 flex flex-col items-start md:items-start text-center md:text-left">
            <h2 className="text-3xl mb-2">Y.4.N</h2>
            <p className="text-xl"> 
  I am a student interested in full-stack development.<br/>
  I became interested in the web in early 2023,
 but I didn&apos;t realise that the web was deeper than I thought, despite this... 
 The depth makes it more interesting. <br/>
 Moreover, I am interested in the very idea of a chain from the client to the server with a database. 
 With a certain base, I am exploring different stacks and different approaches, which is no less interesting. <br/>
 At the moment, I have chosen MERN\PERN stacks for myself. 
 But I am not limiting myself to this, testing Angular, Vue, Svelte or backend frameworks, 
 and I am interested in languages other than JS with TS.<br/>
 Everything will come in time.
            </p>
          </div>

          <aside className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/about1.jpg"
              width={400}
              height={400}
              alt="Picture of the author"
              className="rounded-lg shadow-lg" 
            />
          </aside>
        </div>

        <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">
       
        <aside className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src="/about2.jpg"
              width={400}
              height={400}
              alt="Picture of the author"
              className="rounded-lg shadow-lg"
            />
          </aside>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl mb-2">EXO-Y4</h2>
            <p className=" text-xl max-w-prose">
    EXO-Y4 is my personal website for my portfolio, blog, and experiments, as the platform itself is part of my portfolio. 
    The design of this website has its own unique feature, transitioning from minimalism to experimentation with gradients and neon. 
    However, the most important thing is the content posted here. 
    I publish posts about my own successes and plans, publish my projects, and have certain ambitions to make this something more cool and unusual.
    So if you are interested, I am glad to have you here and invite you to follow my posts.
            </p>
          </div>

        </div>
         <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl mb-2">My Skills</h2>
              <ul className=" text-xl list-disc list-inside">
                <li>HTML</li>
                <li>CSS && Tailwind</li>
                <li>Javascript && Typescript</li>
                <li>React && Next</li>
                <li>Node.js && Express</li>
                <li>MongoDB && Postgres</li>
                <li>Git && GitHub</li>
                <li>Coming soon</li>
              </ul>
          </div>

          <aside className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/about3.jpg"
              width={400}
              height={400}
              alt="Picture of the author"
              className="rounded-lg shadow-lg" 
            />
          </aside>
        </div>
      </section>
    </>
  );
}