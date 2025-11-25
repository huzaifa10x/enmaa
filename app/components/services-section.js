"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { MdOutlineEngineering } from "react-icons/md"
import { BsBuildings } from "react-icons/bs"
import { SiAffinitydesigner } from "react-icons/si"
import { FaRegHandshake } from "react-icons/fa6"
import image1 from "@/public/images/projects/448...1.jpg"
import image2 from "@/public/images/projects/1438-07.jpg"
import image3 from "@/public/images/projects/1438-17.jpg"
import image4 from "@/public/images/projects/1438-19.jpg"
import image5 from "@/public/images/projects/1841-01.jpg"
import image6 from "@/public/images/projects/1855-02.jpg"
import image7 from "@/public/images/projects/1841-02.jpg"
import image8 from "@/public/images/projects/1855-01.jpg"
import gsap from "gsap"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ScrollTrigger } from "gsap/all"
import ServicesSliderMobile from "./ServicesSliderMobile"

const services = [
    {
        id: 1,
        title: "Engineering & Design Services",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Feasibility studies</li>
            <li>Planning</li>
            <li>Project development</li>
            <li>Evaluation of engineering projects</li>
            <li>Technical specifications</li>
            <li>Quantity inventory</li>
        </ul>`,
        img: image1,
        icon: <MdOutlineEngineering className="text-white" size={60} />,
    },
    {
        id: 2,
        title: "Design services",
        desc: `
        <ul class='list-disc pl-6'>
           <li>Data collection</li>
           <li>Design idea</li>
           <li>Initial design</li>
           <li>Detailed design</li>
           <li>Final design</li>
        </ul>`,
        img: image2,
        icon: <BsBuildings className="text-white" size={60} />,
    },
    {
        id: 3,
        title: "Tender services",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Contract terms</li>
            <li>Initial tender evaluation</li>
            <li>Call for tender</li>
            <li>Tender study</li>
            <li>Final report</li>
            <li>Contractor selection</li>
        </ul>`,
        img: image3,
        icon: <SiAffinitydesigner className="text-white" size={60} />,
    },
    {
        id: 4,
        title: "Supervision",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Supervising the construction process</li>
            <li>Quality</li>
            <li>Supervising the timeline and costs</li>
            <li>Claims and contract conclusion</li>
        </ul>`,
        img: image4,
        icon: <FaRegHandshake className="text-white" size={60} />,
    },
    {
        id: 5,
        title: "Owner representation",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Representing the owner at the workplace</li>
            <li>On-site engagement with customers for better coordination</li>
            <li>Project management to achieve the required quality on time and within the specified budget</li>
        </ul>`, img: image5,
        icon: <MdOutlineEngineering className="text-white" size={60} />,
    },
    {
        id: 6,
        title: "Project management services",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Determine the project timeline</li>
            <li>Cost management</li>
            <li>Managing relationships between reformers</li>
            <li>Quality control</li>
            <li>Resource management</li>
            <li>Securing needs</li>
            <li>File management</li>
            <li>Guidance</li>
        </ul>`,
        img: image6,
        icon: <BsBuildings className="text-white" size={60} />,
    },
    {
        id: 7,
        title: "Project construction and design",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Direct work with contractors</li>
            <li>Quality and value of business</li>
            <li>Project life cycle</li>
            <li>Budget reduction</li>
            <li>Agendas</li>
        </ul>`,
        img: image7,
        icon: <SiAffinitydesigner className="text-white" size={60} />,
    },
    {
        id: 8,
        title: "GIS Services",
        desc: `
        <ul class='list-disc pl-6'>
            <li>Finding project solutions</li>
            <li>Consulting services and strategic planning</li>
            <li>Developing data models</li>
            <li>Analysis, data presentation and model design</li>
            <li>Development and integration of projects</li>
            <li>Capacity building and operational support</li>
        </ul>`,
        img: image8,
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
        <>
            <section ref={sliderRef} className="relative md:flex hidden flex-col h-screen items-center justify-center bg-gradient-to-r z-20 from-[#01b2eb] to-primary rounded-t-[50px] overflow-hidden">
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
                                className="group relative w-[90vw] sm:w-[50vw] lg:w-[25vw] h-screen snap-center shrink-0 border-r border-white/35 overflow-hidden hover:bg-blue-900/45 duration-300 flex items-end p-6"
                            >
                                <div className="z-10 transition-all duration-300 relative group-hover:bottom-0 bottom-12">
                                    <div className="mb-3 font-ps absolute -top-96 text-3xl group-hover:opacity-100 opacity-0 duration-300 font-light text-transparent" style={{
                                        WebkitTextStroke: "1px #fff",
                                        fontFamily: "system-ui",
                                    }}>{`0${service.id}`}</div>

                                    <div className="brightness-50 group-hover:brightness-200 duration-300">
                                        <div className="mb-3">{service.icon}</div>
                                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                                            {service.title}
                                        </h3>
                                        <div className="opacity-0 group-hover:block hidden group-hover:opacity-100 transition-opacity duration-300 text-white text-sm md:text-lg" dangerouslySetInnerHTML={{ __html: service.desc }} />
                                    </div>
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

            <section ref={sliderRef} className='md:hidden z-20 bg-white min-h-screen'>
                <ServicesSliderMobile  services={services} />
            </section>
        </>
    )
}
