'use client';
import { useState } from 'react'; 
import Link from 'next/link';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className='flex items-center justify-around p-4 h-15 w-full bg-gray-750 text-black relative'>


            <div className='flex items-center text-black z-10'> 
                <h1 className='text-2xl'>EXO-Y4 <span className='text-xs'>v.3</span></h1>
            </div>

           
            <div className='md:hidden z-10'> 
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='text-black focus:outline-none focus:ring-2 focus:ring-fuchsia-500'
                    aria-label="Toggle menu"
                >
                    <svg
                        className='w-8 h-8' 
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        ></path>
                    </svg>
                </button>
            </div>

            <nav className={`
                ${isMenuOpen ? 'block' : 'hidden'} 
                md:block 
                md:static 
                absolute top-0 left-0 w-full h-screen 
                md:h-auto md:w-auto 
                bg-white md:bg-transparent 
                flex flex-col md:flex-row 
                items-center justify-center md:justify-end 
                gap-8 md:gap-6 
                text-2xl md:text-lg 
                z-1 md:z-auto
            `}>
                <ul className='flex flex-col md:flex-row gap-8 md:gap-6'> 
                    <li><Link href="/" onClick={closeMenu} className='hover:text-rose-500'>Home</Link></li>
                    <li><Link href="/projects" onClick={closeMenu} className='hover:text-lime-500'>Projects</Link></li>
                    <li><Link href="/blog" onClick={closeMenu} className='hover:text-blue-500'>Blog</Link></li>
                    <li><Link href="/about" onClick={closeMenu} className='hover:text-yellow-500'>About</Link></li>
                    <li><Link href="/contact" onClick={closeMenu} className='hover:text-pink-500'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}