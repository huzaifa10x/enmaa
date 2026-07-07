"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image" // Added for LCP optimization
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import image1 from "@/public/images/home-services/home1.jpg"
import image2 from "@/public/images/home-services/home2.jpg"
import image3 from "@/public/images/home-services/home3.jpg"

import mobImage1 from "@/public/images/home-services/home1-mob.jpg"
import mobImage2 from "@/public/images/home-services/home2-mob.jpg"
import mobImage3 from "@/public/images/home-services/home3-mob.jpg"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "../Navbar"
import useGsapPin from "./hooks/useGsapPin"
import useCounterAnimation from "./useCounterAnimation"

const slides = [
    {
        id: 1,
        title: "DISCOVER",
        subtitle: "DISCOVER CASE",
        background: image1,
        mobBg: mobImage1
    },
    {
        id: 2,
        title: "EXPLORE",
        subtitle: "EXPLORE CASE",
        background: image2,
        mobBg: mobImage2
    },
    {
        id: 3,
        title: "CREATE",
        subtitle: "CREATE CASE",
        background: image3,
        mobBg: mobImage3
    },
]

export default function DiscoverSlider() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0)
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    useGsapPin(sectionRef)

    // Initial load animation for Text
    useEffect(() => {
        gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
        gsap.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" },
        )
    }, [])

    const date = new Date();
    const currentYear = date.getFullYear()
    const yearExp = currentYear - 2015

    const counterV1Ref = useRef(null);
    const counterV2Ref = useRef(null);
    const counterV3Ref = useRef(null);

    // Using your custom counter hooks safely
    useCounterAnimation(counterV1Ref, 400);
    useCounterAnimation(counterV2Ref, 900);
    useCounterAnimation(counterV3Ref, 900);

    const counterStyle = {
        WebkitTextStroke: "2px #fff",
        fontFamily: "system-ui",
    };

    const nextSlide = () => {
        const next = (currentSlide + 1) % slides.length
        animateSlideChange(next)
    }

    const prevSlide = () => {
        const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        animateSlideChange(prev)
    }

    const animateSlideChange = (newIndex) => {
        gsap.to([titleRef.current, subtitleRef.current], {
            opacity: 0,
            y: -30,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
                setCurrentSlide(newIndex)
                gsap.fromTo(
                    [titleRef.current, subtitleRef.current],
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        stagger: 0.1,
                    },
                )
            },
        })
    }

    // Autoplay logic
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentSlide + 1) % slides.length
            animateSlideChange(nextIndex)
        }, 5000)

        return () => clearInterval(interval)
    }, [currentSlide])

    return (
        <div ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
            
            {/* LCP Fix: Desktop Images Preloaded dynamically */}
            <div className="hidden lg:block absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    index === currentSlide && (
                        <Image
                            key={slide.id}
                            src={slide.background}
                            alt={slide.title}
                            fill
                            priority={index === 0} // Highest priority for the first slide
                            className="object-cover object-center transition-opacity duration-1000"
                        />
                    )
                ))}
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            {/* LCP Fix: Mobile Images Preloaded dynamically */}
            <div className="lg:hidden absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    index === currentSlide && (
                        <Image
                            key={`mob-${slide.id}`}
                            src={slide.mobBg}
                            alt={slide.title}
                            fill
                            priority={index === 0}
                            className="object-cover object-center transition-opacity duration-1000"
                        />
                    )
                ))}
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            <Navbar />

            {/* Main Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-evenly z-20">
                <div></div>
                
                {/* Single H1 Wrapper */}
                <div className="text-center">
                    <p ref={titleRef} className="text-5xl md:text-6xl lg:text-9xl text-white font-black mb-4 tracking-tight">
                        {slides[currentSlide].title}
                    </p>
                    <p ref={subtitleRef} className="text-white/80 text-lg tracking-[0.3em] font-light">
                        {slides[currentSlide].subtitle}
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