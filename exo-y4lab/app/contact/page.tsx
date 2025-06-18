import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
   <>
    <main className="flex flex-col items-center min-h-screen gap-8">
      <h1 className="text-4xl text-rose-500">Contact</h1>
      <p className="text-lg text-gray-700">Let&apos;s connect – drop me a message!</p>
      <ContactForm />    
    </main>
    </>
  )
}
