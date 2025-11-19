import ContentFrame from "../components/ContentFrame"
export default function Projects() {
  return (
    <>
    <section className="flex flex-col items-center gap-3">
    <h2 className="text-5xl">Portfolio</h2>
    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         <ContentFrame
        projName="EuroPath"
        projUrl="https://europath.netlify.app"
        gitHubUrl="https://github.com/ALTR-SNT/EuroPath"
        /> 

        <ContentFrame
        projName="TintWave"
        projUrl="https://tintwave.netlify.app"
        gitHubUrl="https://github.com/ALTR-SNT/TintWave"
        />

        <ContentFrame
        projName="WizAllet"
        projUrl="https://wizallet.netlify.app"
        gitHubUrl="https://github.com/ALTR-SNT/WizAllet"
        />
    </div>
    </section>
    </>
  )
}
