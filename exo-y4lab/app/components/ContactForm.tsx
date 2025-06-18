'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaTelegram } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeokzpba");
  if (state.succeeded) {
      return <p>Thanks!</p>;
  }
  return (
    <form className = "flex flex-col h-100 w-100 items-center gap-4 border-4 border-pink-400 rounded-lg" onSubmit={handleSubmit}>
          <h2 className="text-2xl text-rose-500">Form</h2>
      <label htmlFor="email">
        Email Address
      </label>
      <input className="border-2 border-pink-300 rounded-md p-2"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="email">
        Message
      </label>
      <textarea className="border-2 border-pink-300 rounded-md p-2"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
 <div className="flex flex-row items-center gap-2">  
      <button className = "bg-pink-500 h-10 w-30 text-white rounded-md p-2 hover:bg-pink-600" type="submit" disabled={state.submitting}>
        Submit
      </button> 
    <Link href="https://t.me/EXO_Y4Bot" target="_blank" rel="noopener noreferrer">
    <FaTelegram size={30} />
    </Link>
</div>
    </form>
  );
}