"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import buildingProp from "@/public/images/building-prop.webp"
import buildingProp2 from "@/public/images/building-prop2.webp"
import PillTitle from "@/app/components/pill-title"
import useCounterAnimation from "@/app/components/useCounterAnimation"
import useGsapPin from "@/app/components/hooks/useGsapPin"

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
                        duration: 5,
                        snap: { innerText: 1 },
                        ease: "power4.out",
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
    useCounterAnimation(counterV1Ref, 2500);
    useCounterAnimation(counterV2Ref, 2000);
    useCounterAnimation(counterV3Ref, 3000);

    const counterStyle = {
        WebkitTextStroke: "2px #565656",
        fontFamily: "system-ui",
    };

    return (
        <section ref={sectionRef} className="bg-gray-50 relative z-10 md:p-y-0 py-10 p md:-mt-7 md:rounded-t-[50px]">
            <div className="">
                <Image
                    src={buildingProp}
                    width={800}
                    height={200}
                    alt=""
                    className="absolute right-0 bottom-0 "
                />

                <Image
                    src={buildingProp2}
                    width={500}
                    height={200}
                    alt=""
                    className="absolute left-0 top-0" 
                />
                <div
                    dir="rtl"
                    className="max-w-7xl relative z-10 mx-auto px-6 md:py-20 flex items-center text-right"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                        {/* Left / Top Content */}
                        <div>
                            <PillTitle title={'من نحن'} />

                            <h1 className="text-3xl lg:text-5xl xl:text-5xl leading-tight font-sans">
                                مرحبًا بكم في <br className="lg:block hidden" />
                                <span className="text-primary font-bold">إنماء للاستشارات الهندسية</span>
                                <br className="lg:block hidden" />
                            </h1>
                        </div>

                        {/* Right / Bottom Content */}
                        <div className="flex flex-col justify-center space-y-10">
                            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                                تأسست شركة إنماء للاستشارات الهندسية عام 2015 على يد
                                مجموعة من المهندسين ذوي الخبرة، وانطلقت بخطوات
                                سريعة ومدروسة للمساهمة في تطوير سوق العقارات، بما يشمل
                                الأبراج، المباني التجارية، المستودعات، الفلل، المصانع
                                والمدارس.
                            </p>

                            <div className="flex items-center space-x-reverse space-x-6">
                                <button className="text-sm text-gray-600 hover:text-black transition-colors duration-300 tracking-[0.2em] font-medium">
                                    اقرأ المزيد
                                </button>
                                <div className="h-px bg-gray-400 flex-1"></div>
                            </div>

                            {/* <div className="grid grid-cols-3"> */}
                                {/* Experience */}
                                {/* <div className="text-center">
                                    <div
                                        ref={counterV1Ref}
                                        data-value="10"
                                        className="text-6xl lg:text-8xl xl:text-[80px] font-light text-transparent lg:-mb-2 font-ps"
                                        style={counterStyle}
                                    >
                                        0
                                    </div>
                                    <p className="text-xs lg:text-sm text-[#565656] mt-5 md:tracking-[0.15em] font-medium">
                                        سنوات <br /> الخبرة
                                    </p>
                                </div> */}

                                {/* Clients */}
                                {/* <div className="text-center">
                                    <div
                                        ref={counterV2Ref}
                                        data-value="2750"
                                        className="text-6xl lg:text-8xl xl:text-[80px] font-light text-transparent lg:-mb-2 font-ps"
                                        style={counterStyle}
                                    >
                                        0
                                    </div>
                                    <p className="text-xs lg:text-sm text-[#565656] mt-5 md:tracking-[0.15em] font-medium">
                                        عدد <br /> العملاء
                                    </p>
                                </div> */}

                                {/* Projects */}
                                {/* <div className="text-center">
                                    <div
                                        ref={counterV3Ref}
                                        data-value="2963"
                                        className="text-6xl lg:text-8xl xl:text-[80px] font-light text-transparent lg:-mb-2 font-ps"
                                        style={counterStyle}
                                    >
                                        0
                                    </div>
                                    <p className="text-xs lg:text-sm text-[#565656] mt-5 md:tracking-[0.15em] font-medium">
                                        المشاريع <br /> المنجزة
                                    </p>
                                </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
