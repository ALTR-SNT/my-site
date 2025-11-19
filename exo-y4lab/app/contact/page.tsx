import ContactForm from '../components/ContactForm';
export default function Contact() {
  return (
   <>
    <section className="flex flex-col items-center gap-8">
      <h2 className='text-5xl'>Contact</h2>
      <p className='text-2xl'>Let&apos;s connect – drop me a message!</p>
      <ContactForm />    
    </section>
    </>
  )
}
