import SomeText from "../components/SomeText"
import ContentFrame from "../components/ContentFrame"
export default function Services() {
  return (
    <>
    <main className="flex flex-col items-center min-h-screen gap-3">
    <SomeText
      title="EXO-Y4 LAB"
      description="Explore our services and projects."
    />
    <section className="w-full max-w-4xl p-4">
      <h2>Projects</h2>
      <div className="flex flex-col items-start">
        <ContentFrame
        projUrl={`https://altr-snt-1.netlify.app/`}
        projName={"Weather App"}
      />
      </div>
    </section>

    <section className="w-full max-w-4xl p-4">
      <h2>Experimental</h2>
      <div className="flex flex-col items-start">
         <ContentFrame
        projUrl={`https://altr-snt.netlify.app/`}
        projName={"Die Weintrauben "}
        />
      </div>
    </section>
    </main>
    </>
  )
}
