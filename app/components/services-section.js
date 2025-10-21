"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { MdOutlineEngineering } from "react-icons/md"
import { BsBuildings } from "react-icons/bs"
import { SiAffinitydesigner } from "react-icons/si"
import { FaRegHandshake } from "react-icons/fa6"

import image1 from "@/public/images/image2342.webp"
import image2 from "@/public/images/image234223.webp"
import image3 from "@/public/images/image3455.webp"
import image4 from "@/public/images/image65452.webp"

// 👇 add your new 4 images here
import image5 from "@/public/images/image2342.webp"
import image6 from "@/public/images/image234223.webp"
import image7 from "@/public/images/image3455.webp"
import image8 from "@/public/images/image65452.webp"
import gsap from "gsap"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ScrollTrigger } from "gsap/all"

const services = [
    {
        id: 1,
        title: "Engineering & Design Services",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Feasibility studies</li>
            <li>Planning & development</li>
            <li>Value engineering</li>
            <li>Technical specs & BOQ</li>
            <li>Concept to final design</li>
        </ul>`,
        img: image1,
        icon: <MdOutlineEngineering className="text-white" size={60} />,
    },
    {
        id: 2,
        title: "Project & Construction Management",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Site supervision</li>
            <li>Quality, time & cost control</li>
            <li>Claims & commissioning</li>
            <li>Scheduling & cost management</li>
            <li>Procurement & documentation</li>
        </ul>`,
        img: image2,
        icon: <BsBuildings className="text-white" size={60} />,
    },
    {
        id: 3,
        title: "Interior Designing",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Tender preparation & analysis</li>
            <li>Contract documentation</li>
            <li>Pre-qualification & award</li>
            <li>Client coordination</li>
            <li>Performance management</li>
        </ul>`,
        img: image3,
        icon: <SiAffinitydesigner className="text-white" size={60} />,
    },
    {
        id: 4,
        title: "Specialized Solutions (Design & Build + GIS)",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Design–build collaboration</li>
            <li>Value engineering ideas</li>
            <li>Lifecycle scheduling</li>
            <li>GIS strategy & data modeling</li>
            <li>Visualization & system integration</li>
        </ul>`,
        img: image4,
        icon: <FaRegHandshake className="text-white" size={60} />,
    },
    {
        id: 5,
        title: "Project Management",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Design–build collaboration</li>
            <li>Value engineering ideas</li>
            <li>Lifecycle scheduling</li>
            <li>GIS strategy & data modeling</li>
            <li>Visualization & system integration</li>
        </ul>`, img: image5,
        icon: <MdOutlineEngineering className="text-white" size={60} />,
    },
    {
        id: 6,
        title: "Urban Planning",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Design–build collaboration</li>
            <li>Value engineering ideas</li>
            <li>Lifecycle scheduling</li>
            <li>GIS strategy & data modeling</li>
            <li>Visualization & system integration</li>
        </ul>`, img: image6,
        icon: <BsBuildings className="text-white" size={60} />,
    },
    {
        id: 7,
        title: "3D Visualization",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Design–build collaboration</li>
            <li>Value engineering ideas</li>
            <li>Lifecycle scheduling</li>
            <li>GIS strategy & data modeling</li>
            <li>Visualization & system integration</li>
        </ul>`, img: image7,
        icon: <SiAffinitydesigner className="text-white" size={60} />,
    },
    {
        id: 8,
        title: "Client Relations",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Design–build collaboration</li>
            <li>Value engineering ideas</li>
            <li>Lifecycle scheduling</li>
            <li>GIS strategy & data modeling</li>
            <li>Visualization & system integration</li>
        </ul>`, img: image8,
        icon: <FaRegHandshake className="text-white" size={60} />,
    },
]

export default function ServicesSection() {
    const [activeImg, setActiveImg] = useState(image1)

    const handleHover = (img) => {
        setActiveImg(img)
    }


    const sliderRef = useRef(null)

    useEffect(() => {
        const section = sliderRef.current

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

    return (
        <section ref={sliderRef} className="relative flex flex-col h-screen items-center justify-center bg-gradient-to-r z-20 from-[#01b2eb] to-primary rounded-t-[50px] overflow-hidden">
            {/* background image */}
            <Image
                src={activeImg}
                alt="Background"
                fill
                className="object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>

            {/* slider container */}
            <div className="relative z-10 w-full h-full overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth scrollbar-hide">
                <div className="flex w-max">
                    {services.map((service) => (
                        <div key={service.id}
                            onMouseEnter={() => handleHover(service.img)}
                            className="group relative w-[90vw] sm:w-[50vw] md:w-[25vw] h-screen snap-center shrink-0 border-r border-white/35 overflow-hidden hover:bg-blue-900/45 duration-300 flex items-end p-6"
                        >
                            <div className="z-10 transition-all duration-300 relative group-hover:bottom-0 -bottom-24">
                                <div className="mb-3 font-ps absolute top-0 text-3xl group-hover:opacity-100 opacity-0 duration-300 font-light text-transparent" style={{
                                    WebkitTextStroke: "1px #fff",
                                    fontFamily: "system-ui",
                                }}>{`0${service.id}`}</div>
                                <div className="mb-3">{service.icon}</div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                                    {service.title}
                                </h3>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm md:text-lg" dangerouslySetInnerHTML={{ __html: service.desc }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* optional nav buttons */}
            <div className="absolute top-80 flex gap-4 justify-between z-20 w-full px-20">
                <button
                    onClick={() =>
                        (document.querySelector(".scrollbar-hide").scrollLeft -= 400)
                    }
                    className="text-white px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
                >
                    <ArrowLeft />
                </button>


                <button
                    onClick={() =>
                        (document.querySelector(".scrollbar-hide").scrollLeft += 400)
                    }
                    className="text-white px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
                >
                    <ArrowRight />
                </button>
            </div>
        </section>
    )
}
