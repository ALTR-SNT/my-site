import ContactForm from '../components/ContactForm';
import SomeText from "../components/SomeText"
export default function Contact() {
  return (
   <>
    <section className="flex flex-col items-center gap-8">
      <SomeText
      title="Contact" 
      description="Let&apos;s connect – drop me a message!"
      />
      <ContactForm />    
    </section>
    </>
  )
}
