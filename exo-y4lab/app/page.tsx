export default function Home() {
  const animationClass = "move-down";
  return (
<>
    <section className={`flex flex-col items-center gap-4 move-down ${animationClass}`}>
        <h1 className="text-5xl max-sm:text-xl">Welcome to Alternative Sanctum</h1>
        <p className="text-2xl max-sm:text-sm">Created by Y4N</p>
    </section>  
</>
  )
}
