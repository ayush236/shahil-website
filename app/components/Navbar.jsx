"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from "lucide-react"
import Image from 'next/image'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { 
            id: 1,
            path: "/services",
            label: "Services" 
        },
        { 
            id: 2,
            path: "/about",
            label: "About" 
        },
        { 
            id: 3,
            path: "/gallery",
            label: "Gallery" 
        },
        { 
            id: 4,
            path: "/contact",
            label: "Contact" 
        },
    ]

    return (
        <header className='fixed top-0 left-0 w-full z-50 backdrop-blur-[10px]'
            style={{backgroundColor : "white",
                borderBottom: "3px solid #c0001a"
            }}
        >
            <div className='flex items-center justify-between py-4 px-20'>
                <Link
                    href="/"
                    className='hover:scale-105 transition-transform'
                >
                    <Image src="/images/logo.jpeg"
                        alt="Logo"
                        width={100}
                        height={10}
                    />
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
                        {
                            navItems.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.path}
                                        className='uppercase text-black relative group transition-colors duration-200 font-bold'
                                        onMouseEnter={e => (e.currentTarget.style.color = "#c0001a")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "#000")}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))
                        }
                        <button className='uppercase relative group transition-colors font-bold cursor-pointer py-2 px-6 rounded-sm duration-200'
                            style={{
                                backgroundColor: "#c0001a",
                                
                            }}  
                            onMouseEnter={e => (e.currentTarget.style.background = "#e8001f")}
                            onMouseLeave={e => (e.currentTarget.style.background = "#c0001a")}
                        >
                            Book Now
                        </button>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar