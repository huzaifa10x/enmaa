"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ServicesSection() {
    const sectionRef = useRef(null)
    const cardsWrapperRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        const cardsWrapper = cardsWrapperRef.current
        const totalScroll = cardsWrapper.scrollWidth - section.offsetWidth // 👈 actual scroll length

        gsap.to(cardsWrapper, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=" + totalScroll, // 👈 exact length
                scrub: true,
                pin: true,
                anticipatePin: 1,
            },
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <section>
            <div ref={sectionRef} className="w-screen h-screen flex-col items-start justify-center bg-neutral-800 relative overflow-hidden z-20 flex ">
                <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight font-sans ml-10 mb-10 ">Our Services</div>
                {/* Wrapper for horizontal cards */}
                <div ref={cardsWrapperRef} className="flex gap-8 px-12">
                    {/* Service Cards */}
                    <div className="service-card w-[400px] h-[400px] bg-neutral-900 rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-xl font-semibold text-white mb-4">Engineering Services</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Feasibility studies</li>
                            <li>• Surveying</li>
                            <li>• Structural assessment</li>
                            <li>• Value engineering</li>
                            <li>• Technical specifications</li>
                            <li>• Bills of quantities</li>
                        </ul>
                    </div>

                    <div className="service-card w-[400px] h-[400px] bg-neutral-900 rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-xl font-semibold text-white mb-4">Design Services</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Data collection</li>
                            <li>• Concept Design</li>
                            <li>• Detailed Design</li>
                            <li>• Architectural Design</li>
                            <li>• Detailed Drawings</li>
                            <li>• Shop Drawings</li>
                        </ul>
                    </div>

                    <div className="service-card w-[400px] h-[400px] bg-neutral-900 rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-xl font-semibold text-white mb-4">Tendering Services</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Preparation of contracts</li>
                            <li>• Pre-qualification of tender</li>
                            <li>• Tender documents</li>
                            <li>• Tender analysis</li>
                            <li>• Tender advice</li>
                            <li>• Contract Award</li>
                        </ul>
                    </div>
                    <div className="service-card w-[400px] h-[400px] bg-neutral-900 rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-xl font-semibold text-white mb-4">Tendering Services</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Preparation of contracts</li>
                            <li>• Pre-qualification of tender</li>
                            <li>• Tender documents</li>
                            <li>• Tender analysis</li>
                            <li>• Tender advice</li>
                            <li>• Contract Award</li>
                        </ul>
                    </div>
                    <div className="service-card w-[400px] h-[400px] bg-neutral-900 rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-xl font-semibold text-white mb-4">Tendering Services</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Preparation of contracts</li>
                            <li>• Pre-qualification of tender</li>
                            <li>• Tender documents</li>
                            <li>• Tender analysis</li>
                            <li>• Tender advice</li>
                            <li>• Contract Award</li>
                        </ul>
                    </div>

                    <div className="service-card w-[400px] h-[400px] bg-neutral-900 rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-xl font-semibold text-white mb-4">Extra Services</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Custom solutions</li>
                            <li>• Support</li>
                            <li>• Consultancy</li>
                        </ul>
                    </div>
                </div>
                <button className="block mx-auto bg-neutral-700 rounded-2xl text-white mt-10 px-8 py-3">Save your precious time for finding a solution. <br /> <b>Contact us now</b></button>
            </div>
        </section>
    )
}
