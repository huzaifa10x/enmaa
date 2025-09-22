"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, Plus } from "lucide-react"
// import image1 from "@/public/images/imgi_24_slide01.webp"
import image2 from "@/public/images/imgi_25_slide02.webp"
import image3 from "@/public/images/image.webp"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Logo from "@/public/images/Logo.webp"
import { ScrollTrigger } from "gsap/ScrollTrigger"


const slides = [
    {
        id: 1,
        title: "DISCOVER",
        subtitle: "DISCOVER CASE",
        background: image3,
    },
    {
        id: 2,
        title: "EXPLORE",
        subtitle: "EXPLORE CASE",
        background: image2,
    },
    {
        id: 3,
        title: "CREATE",
        subtitle: "CREATE CASE",
        background: image3,
    },
]

gsap.registerPlugin(ScrollTrigger)


export default function DiscoverSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const [activeItem, setActiveItem] = useState("HOME")

    useEffect(() => {
        const section = sliderRef.current

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top", // jab agla section top touch kare
            pin: true,
            pinSpacing: false, // extra space na chhode → agla section overlap karega
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])


    useEffect(() => {
        // Initial animation
        gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
        gsap.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" },
        )
    }, [])

    const nextSlide = () => {
        const next = (currentSlide + 1) % slides.length
        animateSlideChange(next)
    }

    const prevSlide = () => {
        const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        animateSlideChange(prev)
    }

    const goToSlide = (index) => {
        if (index !== currentSlide) {
            animateSlideChange(index)
        }
    }

    const animateSlideChange = (newIndex) => {
        // Animate out current content
        gsap.to([titleRef.current, subtitleRef.current], {
            opacity: 0,
            y: -30,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                setCurrentSlide(newIndex)
                // Animate in new content
                gsap.fromTo(
                    [titleRef.current, subtitleRef.current],
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.1 },
                )
            },
        })
    }

    const navItems = [
        { name: "HOME", href: "/" },
        { name: "ABOUT", href: "/about" },
        { name: "ROOMS", href: "/rooms" },
        {
            name: "RECREATION",
            href: "/recreation",
            hasDropdown: true,
            items: ["Spa & Wellness", "Pool & Beach", "Activities", "Dining"],
        },
        {
            name: "RECONNECTION",
            href: "/reconnection",
            hasDropdown: true,
            items: ["Events", "Meetings", "Weddings", "Conferences"],
        },
        {
            name: "QUICK LINKS",
            href: "/quick-links",
            hasDropdown: true,
            items: ["Contact", "Gallery", "Reviews", "Location"],
        },
        {
            name: "ENGLISH",
            href: "#",
            hasDropdown: true,
            items: ["English", "Español", "Français", "Deutsch"],
        },
    ]

    return (
        <div ref={sliderRef} className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out"
                style={{ backgroundImage: `url(${slides[currentSlide].background.src})` }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="absolute top-0 left-0 right-0 z-50 flex lg:justify-center">
                <nav className="flex items-center justify-between px-4 w-full py-6">
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
                                            <Button
                                                variant="ghost"
                                                className={`text-white hover:text-yellow-400 hover:bg-white/10 px-4 py-2 text-sm font-medium tracking-wide transition-colors ${activeItem === item.name ? "text-yellow-400" : ""
                                                    }`}
                                                onClick={() => setActiveItem(item.name)}
                                            >
                                                {item.name}
                                                <ChevronDown className="ml-1 h-3 w-3" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="bg-black/90 backdrop-blur-sm border-white/20">
                                            {item.items?.map((subItem) => (
                                                <DropdownMenuItem key={subItem} className="text-white hover:text-yellow-400 hover:bg-white/10">
                                                    {subItem}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <Button
                                        variant="ghost"
                                        className={`text-white hover:text-yellow-400 hover:bg-white/10 px-4 py-2 text-sm font-medium tracking-wide transition-colors ${activeItem === item.name ? "text-yellow-400" : ""
                                            }`}
                                        onClick={() => setActiveItem(item.name)}
                                    >
                                        {item.name}
                                    </Button>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Book Now Button */}
                    <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-amber-700 text-black font-semibold px-8 py-3 rounded-full text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl">
                        BOOK NOW
                    </Button>

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

            {/* Main Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center">
                    <h1 ref={titleRef} className="text-5xl md:text-9xl font-black text-white mb-4 tracking-tight">
                        {slides[currentSlide].title}
                    </h1>
                    <p ref={subtitleRef} className="text-white/80 text-lg tracking-[0.3em] font-light">
                        {slides[currentSlide].subtitle}
                    </p>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-8 left-0 right-0 z-20">
                <div className="flex items-center justify-between px-8">
                    {/* Slide Indicators */}
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-4">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white" : "bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="flex items-center space-x-4 text-white/60 text-sm">
                            <span>{String(currentSlide + 1).padStart(2, "0")}</span>
                            <div className="w-24 h-px bg-white/20 relative">
                                <div
                                    className="absolute left-0 top-0 h-full bg-white transition-all duration-500 ease-out"
                                    style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                                />
                            </div>
                            <span>{String(slides.length).padStart(2, "0")}</span>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center space-x-6">
                        <Button
                            variant="ghost"
                            onClick={prevSlide}
                            className="text-white hover:bg-white/10 text-sm tracking-wider font-light"
                        >
                            PREV
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={nextSlide}
                            className="text-white hover:bg-white/10 text-sm tracking-wider font-light"
                        >
                            NEXT
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
