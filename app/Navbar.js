import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import Logo from "@/public/images/Logo.webp"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {

    const [activeItem, setActiveItem] = useState("HOME")

    const navItems = [
        { name: "HOME", href: "/" },
        { name: "ABOUT", href: "/" },
        {
            name: "Project Map",
            href: "/",
            hasDropdown: true,
            items: ["Spa & Wellness", "Pool & Beach", "Activities", "Dining"],
        },
        {
            name: "Our Project", href: "/our-projects"
        },
        {
            name: "Our Services",
            href: "#",
            hasDropdown: true,
            items: ["English", "Español", "Français", "Deutsch"],
        },
    ]

    return (
        <div className="absolute top-0 left-0 right-0 z-50 flex lg:justify-center">
            <nav className="max-w-7xl flex items-center justify-between px-4 w-full py-6">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 relative">
                        <Image
                            src={Logo}
                            height={100}
                            width={100}
                            alt="Logo"
                        />
                    </div>
                </div>

                {/* Navigation Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative">
                            {item.hasDropdown ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost"
                                            className={`text-white hover:text-[#01b2eb] hover:bg-white/10 px-4 py-2 text-sm font-medium tracking-wide transition-colors ${activeItem === item.name ? "text-[#01b2eb]" : ""
                                                }`}
                                            onClick={() => setActiveItem(item.name)}
                                        >
                                            {item.name}
                                            {/* <ChevronDown className="ml-1 h-3 w-3" /> */}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    {/* <DropdownMenuContent className="bg-black/90 backdrop-blur-sm border-white/20">
                                        {item.items?.map((subItem) => (
                                            <DropdownMenuItem key={subItem} className="text-white hover:text-[#01b2eb] hover:bg-white/10">
                                                {subItem}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent> */}
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
                                </Link >
                            )}
                        </div>
                    ))}
                </div>

                {/* Book Now Button */}

                <a href="#bookNow" >
                    <Button className="bg-gradient-to-r from-[#01b2eb] to-primary hover:bg-primary text-white font-semibold px-8 py-3 rounded-full text-sm tracking-wide duration-300 shadow-lg hover:shadow-xl">
                        BOOK NOW
                    </Button>
                </a>

                {/* Mobile Menu Button (for smaller screens) */}
                <div className="lg:hidden">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <div className="w-full h-0.5 bg-white"></div>
                            <div className="w-full h-0.5 bg-white"></div>
                            <div className="w-full h-0.5 bg-white"></div>
                        </div>
                    </Button>
                </div>
            </nav>
        </div>
    )
}