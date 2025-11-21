// Updated Navbar with Sidebar Drawer
'use client'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Logo from "@/public/images/Logo.webp"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    const [activeItem, setActiveItem] = useState("HOME")
    const [openSidebar, setOpenSidebar] = useState(false)

    const navItems = [
        { name: "HOME", href: "/" },
        {
            name: "Project inspiration",
            href: "/project-map",
            hasDropdown: false,
            items: ["Spa & Wellness", "Pool & Beach", "Activities", "Dining"],
        },
        { name: "Our Project", href: "/our-projects" },
        { name: "Our Services", href: "/our-services" },
        { name: "Contact Us", href: "/contact-us" },
    ]

    return (
        <div className="absolute top-0 left-0 right-0 z-50 flex lg:justify-center">
            <nav className="max-w-7xl min-w-[360px] flex items-center justify-between px-4 w-full py-6">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 relative">
                        <Link href={'/'}>
                            <Image src={Logo} height={100} width={100} alt="Logo" />
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative">
                            {item.hasDropdown ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className={`text-white hover:text-[#01b2eb] hover:bg-white/10 px-4 py-2 text-sm font-medium tracking-wide transition-colors ${activeItem === item.name ? "text-[#01b2eb]" : ""
                                                }`}
                                            onClick={() => setActiveItem(item.name)}
                                        >
                                            {item.name}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-black/90 backdrop-blur-sm border-white/20">
                                        {item.items?.map((subItem) => (
                                            <DropdownMenuItem
                                                key={subItem}
                                                className="text-white hover:text-[#01b2eb] hover:bg-white/10"
                                            >
                                                {subItem}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link href={item.href}>
                                    <Button
                                        variant="ghost"
                                        className={`text-white hover:text-[#01b2eb] hover:bg-white/10 px-4 py-2 text-sm font-medium tracking-wide transition-colors ${activeItem === item.name ? "text-[#01b2eb]" : ""
                                            }`}
                                        onClick={() => setActiveItem(item.name)}
                                    >
                                        {item.name}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                <a href="#bookNow">
                    <Button className="bg-gradient-to-r from-[#01b2eb] to-primary hover:bg-primary text-white font-semibold px-8 py-3 rounded-full text-sm tracking-wide duration-300 shadow-lg hover:shadow-xl">
                        BOOK NOW
                    </Button>
                </a>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/10"
                        onClick={() => setOpenSidebar(true)}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <div className="w-full h-0.5 bg-white"></div>
                            <div className="w-full h-0.5 bg-white"></div>
                            <div className="w-full h-0.5 bg-white"></div>
                        </div>
                    </Button>
                </div>
            </nav>

            {/* Sidebar Drawer */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${openSidebar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setOpenSidebar(false)}
            ></div>

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-black/95 border-r border-white/10 p-6 transition-transform duration-300 ${openSidebar ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center mb-8">
                    <Image src={Logo} width={50} height={50} alt="Logo" />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white"
                        onClick={() => setOpenSidebar(false)}
                    >
                        ✕
                    </Button>
                </div>

                <div className="flex flex-col space-y-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpenSidebar(false)}
                            className="text-white text-lg tracking-wide hover:text-[#01b2eb] transition"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <a href="#bookNow" onClick={() => setOpenSidebar(false)}>
                        <Button className="w-full bg-gradient-to-r from-[#01b2eb] to-primary text-white font-semibold py-3 rounded-full text-sm tracking-wide shadow-lg hover:shadow-xl">
                            BOOK NOW
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
