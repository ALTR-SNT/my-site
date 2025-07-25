import SomeText from "../components/SomeText"
import ContentFrame from "../components/ContentFrame"
export default function Projects() {
  return (
    <>
    <main className="flex flex-col items-center min-h-screen gap-3">
    <SomeText
      title="EXO-Y4 LAB"
      description="Explore my projects."
    />
    <section className="w-full max-w-4xl p-4">
      <h2>Live Projects</h2>
      <div className="grid grid-cols-3 gap-4">
         <ContentFrame
        projName="EuroPath"
        projUrl="https://altr-snt.netlify.app/"
        gitHubUrl="https://github.com/ALTR-SNT/Tour-Agent"
        /> 

        <ContentFrame
        projName="TintWave"
        projUrl="https://altr-snt-1.netlify.app/"
        gitHubUrl="https://github.com/ALTR-SNT/Weather-App"
      />
       
      </div>
    </section>
    </main>
    </>
  )
}
