import Image from "next/image";

export default function About() {
  return (
    <>
    <div className="z-0 max-h-70vh overflow-y-auto px-4 py-8 flex flex-col gap-6">
      <h2 className="text-5xl max-sm:text-3xl text-center">About me</h2>
     <section className="flex flex-col md:flex-row items-center justify-center gap-7 py-8 z-0">
     <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
      <h3 className="text-3xl mb-2">Y4N</h3>
      <p className="text-sm max-sm:text-xs max-w-prose"> 
  I am a student interested in full-stack development.<br/><br/>
  I became interested in the web in early 2023,
 but I didn&apos;t realise that the web was deeper than I thought, despite this... 
 The depth makes it more interesting. <br/>
 Moreover, I am interested in the very idea of a chain from the client to the server with a database. 
 With a certain base, I am exploring different stacks and different approaches, which is no less interesting. <br/> <br/>
 At the moment, I have chosen MERN\PERN stacks for myself. 
 But I am not limiting myself to this, testing Angular, Vue, Svelte or backend frameworks, 
 and I am interested in languages other than JS with TS.<br/>
 Everything will come in time.
            </p>
          </div>
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl mb-2">Alternative Sanctum</h2>
            <p className=" text-sm max-sm:text-xs max-w-prose">
    Alternative Sanctum (formerly EXO-Y4) is my personal website for my portfolio, blog, and experiments, as the platform itself is part of my portfolio. <br/><br/>
    The design of this website has its own unique feature, transitioning from minimalism to experimentation with gradients and neon. 
    However, the most important thing is the content posted here. 
    I publish posts about my own successes and plans, publish my projects, and have certain ambitions to make this something more cool and unusual.<br/><br/>
    So if you are interested, I am glad to have you here and invite you to follow my posts.
            </p>
          </div>
     </section>
     <section className="flex flex-col md:flex-row items-center justify-center gap-7 py-8 z-0">
     <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
      <h2 className="text-3xl mb-2">My Skills</h2>
              <ul className=" text-sm max-sm:text-xs list-none">
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
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <Image
              src="/about2.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              className="rounded-lg shadow-lg"
            />
      </div>
     </section> 
    </div>
     
    </>
  );
}

 <section className="flex flex-col items-center gap-7 py-8 z-0"> 
       

        <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">

         

          <aside className="w-full md:w-1/2 flex justify-center md:justify-end z-0">
            
          </aside>
        </div>

        <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">
       
        <aside className="w-full md:w-1/2 flex justify-center md:justify-start z-0">
            <Image
              src="/about2.jpg"
              width={150}
              height={150}
              alt="Picture of the author"
              className="rounded-lg shadow-lg"
            />
          </aside>

          

        </div>
         <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl mb-2">My Skills</h2>
              <ul className=" text-sm max-sm:text-xs list-disc list-inside">
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

          <aside className="w-full md:w-1/2 flex justify-center md:justify-end z-0">
            <Image
              src="/about3.jpg"
              width={150}
              height={150}
              alt="Picture of the author"
              className="rounded-lg shadow-lg" 
            />
          </aside>
        </div>
      </section>