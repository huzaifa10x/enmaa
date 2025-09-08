"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function WelcomeSection() {
    const sectionRef = useRef(null)
    const headingRef = useRef(null)
    const contentRef = useRef(null)
    // const statsRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        const heading = headingRef.current
        const content = contentRef.current
        // const stats = statsRef.current

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
        })

        // Animate heading with improved timing
        gsap.fromTo(
            heading,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            },
        )

        // Animate content with slide-in effect
        gsap.fromTo(
            content,
            { opacity: 0, x: 100 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            },
        )

        // Animate stats with counter effect
        // gsap.fromTo(
        //     stats.children,
        //     { opacity: 0, y: 50, scale: 0.8 },
        //     {
        //         opacity: 1,
        //         y: 0,
        //         scale: 1,
        //         duration: 1,
        //         stagger: 0.3,
        //         ease: "back.out(1.7)",
        //         scrollTrigger: {
        //             trigger: stats,
        //             start: "top 85%",
        //             toggleActions: "play none none reverse",
        //         },
        //     },
        // )

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="min-h-screen bg-gray-50 relative overflow-hidden z-20 rounded-t-[40px]"
            style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                marginTop: "-20px",
            }}
        >

            <div className="container mx-auto px-12 py-20 h-full items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">
                    {/* Left side - Heading */}
                    <div ref={headingRef} className="flex flex-col justify-center">
                        <h1 className="text-5xl lg:text-6xl xl:text-5xl font-bold text-black leading-tight font-sans">
                            Welcome To
                            <br />
                            Enmaa Engineering
                            <br />
                            Consultants
                        </h1>
                    </div>

                    {/* Right side - Content */}
                    <div ref={contentRef} className="flex flex-col justify-center space-y-10">
                        <div className="space-y-8">
                            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                                Enmaa Engineering Consultants Was Established In 2015 By Experienced Group Of Engineers & Launched A
                                Quick & Deliberate, Move To Contribute In Building A Real Estate Market, Including Towers, Commercial
                                Buildings, Sheds, Villas, Factories & Schools.
                            </p>

                            <div className="flex items-center space-x-6">
                                <div className="h-px bg-gray-400 flex-1"></div>
                                <button className="text-sm text-gray-600 hover:text-black transition-colors duration-300 tracking-[0.2em] font-medium">
                                    READ TO LEARN
                                </button>
                                <div className="h-px bg-gray-400 flex-1"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom stats */}
                <div className="bottom-20 left-12 right-12">
                    <div className="grid grid-cols-3 gap-12">
                        <div className="text-center">
                            <div
                                className="text-7xl lg:text-8xl xl:text-9xl font-light text-transparent mb-4"
                                style={{ WebkitTextStroke: "2px #333", fontFamily: "system-ui" }}
                            >
                                10
                            </div>
                            <p className="text-xs lg:text-sm text-gray-600 tracking-[0.15em] font-medium">YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="text-center">
                            <div
                                className="text-7xl lg:text-8xl xl:text-9xl font-light text-transparent mb-4"
                                style={{ WebkitTextStroke: "2px #333", fontFamily: "system-ui" }}
                            >
                                17
                            </div>
                            <p className="text-xs lg:text-sm text-gray-600 tracking-[0.15em] font-medium">YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="text-center">
                            <div
                                className="text-7xl lg:text-8xl xl:text-9xl font-light text-transparent mb-4"
                                style={{ WebkitTextStroke: "2px #333", fontFamily: "system-ui" }}
                            >
                                55
                            </div>
                            <p className="text-xs lg:text-sm text-gray-600 tracking-[0.15em] font-medium">COMPLETED PROJECTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
