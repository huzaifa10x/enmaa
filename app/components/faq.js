"use client"

import { useEffect, useRef, useState } from "react"
import { Plus, Minus } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


export default function FAQ({ faqData, faqHeading }) {
    const pinSection = useRef(null)
    useEffect(() => {
        const section = pinSection.current

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false, // 👈 isko true rakho taki horizontal scroll aur ye section clash na kare
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])


    const [openItems, setOpenItems] = useState(new Set([2])) // TMJ Specialist is open by default

    const toggleItem = (id) => {
        const newOpenItems = new Set(openItems)
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id)
        } else {
            newOpenItems.add(id)
        }
        setOpenItems(newOpenItems)
    }

    return (
        <section ref={pinSection} className="!z-[60] h-screen flex items-center bg-white rounded-t-[50px] overflow-hidden">
            <div className="container mx-auto lg:px-12 px-6 py-8 sm:py-12 bg-transparent">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                    <div className="lg:pr-8">
                        <h2 className="md:text-7xl text-3xl text-gray-900 leading-tight mb-6">FAQ'S</h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Got questions? We’ve got answers. Here’s everything you need to know about working with us.</p>
                    </div>

                    <div className="space-y-4 col-span-2">
                        {faqData.map((item) => (
                            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <span className="text-gray-900 font-medium text-sm sm:text-base pr-4">{item.question}</span>
                                    <div className="flex-shrink-0">
                                        {openItems.has(item.id) ? (
                                            <Minus className="w-5 h-5 text-gray-600" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-gray-600" />
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems.has(item.id) ? "max-h-2/3 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="px-6 pb-4 pt-2">
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
