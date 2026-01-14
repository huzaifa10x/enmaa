"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Plus, Minus } from "lucide-react"
import faqImg from "@/public/images/inspiration/28.jpg"
import PillTitle from "./pill-title"
import useGsapPin from "./hooks/useGsapPin"

export default function FAQ({ faqData }) {
    const [openItem, setOpenItem] = useState(0)
    const toggleItem = (id) => {
        setOpenItem(prev => prev === id ? null : id)
    }
    const sectionRef = useRef(null)
    useGsapPin(sectionRef)

    return (
        <section className="bg-white md:rounded-t-[50px] py-20 relative !z-[80]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap md:justify-between items-start lg:gap-0 gap-4">
                    <PillTitle title={'faq'} />
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl mb-4 text-balance">
                            Quick and clear <span className="text-primary font-bold">answers <br className="lg:block hidden" /> to your key</span> questions
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
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
                                            className={`text-base font-medium transition-colors duration-300 ${openItem === item.id
                                                ? "text-sky-600"
                                                : "text-gray-900 group-hover:text-sky-600"
                                                }`}
                                        >
                                            {item.question}
                                        </h3>
                                    </div>
                                    <span className="ml-4 mt-1 flex-shrink-0">
                                        {openItem === item.id ? (
                                            <Minus className="w-5 h-5 text-sky-600" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-gray-500 group-hover:text-sky-600 transition" />
                                        )}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === item.id
                                        ? "max-h-full opacity-100 mt-3"
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

                    <div className="flex flex-col items-center text-center lg:text-left">
                        <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                            <Image
                                src={faqImg}
                                alt="FAQ side image"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Still Looking For Answers?</h3>
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