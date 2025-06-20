import ContactForm from '../components/ContactForm';
import SomeText from "../components/SomeText"
export default function Contact() {
  return (
   <>
    <main className="flex flex-col items-center min-h-screen gap-8">
      <SomeText
      title="Contact" 
      description="Let&apos;s connect – drop me a message!"
      />
      <ContactForm />    
    </main>
    </>
  )
}
