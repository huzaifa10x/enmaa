"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import image1 from "@/public/images/projects/1855-02.jpg";
import image2 from "@/public/images/p43ews.jpg";
import image3 from "@/public/images/projecs slideshow/431.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PillTitle from "@/app/components/pill-title";
import useGsapPin from "@/app/components/hooks/useGsapPin";

gsap.registerPlugin(ScrollTrigger);

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
];

export default function DesignSolutions() {
    const [hoveredId, setHoveredId] = useState(1);
    const sectionRef = useRef(null);
    useGsapPin(sectionRef)

    return (
        <section ref={sectionRef} className="bg-neutral-200 relative px-0 lg:h-screen no-scrollbar md:rounded-t-[50px] text-white py-16 !z-[80]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap md:justify-between items-start lg:gap-0 gap-4">
                    <PillTitle title={'Design Solutions'} />

                    <div className="">
                        <h2 className="text-3xl md:text-5xl text-black text-balance">
                            Description <br className="lg:block hidden" />
                            <span className="text-primary font-bold">
                                Architecture process
                            </span>
                            <br className="lg:block hidden" /> for exceptional results.
                        </h2>
                    </div>
                </div>

                <div className="space-y-1">
                    {designSolutions.map((solution) => (
                        <div
                            key={solution.id}
                            className={cn(
                                "relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer border-b border-white last:border-b-0",
                                hoveredId === solution.id
                                    ? "bg-neutral-200 py-8"
                                    : "py-6 hover:bg-gray-800/30"
                            )}
                            onMouseEnter={() => setHoveredId(solution.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="flex items-start gap-8">
                                <div className="flex-1">
                                    <div className="flex items-center gap-6 mb-4">
                                        <span className="text-2xl md:text-3xl font-bold text-[#01b2eb]">
                                            {solution.number}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl text-neutral-600 font-bold">
                                            {solution.title}
                                        </h3>
                                    </div>

                                    <div
                                        className={cn(
                                            "transition-all duration-500 ease-in-out overflow-hidden",
                                            hoveredId === solution.id
                                                ? "max-h-96 opacity-100"
                                                : "max-h-0 opacity-0"
                                        )}
                                    >
                                        <div className="flex flex-col md:flex-row gap-6 items-center">
                                            <div className="relative w-full md:w-80 h-48 rounded-lg overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={solution.image || "/placeholder.svg"}
                                                    alt={solution.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                                                />
                                            </div>

                                            <div className="flex-1">
                                                <p className="text-neutral-600 leading-relaxed mb-4">
                                                    {solution.description}
                                                </p>
                                                {/* <button className="text-gray-600 text-sm font-medium hover:text-neutral-400 transition-colors">
                                                    {solution.readMore}
                                                </button> */}
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
    );
}
