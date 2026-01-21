"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import image1 from "@/public/images/projecs slideshow/428.jpg"
import image418 from "@/public/images/418.jpg"
import image590 from "@/public/images/590.jpg"
import image1717 from "@/public/images/1717.jpg"
import image416 from "@/public/images/416.jpg"
import image1703 from "@/public/images/image1703.webp"
import bgProp from "@/public/images/bg-prop.webp"
import imagePlaceholder from "@/public/images/image-placeholder.png"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import Link from "next/link"
import PillTitle from "./pill-title"
import useGsapPin from "./hooks/useGsapPin"

gsap.registerPlugin(ScrollTrigger)

const items = [
    {
        id: 2,
        type: "image",
        src: imagePlaceholder,
        title: "PROPOSED SHEDS <br/> & LABOR ACCOMMODATION",
        description: `
    <div>
        <div>SHARJAH - SAJA'A / INDUSTRIAL</div>
        <div>LAND AREA 63513.50 M2</div>
        <div>PROPOSED SHEDS (G+M) <br/> LABOR ACCOMMODATIONS (G+1) + C.W.</div>
        <div>Built Up Area 1490.00 M2</div>
    </div>`
    },
    {
        id: 3,
        type: "image",
        src: image418,
        title: "INDUSTRIAL WAREHOUSE",
        description: `
    <div>
        <div>AL FEEL TR. L.L.C, DUBAI BRANCH</div>
        <div>SAIH SHUAIB 4, DUBAI</div>
        <div>TOTAL PARKING PROPOSED 11</div>
        <div>INDUSTRIAL WAREHOUSE (G+M)</div>
        <div>Built Up Area 4912.14 M2</div>
    </div>`
    },
    {
        id: 4,
        type: "image",
        src: image590,
        title: "NURSERY",
        description: `
    <div>
        <div>SHARJAH AL HAMRIYAH EAST</div>
        <div>TOTAL PARKING PROPOSED 20</div>
        <div>PROJECT PROPOSED NURSERY G ONLY <br/> + GUARD ROOM + SERVICE BLOCK + C/WALL</div>
        <div>Built Up Area 2004.19 M2</div>
    </div>`
    },
    {
        id: 5,
        type: "image",
        src: image1703,
        title: "TOWER – COMMERCIAL <br/> OFFICES / RESIDENTIAL",
        description: `
    <div>
        <div>SHARJAH AL KHAN</div>
        <div>TOTAL PARKING PROPOSED 526</div>
        <div>TOWER BUILDING (B+G+5P+HC+2 <br/> SERVICE FLOORS + 48 FLOORS)</div>
        <div>Built Up Area 4211.67 M2</div>
    </div>`
    },
    {
        id: 6,
        type: "image",
        src: image1717,
        title: "BUILDING – COMMERCIAL <br/> OFFICES / RESIDENTIAL",
        description: `
    <div>
        <div>SHARJAH MUWAILAH COMMERCIAL</div>
        <div>BUILDING (G+4 + 50% FIFTH FLOOR + R.F)</div>
        <div>Built Up Area 415.53 M2</div>
    </div>`
    },
    {
        id: 7,
        type: "image",
        src: image416,
        title: "PROPOSED SCHOOL + NURSERY",
        description: `
    <div>
        <div>FRENCH INTERNATIONAL PRIVATE SCHOOL</div>
        <div>PROPOSED SCHOOL (B+G+2+RF) + NURSERY</div>
        <div>AL HEBIAH SIXTH, DUBAI</div>
        <div>Built Up Area 1490.00 M2</div>
    </div>`
    }

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
    // useEffect(() => {
    //     const interval = setInterval(() => next(), 3000)
    //     return () => clearInterval(interval)
    // }, [index])

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
                return "z-30 lg:scale-125 md:scale-75 scale-50 opacity-100 drop-shadow-2xl shadow-2xl translate-x-0"

            case 1: // right
                return "z-20 lg:scale-100 md:scale-50 scale-30 opacity-100 brightness-50 translate-x-[13rem] md:translate-x-[21rem] lg:translate-x-[38rem]"

            case 2: // far right
                return "z-10 lg:scale-0 md:scale-40 scale-0 opacity-80 brightness-50 translate-x-[6rem] md:translate-x-[20rem] lg:translate-x-[48rem]"

            case items.length - 1: // left
                return "z-20 lg:scale-100 md:scale-50 scale-0 opacity-100 brightness-50 -translate-x-[13rem] md:-translate-x-[21rem] lg:-translate-x-[38rem]"

            case items.length - 2: // far left
                return "z-10 lg:scale-0 md:scale-40 scale-0 opacity-80 brightness-50 -translate-x-[6rem] md:-translate-x-[20rem] lg:-translate-x-[48rem]"

            default:
                return "opacity-0 lg:scale-50 md:scale-30"
        }
    }

    return (
        <section ref={sectionRef} className="relative w-full  flex flex-col py-10 overflow-x-hidden items-center justify-center rounded-t-[50px] !z-[60] bg-neutral-200 -mt-10">
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
            <div className="relative w-[40em] md:h-[25em] h-[15em] flex items-center justify-center">
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
                                        className="w-full h-full object-cover brightness-75 "
                                    />
                                </div>
                                {/* Overlay Text */}
                                <div className="inset-0 flex items-center justify-between py-2">
                                    <div className="font-bold text-black mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                                    <div className="text-black text-xs  opacity-90" dangerouslySetInnerHTML={{ __html: item.description }} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Buttons */}
            <div className="relative z-10 flex flex-wrap items-center md:justify-between justify-center md:mt-38 gap-9 w-full max-w-7xl">
                {/* <div></div>
                <div></div> */}

                <div className="flex items-center gap-4">
                    <button
                        onClick={prev}
                        className="text-black px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
                    >
                        <ArrowLeft size={16} />
                    </button>
                    <Link href={'our-projects'} className="bg-neutral-800 text-sm text-white text-nowrap px-6 border border-neutral-400 py-2 rounded-full hover:bg-black transition" >
                        Explore All
                    </Link>
                    <button
                        onClick={next}
                        className="text-black px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
                    >
                        <ArrowRight size={16} />
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