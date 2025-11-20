export default function Home() {
  const animationClass = "move-down";
  return (
<>
    <section className={`flex flex-col items-center gap-4 move-down ${animationClass}`}>
        <h1 className="text-7xl max-sm:text-3xl">Welcome to EXO-Y4</h1>
        <p className="text-3xl max-sm:text-xl">Created by Y.4.N.</p>
    </section>  
</>
  )
}
