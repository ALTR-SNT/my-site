'use client';
import Link from 'next/link';
export default function NavBar() {
    return (
        <header className='flex items-center justify-around p-4 h-15 w-full bg-gray-950 text-white '>
            <div className='flex items-center text-rose-500'>
            <h1 className='text-2xl'>EXO-Y4</h1>
            </div>
           <nav> 
                <ul className='flex flex-row gap-6 text-lg'> 
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )          
}