"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { gsap } from "gsap"
import image1 from "@/public/images/image65452.webp"
import image2 from "@/public/images/image3455.webp"
import image3 from "@/public/images/image2342.webp"
import Image from "next/image"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const slides = [
    {
        id: 1,
        title: "Meet & Agree",
        description: "We will be happy to have you in our office with a cup of coffee and to provide you complete assistance about your required work.",
        image: image1,
        buttonText: "Get Started",
    },
    {
        id: 2,
        title: "Idea & Concept",
        description: "Enmaa Engineering Consultants Was Established In 2015 By Experienced Group Of Engineers & Launched A Quick & Deliberate, Move To Contribute In Building A Real Estate Market, Including Towers, Commercial Buildings, Sheds, Villas, Factories & Schools.",
        image: image2,
        buttonText: "Try for Free",
    },
    {
        id: 3,
        title: "Design & Create",
        description: "Enmaa Engineering Consultants Was Established In 2015 By Experienced Group Of Engineers & Launched A Quick & Deliberate, Move To Contribute In Building A Real Estate Market, Including Towers, Commercial Buildings, Sheds, Villas, Factories & Schools.",
        image: image3,
        buttonText: "Learn More",
    },
    {
        id: 4,
        title: "Build & Install",
        description: "Enmaa Engineering Consultants Was Established In 2015 By Experienced Group Of Engineers & Launched A Quick & Deliberate, Move To Contribute In Building A Real Estate Market, Including Towers, Commercial Buildings, Sheds, Villas, Factories & Schools.",
        image: image3,
        buttonText: "Learn More",
    },
]

export default function OurProcess() {

    const pinSection = useRef(null)
    useEffect(() => {
        const section = pinSection.current

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false, // 👈 isko true rakho taki horizontal scroll aur ye section clash na kare
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])


    const [current, setCurrent] = useState(0)
    const contentRef = useRef(null)
    const imageRef = useRef(null)

    const goToSlide = (index, direction = 1) => {
        const newIndex = (index + slides.length) % slides.length

        // Animate content out
        gsap.fromTo(
            contentRef.current,
            { opacity: 0, x: direction === 1 ? 100 : -100 },
            { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" }
        )

        // Animate image
        gsap.fromTo(
            imageRef.current,
            { opacity: 0, x: direction === 1 ? -100 : 100 },
            { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" }
        )

        setCurrent(newIndex)
    }

    const nextSlide = () => goToSlide(current + 1, 1)
    const prevSlide = () => goToSlide(current - 1, -1)

    // autoplay
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [current])

    return (
        <div ref={pinSection} className="relative w-full h-screen overflow-hidden rounded-t-[50px] !z-50 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                {/* Left Content */}
                <div className="flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 text-left" ref={contentRef}>
                    <div className="mb-3">Our Process</div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        {slides[current].title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8">
                        {slides[current].description}
                    </p>
                    {/* <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full text-lg">
                        {slides[current].buttonText}
                    </Button> */}
                </div>

                {/* Right Image */}
                <div className="h-full w-full relative" ref={imageRef}>
                    <Image
                        src={slides[current].image}
                        alt={slides[current].title}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
            >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
            >
                <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index, index > current ? 1 : -1)}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${current === index ? "bg-gray-900 w-6" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
