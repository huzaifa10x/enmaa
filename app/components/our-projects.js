"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import image1 from "@/public/images/projecs slideshow/428.jpg"
import image2 from "@/public/images/p3223.png"
import image3 from "@/public/images/p4322.png"
import image4 from "@/public/images/pe2e2.png"
import image5 from "@/public/images/pe342.png"
import image6 from "@/public/images/projects/image232.png"
import bgProp from "@/public/images/bg-prop.webp"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import Link from "next/link"
import PillTitle from "./pill-title"
import useGsapPin from "./hooks/useGsapPin"

gsap.registerPlugin(ScrollTrigger)

const items = [
    {
        id: 1,
        type: "image",
        src: image6,
        title: "Project 110 DXB",
        description: "Enmaa Engineering Consultants – Dubai",
    },
    {
        id: 2,
        type: "image",
        src: image2,
        title: "Luxury Villa Design",
        description: "Private Residence – Abu Dhabi",
    },
    {
        id: 3,
        type: "iframe",
        src: image3,
        title: "Modern Office Tower",
        description: "Skyline Group – Downtown Dubai",
    },
    {
        id: 4,
        type: "iframe",
        src: image4,
        title: "Commercial Complex",
        description: "Al Noor Developments – Sharjah",
    },
    {
        id: 5,
        type: "image",
        src: image5,
        title: "Beachfront Residence",
        description: "Palm Jumeirah – Dubai",
    },
]

export default function OurProjects() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const sectionRef = useRef(null)

    useGsapPin(sectionRef, {
        onEnter: () => {
            gsap.to(sectionRef.current, {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                duration: 0.3,
                ease: "power2.out"
            })
        },
        onLeaveBack: () => {
            gsap.to(sectionRef.current, {
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                duration: 0.3,
                ease: "power2.out"
            })
        }
    })
    const [index, setIndex] = useState(0)
    // Auto rotate
    useEffect(() => {
        const interval = setInterval(() => next(), 3000)
        return () => clearInterval(interval)
    }, [index])

    const next = () => {
        const next = (currentSlide + 1) % items.length
        setIndex((prev) => (prev + 1) % items.length)
        setCurrentSlide(next)
    }

    const prev = () => {
        const prev = currentSlide === 0 ? items.length - 1 : currentSlide - 1
        setIndex((prev) => (prev - 1) % items.length)
        setCurrentSlide(prev)
    }

    const getPositionClass = (i) => {
        const diff = (i - index + items.length) % items.length

        switch (diff) {
            case 0: // main (center)
                return "z-30 lg:scale-125 md:scale-75 scale-45 opacity-100 drop-shadow-2xl shadow-2xl translate-x-0"

            case 1: // right
                return "z-20 lg:scale-100 md:scale-50 scale-30 opacity-100 brightness-50 translate-x-[13rem] md:translate-x-[21rem] lg:translate-x-[38rem]"

            case 2: // far right
                return "z-10 lg:scale-75 md:scale-40 scale-0 opacity-80 brightness-50 translate-x-[6rem] md:translate-x-[20rem] lg:translate-x-[48rem]"

            case items.length - 1: // left
                return "z-20 lg:scale-100 md:scale-50 scale-30 opacity-100 brightness-50 -translate-x-[13rem] md:-translate-x-[21rem] lg:-translate-x-[38rem]"

            case items.length - 2: // far left
                return "z-10 lg:scale-75 md:scale-40 scale-0 opacity-80 brightness-50 -translate-x-[6rem] md:-translate-x-[20rem] lg:-translate-x-[48rem]"

            default:
                return "opacity-0 lg:scale-50 md:scale-30"
        }
    }

    return (
        <section ref={sectionRef} className="relative w-full h-screen flex flex-col py-10 overflow-x-hidden items-center justify-center rounded-t-[50px] !z-[60] bg-neutral-200 -mt-10">
            <div className="flex flex-wrap md:justify-between w-full max-w-7xl items-start lg:gap-0 gap-4 px-6">
                <PillTitle title={'OUR PROJECTS'} />
                <div className="md:mb-16 max-w-[500px]">
                    <h2 className="text-4xl md:text-5xl mb-4 text-balance">Creative <span className="text-primary font-bold">projects that define</span> our style</h2>
                </div>
            </div>

            <Image
                src={bgProp}
                width={300}
                height={300}
                alt=""
                className="absolute w-auto h-auto"
            />
            {/* Carousel container */}
            <div className="relative w-[40em] h-[25em] flex items-center justify-center">
                <ul className="relative w-full h-full flex items-center justify-center">
                    {items.map((item, i) => (
                        <li
                            key={item.id}
                            className={`absolute transition-all duration-500 ease-in-out w-[500px] h-[281px] bg-gray-800  transform ${getPositionClass(
                                i
                            )}`}
                        >
                            <div className="relative">
                                <div className="relative w-full h-[300px]">
                                    <Image
                                        src={item.src}
                                        alt={`Slide ${item.id}`}
                                        // width={500}
                                        // height={481}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="w-full h-full object-cover brightness-75"
                                    />
                                </div>
                                {/* Overlay Text */}
                                <div className="inset-0 flex items-center justify-between py-2">
                                    <h3 className="text-xl font-bold text-black mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-black text-sm opacity-90">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Buttons */}
            <div className="relative z-10 flex flex-wrap items-center md:justify-between justify-center mt-38 w-full max-w-7xl">
                <div></div>
                <div></div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={prev}
                        className="text-black px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
                    >
                        <ArrowLeft />
                    </button>
                    <Link href={'our-projects'} className="bg-neutral-800 text-white text-nowrap px-6 border border-neutral-400 py-2 rounded-full hover:bg-black transition" >
                        Explore All
                    </Link>
                    <button
                        onClick={next}
                        className="text-black px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
                    >
                        <ArrowRight />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="max-w-6xl flex items-center justify-end">
                    <div className="flex items-center space-x-4 text-black text-4xl">
                        <div className="w-50 h-1 bg-white relative">
                            <div className="absolute left-0 top-0 h-full bg-black transition-all duration-500 ease-out"
                                style={{ width: `${((currentSlide + 1) / items.length) * 100}%` }}
                            />
                        </div>
                        <span>{String(currentSlide + 1).padStart(2, "0")}</span>
                        {/* <span>{String(items.length).padStart(2, "0")}</span> */}
                    </div>
                </div>
            </div>
        </section>
    )
}