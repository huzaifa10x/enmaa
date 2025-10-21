"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Plus, Minus } from "lucide-react"
import faqImg from "@/public/images/image22342.webp"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)
export default function FAQ({ faqData }) {

    const pinSection = useRef(null)
    useEffect(() => {
        const section = pinSection.current
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
        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])


    const [openItems, setOpenItems] = useState(new Set([0]))

    const toggleItem = (id) => {
        const newOpenItems = new Set(openItems)
        if (newOpenItems.has(id)) newOpenItems.delete(id)
        else newOpenItems.add(id)
        setOpenItems(newOpenItems)
    }

    return (
        <section ref={pinSection} className="bg-white rounded-t-[50px] overflow-y-auto flex items-center py-20 relative !z-[80]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

                <div className="flex justify-around items-start">
                    <div className="border rounded-full border-black px-4 tracking-widest inline-block">faq</div>

                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl mb-4 text-balance">Quick and clear <span className="text-primary font-bold">answers <br /> to your key</span> questions</h2>
                        {/* <p className="text-[#01b2eb] text-lg">From One Of The Top Civil Engineering Companies In Sharjah</p> */}
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                    {/* LEFT SIDE - FAQ LIST */}
                    <div className="lg:col-span-2 space-y-6">
                        {faqData.map((item, index) => (
                            <div key={item.id} className="border-b border-gray-200 pb-4">
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full flex items-start justify-between text-left group"
                                >
                                    <div className="flex gap-5 items-start">
                                        <span className="text-gray-400 font-semibold text-lg md:text-xl leading-none mt-1">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h3
                                            className={`text-base sm:text-lg md:text-xl font-medium transition-colors duration-300 ${openItems.has(item.id)
                                                ? "text-sky-600"
                                                : "text-gray-900 group-hover:text-sky-600"
                                                }`}
                                        >
                                            {item.question}
                                        </h3>
                                    </div>
                                    <span className="ml-4 mt-1 flex-shrink-0">
                                        {openItems.has(item.id) ? (
                                            <Minus className="w-5 h-5 text-sky-600" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-gray-500 group-hover:text-sky-600 transition" />
                                        )}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openItems.has(item.id)
                                        ? "max-h-40 opacity-100 mt-3"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p
                                        className="text-gray-600 text-sm md:text-base ml-9 pr-8 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: item.answer }}
                                    ></p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE - IMAGE + TEXT */}
                    <div className="flex flex-col items-center text-center lg:text-left">
                        <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                            <Image
                                src={faqImg}
                                alt="FAQ side image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Still Looking For Answers?
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm">
                                Our team will guide you through our design process,
                                project specifications and cost estimate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
