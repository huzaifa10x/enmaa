"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Plus, Minus } from "lucide-react"
import faqImg from "@/public/images/image22342.webp"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
// import PillTitle from "./pill-title"
import useGsapPin from "@/app/components/hooks/useGsapPin"
import PillTitle from "@/app/components/pill-title"

export default function FAQ({ faqData }) {
    const [openItem, setOpenItem] = useState(0)
    const toggleItem = (id) => {
        setOpenItem(prev => prev === id ? null : id)
    }
    const sectionRef = useRef(null)

    useGsapPin(sectionRef)

    const boxRef = useRef(null);
    useEffect(() => {
        const el = boxRef.current;

        gsap.to(el, {
            y: "-100%",
            // rotation: 360,
            duration: 5,
            scrollTrigger: {
                trigger: el,
                pin: true,
                start: "top center",
                end: "bottom top",
                scrub: true,
                pinSpacing: false,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section className="bg-white md:rounded-t-[50px] py-20 relative !z-[80]">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    className="flex flex-wrap md:justify-between items-start lg:gap-0 gap-4"
                    dir="rtl"
                >
                    <PillTitle title={'الأسئلة الشائعة'} />

                    <div className="mb-16 text-right">
                        <h2 className="text-3xl md:text-5xl mb-4 text-balance leading-tight">
                            إجابات <span className="text-primary font-bold">
                                سريعة وواضحة
                                <br className="lg:block hidden" />
                                على أهم تساؤلاتك
                            </span>
                        </h2>
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                    <div
                        className="flex flex-col items-center lg:items-start text-center lg:text-right"
                        dir="rtl"
                    >
                        <div className="relative w-full lg:max-w-[380px] lg:max-h-[400px] md:max-w-[800px] md:max-h-[300px] aspect-[4/5] rounded-2xl overflow-hidden mb-8 shadow-md">
                            <Image
                                src={faqImg}
                                alt="صورة الأسئلة الشائعة"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                                priority
                            />
                        </div>

                        <div className="max-w-sm">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                ما زلت تبحث عن إجابات؟
                            </h3>

                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                فريقنا المتخصص سيرشدك خلال عملية التصميم،
                                ومواصفات المشروع، وتقدير التكاليف خطوة بخطوة.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        {faqData.map((item, index) => (
                            <div key={item.id} className="border-b border-gray-200 pb-4">
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full flex items-start justify-between text-right group"
                                >
                                    <div>
                                        <div className="flex gap-5 items-start">
                                            <span className="ml-4 mt-1 flex-shrink-0">
                                                {openItem === item.id ? (
                                                    <Minus className="w-5 h-5 text-sky-600" />
                                                ) : (
                                                    <Plus className="w-5 h-5 text-gray-500 group-hover:text-sky-600 transition" />
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <h3
                                            className={`text-base font-medium transition-colors duration-300 ${openItem === item.id
                                                ? "text-sky-600"
                                                : "text-gray-900 group-hover:text-sky-600"
                                                }`}
                                        >
                                            {item.question}
                                        </h3>
                                        <span className="text-gray-400 font-semibold text-lg md:text-xl leading-none mt-1">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>


                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === item.id
                                        ? "max-h-full opacity-100 mt-3"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p
                                        dir="rtl" className="text-gray-600 text-right text-end text-sm md:text-base ml-9 pr-8 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: item.answer }}
                                    ></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}