"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import buildingProp from "@/public/images/building-prop.webp"
import buildingProp2 from "@/public/images/building-prop2.webp"
import PillTitle from "./pill-title"
import useGsapPin from "./hooks/useGsapPin"
import useCounterAnimation from "./useCounterAnimation"

gsap.registerPlugin(ScrollTrigger)
export default function WelcomeSection() {
    const sectionRef = useRef(null)
    const countersRef = useRef([])
    useGsapPin(sectionRef)

    useEffect(() => {
        const section = sectionRef.current
        countersRef.current.forEach((el) => {
            const targetValue = parseInt(el.dataset.value, 10)
            const animateCounter = () => {
                gsap.fromTo(
                    el,
                    { innerText: 0 },
                    {
                        innerText: targetValue,
                        duration: 10,
                        snap: { innerText: 1 },
                        ease: "power4.out",
                        onUpdate: function () {
                            el.innerText = Math.floor(el.innerText)
                        },
                    }
                )
            }

            ScrollTrigger.create({
                trigger: section,
                start: "top 70%",
                onEnter: animateCounter,
                onEnterBack: animateCounter,
                onLeave: () => (el.innerText = 0),
                onLeaveBack: () => (el.innerText = 0),
            })
        })
        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])
    const counterV1Ref = useRef(null);
    const counterV2Ref = useRef(null);
    const counterV3Ref = useRef(null);

    useCounterAnimation(counterV1Ref, 400);
    useCounterAnimation(counterV2Ref, 900);
    useCounterAnimation(counterV3Ref, 900);

    const counterStyle = {
        WebkitTextStroke: "2px #565656",
        fontFamily: "system-ui",
    };

    return (
        <section ref={sectionRef} className="bg-gray-50 relative z-10 md:p-y-0 py-10 md:rounded-t-[50px]">
            <div className="h-screen">
                <Image
                    src={buildingProp}
                    width={800}
                    height={200}
                    alt=""
                    className="absolute right-0 bottom-0 w-auto h-auto"
                />

                <Image
                    src={buildingProp2}
                    width={500}
                    height={200}
                    alt=""
                    className="absolute left-0 top-0 w-auto h-auto"
                />
                <div className="max-w-7xl relative z-10 mx-auto px-6 md:py-20 h-full flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                        {/* Left side - Heading */}
                        <div className="">
                            <PillTitle title={'about us'} />
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

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}