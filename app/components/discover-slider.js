"use client"

import { useEffect, useRef, useState, useTransition } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"

// Images standard import
import image1 from "@/public/images/home-services/home1.jpg"
import image2 from "@/public/images/home-services/home2.jpg"
import image3 from "@/public/images/home-services/home3.jpg"
import mobImage1 from "@/public/images/home-services/home1-mob.jpg"
import mobImage2 from "@/public/images/home-services/home2-mob.jpg"
import mobImage3 from "@/public/images/home-services/home3-mob.jpg"

import Navbar from "../Navbar"
import useGsapPin from "./hooks/useGsapPin"
import useCounterAnimation from "./useCounterAnimation"

const slides = [
    { id: 1, title: "DISCOVER", subtitle: "DISCOVER CASE", background: image1, mobBg: mobImage1 },
    { id: 2, title: "EXPLORE", subtitle: "EXPLORE CASE", background: image2, mobBg: mobImage2 },
    { id: 3, title: "CREATE", subtitle: "CREATE CASE", background: image3, mobBg: mobImage3 },
]

export default function DiscoverSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isMounted, setIsMounted] = useState(false)
    const [isPending, startTransition] = useTransition()
    
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    useGsapPin(sectionRef)

    const counterStyle = {
        WebkitTextStroke: "2px #fff",
        fontFamily: "system-ui",
    };

    // Experience Years Calculation
    const currentYear = new Date().getFullYear()
    const yearExp = currentYear - 2015

    // Dynamic counter references
    const counterV1Ref = useRef(null)
    const counterV2Ref = useRef(null)
    const counterV3Ref = useRef(null)

    useCounterAnimation(counterV1Ref, 400)
    useCounterAnimation(counterV2Ref, 900)
    useCounterAnimation(counterV3Ref, 900)

    // Hydration aur GSAP initialization safety check
    useEffect(() => {
        setIsMounted(true)
        const initGsap = async () => {
            const { ScrollTrigger } = await import("gsap/ScrollTrigger")
            gsap.registerPlugin(ScrollTrigger)
        }
        initGsap()
    }, [])

    const animateSlideChange = (newIndex) => {
        if (!titleRef.current || !subtitleRef.current) return

        gsap.to([titleRef.current, subtitleRef.current], {
            opacity: 0,
            y: -15,
            duration: 0.2,
            ease: "power1.in",
            onComplete: () => {
                startTransition(() => {
                    setCurrentSlide(newIndex)
                })
                gsap.fromTo(
                    [titleRef.current, subtitleRef.current],
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out", stagger: 0.05 }
                )
            },
        })
    }

    const nextSlide = () => animateSlideChange((currentSlide + 1) % slides.length)
    const prevSlide = () => animateSlideChange(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)

    // Autoplay Loop
    useEffect(() => {
        if (!isMounted) return
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(interval)
    }, [currentSlide, isMounted])

    // SSR Stable placeholders to prevent layout shifts
    const displayTitle = isMounted ? slides[currentSlide].title : slides[0].title
    const displaySubtitle = isMounted ? slides[currentSlide].subtitle : slides[0].subtitle

    return (
        <div ref={sectionRef} className="relative py-70 md:py-0 md:h-screen w-full overflow-hidden bg-black will-change-transform">
            
            {/* Desktop Wallpaper Section */}
            <div className="hidden lg:block absolute inset-0 z-0">
                {slides.map((slide, index) => {
                    // Speed Index Booster: Don't render non-active images until client is fully ready/mounted
                    if (!isMounted && index !== 0) return null;
                    return (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                index === currentSlide ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                            }`}
                        >
                            <Image
                                src={slide.background}
                                alt={slide.title}
                                fill
                                priority={index === 0} 
                                loading={index === 0 ? "eager" : "lazy"}
                                sizes="100vw"
                                quality={75} 
                                className="object-cover object-center transform-gpu"
                            />
                        </div>
                    )
                })}
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            {/* Mobile Wallpaper Section */}
            <div className="lg:hidden absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    // Server par pehla mobile banner hi pre-render hoga baki code hydration k bad ayenge
                    (!isMounted && index !== 0) ? null : (
                        <div
                            key={`mob-${slide.id}`}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                index === currentSlide ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                            }`}
                        >
                            <Image
                                src={slide.mobBg}
                                alt={slide.title}
                                fill
                                priority={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                                sizes="100vw"
                                quality={70}
                                className="object-cover object-center transform-gpu"
                            />
                        </div>
                    )
                ))}
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            <Navbar />

            {/* Content Area */}
            <div className="absolute inset-0 flex flex-col items-center justify-evenly z-20">
                <div></div>
                <div className="text-center min-h-[140px] flex flex-col justify-center">
                    <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-9xl text-white font-black mb-4 tracking-tight block transition-transform">
                        {displayTitle}
                    </h1>
                    <p ref={subtitleRef} className="text-white/80 text-lg tracking-[0.3em] font-light">
                        {displaySubtitle}
                    </p>
                </div>

                <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black via-black/55 to-transparent z-10"></div>

                <div className="lg:max-w-4xl w-full mx-auto z-20">
                    <div className="bottom-20 grid grid-cols-3">
                        {/* Counter 1 */}
                        <div className="relative md:left-0">
                            <div ref={counterV2Ref}
                                data-value='2750'
                                className="text-4xl lg:text-6xl xl:text-[60px] text-center font-light text-transparent lg:-mb-2 font-ps"
                                style={counterStyle}
                            >
                                0
                            </div>
                            <p className="text-xs text-white mt-5 text-center md:tracking-[0.15em] font-medium">
                                NUMBER OF <br /> CLIENTS
                            </p>
                        </div>

                        {/* Counter 2 */}
                        <div className="relative md:left-0">
                            <div ref={counterV1Ref}
                                data-value={yearExp}
                                className="text-4xl lg:text-6xl xl:text-[60px] text-center font-light text-transparent lg:-mb-2 font-ps"
                                style={counterStyle}
                            >
                                0
                            </div>
                            <p className="text-xs text-white mt-5 text-center md:tracking-[0.15em] font-medium">
                                YEARS OF <br /> EXPERIENCE
                            </p>
                        </div>

                        {/* Counter 3 */}
                        <div className="md:ml-10 relative md:left-0">
                            <div ref={counterV3Ref}
                                data-value="2963"
                                className="text-4xl lg:text-6xl xl:text-[60px] text-center font-light text-transparent lg:-mb-2 font-ps"
                                style={counterStyle}
                            >
                                0
                            </div>
                            <p className="text-xs text-white mt-5 text-center md:tracking-[0.15em] font-medium">
                                COMPLETED <br /> PROJECTS
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="bottom-16 left-0 right-0 z-30 max-w-7xl w-full mx-auto">
                    <div className="flex items-center justify-between px-8">
                        <div className="flex items-center space-x-8">
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
                            <Button variant="ghost" onClick={prevSlide} className="text-white text-sm tracking-wider font-light">
                                PREV
                            </Button>
                            <Button variant="ghost" onClick={nextSlide} className="text-white text-sm tracking-wider font-light">
                                NEXT
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}