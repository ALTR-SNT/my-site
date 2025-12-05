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
    <form className = "flex flex-col h-100 w-90 items-center gap-4 border-1 border-gray-500 rounded-lg" onSubmit={handleSubmit}>
          <h3 className="text-2xl">Form</h3>
      <label htmlFor="email">
        Email Address:
      </label>
      <input className="border-0.5 h-15 border-cyan-300 rounded-md p-2"
        id="email"
        type="email" 
        name="email"
        placeholder="Enter your email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="email">
        Message:
      </label>
      <textarea className="border-0.5 h-15 border-cyan-300 rounded-md p-2"
        id="message"
        name="message"
        placeholder="Enter your message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
 <div className="flex flex-row items-center gap-2">  
      <button className = "bg-pink-900 h-10 w-30 text-white rounded-md p-2 hover:bg-cyan-500" type="submit" disabled={state.submitting}>
        Submit
      </button> 
    <Link href="https://t.me/EXO_Y4Bot" target="_blank" rel="noopener noreferrer">
    <FaTelegram size={40} />
    </Link>
</div>
    </form>
  );
}