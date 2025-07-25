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
    <section className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
    </section>
    </main>
    </>
  )
}
