"use client"
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { Menu, X } from "lucide-react"

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false)
    const MenuRef = useRef(null)
    const tlRef = useRef(null)

    const navItems = [
        {
            path: "/",
            label: "Home"
        },
        {
            path: "/about",
            label: "About"
        },
        {
            path: "/work",
            label: "Work"
        },
        {
            path: "/services",
            label: "Services"
        },
        {
            path: "/contact",
            label: "Contact"
        },
    ]

    useGSAP(() => {
        if (!MenuRef.current) return
        tlRef.current = gsap.timeline({ paused: true })
            .fromTo(
                MenuRef.current,
                { y: -20, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.4, ease: "power3.out" }
            )
            .from('.link', {
                y: 20,
                opacity: 0,
                stagger: 0.08,
                duration: 0.4,
                ease: "power3.out"
            }, "-=0.2")
    })

    const handleClick = () => {
        setIsOpen((prev) => {
            const next = !prev
            if (next) tlRef.current?.play()
            else tlRef.current?.reverse()
            return next
        })
    }

    const scrollToSection = (e, href) => {
        e.preventDefault()
        const sectionId = href.replace('/', '#').replace('#', '#')
        const target = document.querySelector(
            href.startsWith('#') ? href : `#${href.replace('/', '')}`
        )
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
    }
  return (
    <header className='fixed top-0 left-0 w-full backdrop-blur-sm z-50'>
            <div className='container flex items-center justify-between py-4'>
                <Link 
                    href="#home" 
                    className='hover:scale-105 transition-transform font-bebasNeue text-[32px]'
                    onClick={(e) => scrollToSection(e, '#home')}
                >
                    BT
                </Link>

                <nav className='lg:hidden'>
                    <button onClick={handleClick} className='bg-black size-10 text-white flex items-center justify-center rounded-xl hover:bg-black/80 transition'>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                    <ul ref={MenuRef} className='fixed top-full w-full bg-stone-900 left-0 text-stone-50 h-62.5 flex items-center justify-center flex-col opacity-0 invisible'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    className='link block text-4xl font-bebasNeue'
                                    onClick={(e) => { scrollToSection(e, item.href); handleClick() }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav className='hidden lg:flex items-center gap-5'>
                    <ul className='flex items-center gap-11'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className='uppercase relative group transition'
                                >
                                    {item.label}
                                    <span className='absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300 ease-out' />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Button  onClick={(e) => {
                        e.preventDefault()
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }} label={'Contact'} />
                </nav>
            </div>
        </header>
  )
}

export default Navbar