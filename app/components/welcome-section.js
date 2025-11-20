"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import buildingProp from "@/public/images/building-prop.webp"
import buildingProp2 from "@/public/images/building-prop2.webp"

gsap.registerPlugin(ScrollTrigger)

export default function WelcomeSection() {
    const sectionRef = useRef(null)
    const countersRef = useRef([]) // counters ka ref array

    useEffect(() => {
        const section = sectionRef.current

        // pin sectione
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            onEnter: () => {
                gsap.to(section, {
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    duration: 0.3,
                    ease: "power2.out"
                })
            },
            onLeaveBack: () => {
                gsap.to(section, {
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    duration: 0.3,
                    ease: "power2.out"
                })
            }
        })

        // counter animation
        countersRef.current.forEach((el) => {
            const targetValue = parseInt(el.dataset.value, 10)

            // function to animate the counter
            const animateCounter = () => {
                gsap.fromTo(
                    el,
                    { innerText: 0 },
                    {
                        innerText: targetValue,
                        duration: 5,
                        snap: { innerText: 1 },
                        ease: "power1.out",
                        onUpdate: function () {
                            el.innerText = Math.floor(el.innerText)
                        },
                    }
                )
            }

            // ScrollTrigger
            ScrollTrigger.create({
                trigger: section,
                start: "top 70%",
                onEnter: animateCounter,       // Jab section me aaye
                onEnterBack: animateCounter,   // Jab upar se wapas aaye
                // optional: agar chahe to reset bhi kar sakte ho jab section se nikle
                onLeave: () => (el.innerText = 0),
                onLeaveBack: () => (el.innerText = 0),
            })
        })


        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])

    return (
        <section ref={sectionRef} className="bg-gray-50 h-screen relative z-10 -mt-7 rounded-t-[50px]">
            <Image
                src={buildingProp}
                width={800}
                height={200}
                alt=""
                className="absolute right-0 bottom-0"
            />

            <Image
                src={buildingProp2}
                width={500}
                height={200}
                alt=""
                className="absolute left-0 top-0"
            />
            <div className="max-w-7xl relative z-10 mx-auto px-6 md:py-20 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                    {/* Left side - Heading */}
                    <div className="">
                        <div className="border rounded-full border-black px-4 tracking-widest text-sm inline-block mb-3">ABOUT US</div>
                        <h1 className="text-3xl lg:text-5xl xl:text-5xl leading-tight font-sans">
                            Welcome To <br className="lg:block hidden" /> <span className="text-primary font-bold">Enmaa Engineering</span> <br className="lg:block hidden" /> Consultants
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
                            <button className="text-sm text-gray-600 hover:text-black transition-colors duration-300 tracking-[0.2em] font-medium">
                                READ TO LEARN
                            </button>
                            <div className="h-px bg-gray-400 flex-1"></div>
                        </div>

                        {/* Bottom stats */}
                        <div className="bottom-20 left-12 right-12 grid grid-cols-3 md:gap-12 gap-8">
                            <div className="text-center">
                                <div
                                    ref={(el) => (countersRef.current[0] = el)}
                                    data-value="10"
                                    className="text-7xl lg:text-8xl xl:text-[120px] font-light text-transparent lg:-mb-2 font-ps"
                                    style={{
                                        WebkitTextStroke: "2px #565656",
                                        fontFamily: "system-ui",
                                    }}
                                >
                                    0
                                </div>
                                <p className="text-xs lg:text-sm text-[#565656] md:tracking-[0.15em] font-medium">
                                    YEARS OF EXPERIENCE
                                </p>
                            </div>
                            <div className="text-center">
                                <div
                                    ref={(el) => (countersRef.current[1] = el)}
                                    data-value="17"
                                    className="text-7xl lg:text-8xl xl:text-[120px] font-light text-transparent lg:-mb-2 font-ps"
                                    style={{
                                        WebkitTextStroke: "2px #565656",
                                        fontFamily: "system-ui",
                                    }}
                                >
                                    0
                                </div>
                                <p className="text-xs lg:text-sm text-[#565656] md:tracking-[0.15em] font-medium">
                                    NUMBER OF CLIENTS
                                </p>
                            </div>
                            <div className="text-center">
                                <div
                                    ref={(el) => (countersRef.current[2] = el)}
                                    data-value="501"
                                    className="text-7xl lg:text-8xl xl:text-[120px] font-light text-transparent lg:-mb-2 font-ps"
                                    style={{
                                        WebkitTextStroke: "2px #565656",
                                        fontFamily: "system-ui",
                                    }}
                                >
                                    0
                                </div>
                                <p className="text-xs lg:text-sm text-[#565656] md:tracking-[0.15em] font-medium">
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
