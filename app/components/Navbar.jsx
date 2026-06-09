"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { id: 1, path: "/", label: "Home" },
        { id: 2, path: "/about", label: "About" },
        { id: 3, path: "/work", label: "Work" },
        { id: 4, path: "/services", label: "Services" },
        { id: 5, path: "/contact", label: "Contact" },
    ]

    return (
        <header className='fixed top-0 left-0 w-full z-50'>
            <div className='flex items-center justify-between py-4 px-10'>
                <Link
                    href="/"
                    className='hover:scale-105 transition-transform text-[32px]'
                >
                    Sahid Tyres
                </Link>

                <nav className='lg:hidden'>
                    <button
                        onClick={() => setIsOpen(prev => !prev)} 
                        className='bg-black size-10 text-white flex items-center justify-center rounded-xl hover:bg-black/80 transition cursor-pointer'
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>

                    <ul className={`fixed top-16 w-full bg-stone-900 left-0 text-stone-50 h-90 flex items-center justify-center flex-col gap-6 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.path}
                                    className='block text-4xl hover:text-stone-300 transition'
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav className='hidden lg:flex gap-5 items-center'>
                    <ul className='flex gap-7 items-center'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.path}
                                    className='uppercase relative group transition'
                                >
                                    {item.label}
                                    <span className='absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300 ease-out' />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar