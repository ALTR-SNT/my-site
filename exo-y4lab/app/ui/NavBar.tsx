'use client';
import Link from 'next/link';
export default function NavBar() {
    return (
        <header className='flex items-center justify-around p-4 bg-gray-950 text-white '>
            <div className='flex items-center text-rose-500'>
            <svg enable-background="new 0 0 20 20" height="50" viewBox="0 0 20 20" width="50" xmlns="http://www.w3.org/2000/svg">
  <path d="m0 0h20v20h-20z" fill="none"/>
  <path d="m15.29 7.78-2.4 1.12-1.89-1.89v-.02l1.89-1.89 2.4 1.12c.25.12.55.01.66-.24.12-.25.01-.55-.24-.66l-2.72-1.27c-.19-.09-.41-.05-.56.1l-1.43 1.42v-.07c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1h-2.07c-.26-1.01-1.29-1.72-2.44-1.44-.7.17-1.28.76-1.44 1.47-.23 1.02.32 1.94 1.16 2.31l1.29 5.16h-.5c-.55 0-1 .45-1 1 0 .55.45 1 1 1h6c.55 0 1-.45 1-1 0-.55-.45-1-1-1h-1.14l-3.3-5.77c.17-.21.3-.46.37-.73h2.07v1c0 .28.22.5.5.5s.5-.22.5-.5v-.07l1.43 1.43c.15.15.37.19.56.1l2.72-1.27c.25-.12.36-.41.24-.66-.11-.26-.41-.37-.66-.25zm-9.29.22c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#ff2d55"/>
            </svg>
            <h1>EXO-Y4</h1>
            </div>
           <nav> 
                <ul className='flex flex-row gap-6 text-lg'> 
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )          
}