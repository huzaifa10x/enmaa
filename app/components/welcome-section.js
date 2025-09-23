"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function WelcomeSection() {
    const sectionRef = useRef(null)
    const countersRef = useRef([]) // counters ka ref array

    useEffect(() => {
        const section = sectionRef.current

        // pin section
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
        })

        // counter animation
        countersRef.current.forEach((el) => {
            const targetValue = parseInt(el.dataset.value, 10)

            gsap.fromTo(
                el,
                { innerText: 0 },
                {
                    innerText: targetValue,
                    duration: 5,
                    snap: { innerText: 1 },
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%", // jab section 70% viewport me aaye
                        once: true, // ek hi dafa chalega
                    },
                    onUpdate: function () {
                        el.innerText = Math.floor(el.innerText)
                    },
                }
            )
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="bg-gray-50 h-screen relative z-10 -mt-7 rounded-t-[50px]"
        >
            <div className="container mx-auto px-12 py-20 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">
                    {/* Left side - Heading */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-6xl xl:text-5xl font-bold text-[#264395] leading-tight font-sans">
                            Welcome To <br /> Enmaa Engineering <br /> Consultants
                        </h1>
                    </div>

                    {/* Right side - Content */}
                    <div className="flex flex-col justify-center space-y-10">
                        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                            Enmaa Engineering Consultants Was Established In 2015 By
                            Experienced Group Of Engineers & Launched A Quick & Deliberate,
                            Move To Contribute In Building A Real Estate Market, Including
                            Towers, Commercial Buildings, Sheds, Villas, Factories & Schools.
                        </p>

                        <div className="flex items-center space-x-6">
                            <div className="h-px bg-gray-400 flex-1"></div>
                            <button className="text-sm text-gray-600 hover:text-black transition-colors duration-300 tracking-[0.2em] font-medium">
                                READ TO LEARN
                            </button>
                            <div className="h-px bg-gray-400 flex-1"></div>
                        </div>

                        {/* Bottom stats */}
                        <div className="bottom-20 left-12 right-12 grid grid-cols-3 gap-12">
                            <div className="text-center">
                                <div
                                    ref={(el) => (countersRef.current[0] = el)}
                                    data-value="10"
                                    className="text-7xl lg:text-8xl xl:text-9xl font-light text-transparent mb-4"
                                    style={{
                                        WebkitTextStroke: "2px #264395",
                                        fontFamily: "system-ui",
                                    }}
                                >
                                    0
                                </div>
                                <p className="text-xs lg:text-sm text-[#264395] tracking-[0.15em] font-medium">
                                    YEARS OF EXPERIENCE
                                </p>
                            </div>
                            <div className="text-center">
                                <div
                                    ref={(el) => (countersRef.current[1] = el)}
                                    data-value="17"
                                    className="text-7xl lg:text-8xl xl:text-9xl font-light text-transparent mb-4"
                                    style={{
                                        WebkitTextStroke: "2px #264395",
                                        fontFamily: "system-ui",
                                    }}
                                >
                                    0
                                </div>
                                <p className="text-xs lg:text-sm text-[#264395] tracking-[0.15em] font-medium">
                                    YEARS OF EXPERIENCE
                                </p>
                            </div>
                            <div className="text-center">
                                <div
                                    ref={(el) => (countersRef.current[2] = el)}
                                    data-value="55"
                                    className="text-7xl lg:text-8xl xl:text-9xl font-light text-transparent mb-4"
                                    style={{
                                        WebkitTextStroke: "2px #264395",
                                        fontFamily: "system-ui",
                                    }}
                                >
                                    0
                                </div>
                                <p className="text-xs lg:text-sm text-[#264395] tracking-[0.15em] font-medium">
                                    COMPLETED PROJECTS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
