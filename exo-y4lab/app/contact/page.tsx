import ContactForm from '../components/ContactForm';
export default function Contact() {
  return (
   <>
    <section className="flex flex-col items-center gap-8 z-0 mt-10 mb-20">
      <h2 className='text-5xl max-sm:text-3xl'>Contact</h2>
      <p className='text-2xl max-sm:text-xl'>Let&apos;s connect – drop me a message!</p>
      <ContactForm />    
    </section>
    </>
  )
}
