"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import image1 from "@/public/images/image2342.webp"
import image2 from "@/public/images/image234223.webp"
import image3 from "@/public/images/image3455.webp"
import image4 from "@/public/images/image65452.webp"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

const designSolutions = [
    {
        id: 1,
        number: "01.",
        title: "Residential Design",
        description:
            "We Have Diverse Experience On Numerous Housing Types From Small Condominium Buildings, To Affordable And Luxury Single Family Homes. We Specialize In Contemporary And Modern Architecture Firm That Specializes In Good Design...",
        image: image1,
        readMore: "READ MORE",
    },
    {
        id: 2,
        number: "02.",
        title: "Office Design",
        description:
            "Professional office spaces designed for productivity and modern work environments. Our team creates functional layouts that enhance collaboration while maintaining aesthetic appeal.",
        image: image2,
        readMore: "READ MORE",
    },
    {
        id: 3,
        number: "03.",
        title: "Commercial Design",
        description:
            "Comprehensive commercial design solutions for retail, hospitality, and mixed-use developments. We focus on creating spaces that drive business success through thoughtful design.",
        image: image3,
        readMore: "READ MORE",
    },
]

export default function DesignSolutions() {
    const [hoveredId, setHoveredId] = useState(1)


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



    return (
        <section ref={pinSection} className="bg-[#264395] h-screen relative flex items-center rounded-t-[50px] text-white py-16 px-6 !z-40">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Design Solutions</h2>
                    {/* <p className="text-[#01b2eb] text-lg">From One Of The Top Civil Engineering Companies In Sharjah</p> */}
                </div>

                {/* Design Solutions List */}
                <div className="space-y-1">
                    {designSolutions.map((solution) => (
                        <div
                            key={solution.id}
                            className={cn(
                                "relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer border-b border-gray-700 last:border-b-0",
                                hoveredId === solution.id ? "bg-[#264395] py-8" : "py-6 hover:bg-gray-800/30",
                            )}
                            onMouseEnter={() => setHoveredId(solution.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="flex items-start gap-8">
                                {/* Number and Title */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-6 mb-4">
                                        <span className="text-2xl md:text-3xl font-bold text-[#01b2eb]">{solution.number}</span>
                                        <h3 className="text-2xl md:text-3xl font-bold">{solution.title}</h3>
                                    </div>

                                    {/* Expandable Content */}
                                    <div
                                        className={cn(
                                            "transition-all duration-500 ease-in-out overflow-hidden",
                                            hoveredId === solution.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                                        )}
                                    >
                                        <div className="flex flex-col md:flex-row gap-6 items-start">
                                            {/* Image */}
                                            <div className="relative w-full md:w-80 h-48 rounded-lg overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={solution.image || "/placeholder.svg"}
                                                    alt={solution.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Description */}
                                            <div className="flex-1">
                                                <p className="text-gray-300 leading-relaxed mb-4">{solution.description}</p>
                                                <button className="text-gray-400 text-sm font-medium hover:text-white transition-colors">
                                                    {solution.readMore}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
