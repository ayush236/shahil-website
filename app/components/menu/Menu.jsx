"use client"
import Link from 'next/link'
import React, { useRef, useState } from 'react'

const MenuLinks = [
    {
        path: "/",
        label: "Home"
    },
    {
        path: "/about",
        label: "About"
    },
    {
        path: "/Contact",
        label: "Contact"
    },
    {
        path: "/services",
        label: "Services"
    },
    {
        path: "/work",
        label: "Work"
    },
]

const Menu = () => {

    const containerRef = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <div className='menu-container' ref={containerRef}>
        <div className='menu-bar'>
            <div className='menu-logo'>
                <Link href="/">Sahid Tyres</Link>
            </div>
            <div className='menu-open'>
                {/* <p>Menu</p> */}
            </div>
            <div className='menu-overlay'>
                <div className='menu-overlay-bar'>
                    <div className='menu-logo'>
                        <Link href="/">Sahid Tyres</Link>
                    </div>
                    <div className='menu-close'>
                        <p>Close</p>
                    </div>
                </div>
                <div className='menu-close-icon'>
                    <p>&#x2715;</p>
                </div>
                <div className='menu-copy'>
                    <div className='menu-linkss'>
                        {
                            MenuLinks.map((link, index) => (
                                <div className='menu-link-item' key={index}>
                                    <div className='menu-link-item-holder'>
                                        <Link href={link.path}className='menu-link'></Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='menu-preview'></div>
            </div>
        </div>
    </div>
  )
}

export default Menu