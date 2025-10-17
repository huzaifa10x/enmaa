"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import image1 from "@/public/images/image532.webp"
import image2 from "@/public/images/image31323.webp"
import image3 from "@/public/images/image354232.webp"
import image4 from "@/public/images/image23245.webp"
import image5 from "@/public/images/image2433.webp"
import bgProp from "@/public/images/bg-prop.webp"
import { ArrowLeft, ArrowRight } from "lucide-react"

const items = [
    {
        id: 1,
        type: "image",
        src: image1,
    },
    {
        id: 2,
        type: "image",
        src: image2,
    },
    {
        id: 3,
        type: "iframe",
        src: image3,
    },
    {
        id: 4,
        type: "iframe",
        src: image4,
    },
    {
        id: 5,
        type: "image",
        src: image5,
    },
]

export default function OurProjects() {
    const [index, setIndex] = useState(0)

    // Auto rotate
    useEffect(() => {
        const interval = setInterval(() => next(), 3000)
        return () => clearInterval(interval)
    }, [index])

    const next = () => setIndex((prev) => (prev + 1) % items.length)
    const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length)

    const getPositionClass = (i) => {
        const diff = (i - index + items.length) % items.length

        switch (diff) {
            case 0: // main
                return "z-30 scale-130 opacity-100 translate-x-0"
            case 1: // right
                return "z-20 scale-100 opacity-100 translate-x-[18em]"
            case 2: // far right (slightly visible)
                return "z-10 scale-80 opacity-100 translate-x-[28em]"
            case items.length - 1: // left
                return "z-20 scale-100 opacity-100 -translate-x-[18em]"
            case items.length - 2: // far left (slightly visible)
                return "z-10 scale-80 opacity-100 -translate-x-[28em]"
            default:
                return "opacity-0 scale-50"
        }
    }

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center rounded-t-[50px] !z-[60] bg-neutral-200">
            <div className="flex justify-evenly items-start w-full">
                <div className="border rounded-full border-black px-4 tracking-widest inline-block">OUR PROJECTS</div>

                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 text-balance">Creative <span className="text-primary font-bold">projects that <br/> define</span> our style</h2>
                </div>
            </div>

            <Image
                src={bgProp}
                width={300}
                height={300}
                alt=""
                className="absolute w-full h-full"
            />
            {/* Carousel container */}
            <div className="relative w-[42em] h-[25em] flex items-center justify-center">
                <ul className="relative w-full h-full flex items-center justify-center">
                    {items.map((item, i) => (
                        <li
                            key={item.id}
                            className={`absolute transition-all duration-500 ease-in-out w-[500px] h-[281px] bg-gray-800 overflow-hidden shadow-2xl transform ${getPositionClass(
                                i
                            )}`}
                        >
                            <Image
                                src={item.src}
                                alt={`Slide ${item.id}`}
                                width={500}
                                height={481}
                                className="w-full h-full object-cover brightness-90"
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Buttons */}
            <div className="relative z-10 flex justify-center gap-4 mt-8">
                <button
                    onClick={prev}
                    className="text-black px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
                >
                    <ArrowLeft />
                </button>
                <button className="bg-neutral-800 text-white px-6 border border-neutral-400 py-2 rounded-full hover:bg-black transition" >
                    Explore All
                </button>
                <button
                    onClick={next}
                    className="text-black px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
                >
                    <ArrowRight />
                </button>
            </div>
        </section>
    )
}
