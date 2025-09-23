'use client'

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import image1 from "@/public/images/image2342.webp"
import image2 from "@/public/images/image234223.webp"
import image3 from "@/public/images/image3455.webp"
import image4 from "@/public/images/image65452.webp"
import { gsap } from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const projects = [
    {
        id: 1,
        title: "PROJECT 110 DXB",
        image: image1,
        caseDetailsLink: "#",
    },
    {
        id: 2,
        title: "PROJECT 109 SCHOOL",
        image: image2,
        caseDetailsLink: "#",
    },
    // {
    //     id: 3,
    //     title: "PROJECT 107 DXB",
    //     image: image3,
    //     caseDetailsLink: "#",
    // },
    // {
    //     id: 4,
    //     title: "PROJECT 106 DXB",
    //     image: image4,
    //     caseDetailsLink: "#",
    // },
]


export default function FeaturedProjects() {

    const sectionRef = useRef(null)
    useEffect(() => {
        const section = sectionRef.current

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])


    return (
        <section ref={sectionRef} className="h-screen flex items-center relative !z-30 -mt-10 bg-white rounded-t-[50px]">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#264395] mb-6 text-balance">Featured Projects</h1>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-pretty">
                        Explore A Collection Of High-Quality, Innovative Designs Crafted To Elevate Brands And Captivate Audiences.
                        Each Project Reflects Our Commitment To Creativity And Excellence.
                    </p>
                    <Button
                        variant="outline"
                        size="lg"
                        className="px-8 py-3 text-sm font-medium tracking-wide uppercase text-[#264395] border-[#264395] hover:bg-gray-50 bg-transparent"
                    >
                        VIEW PORTFOLIO
                    </Button>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="group overflow-hidden border-0 p-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <CardContent className="p-0">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="p-4 bg-white">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-semibold text-[#264395] tracking-wide">{project.title}</h3>
                                        <Button variant="ghost" size="sm" className="text-gray-600 bg-neutral-100 hover:text-gray-900 text-sm font-medium">
                                            Case Details
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
