"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import image1 from "@/public/images/image2342.webp"
import image2 from "@/public/images/image234223.webp"
import image3 from "@/public/images/image3455.webp"
import image4 from "@/public/images/image65452.webp"

gsap.registerPlugin(ScrollTrigger)

const services = [
    { id: 1, title: "Engineering Services", desc: "Structural assessment", img: image1 },
    { id: 2, title: "Architectural Design", desc: "Creative building plans", img: image2 },
    { id: 3, title: "Interior Designing", desc: "Modern space planning", img: image3 },
    { id: 4, title: "Consulting", desc: "Expert project advice", img: image4 },
    { id: 5, title: "Engineering Services", desc: "Structural assessment", img: image1 },
    { id: 6, title: "Architectural Design", desc: "Creative building plans", img: image2 },
    { id: 7, title: "Interior Designing", desc: "Modern space planning", img: image3 },
    { id: 8, title: "Consulting", desc: "Expert project advice", img: image4 },
    { id: 9, title: "Engineering Services", desc: "Structural assessment", img: image1 },
    { id: 10, title: "Architectural Design", desc: "Creative building plans", img: image2 },
    { id: 11, title: "Interior Designing", desc: "Modern space planning", img: image3 },
    { id: 12, title: "Consulting", desc: "Expert project advice", img: image4 },
]

export default function ServicesSection() {
    const sectionRef = useRef(null)
    const cardsWrapperRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        const cardsWrapper = cardsWrapperRef.current
        const cards = gsap.utils.toArray(".service-card")

        const totalScroll = cardsWrapper.scrollWidth - section.offsetWidth

        // Main horizontal scroll (pin ke sath lekin spacing allow)
        const horizontalAnim = gsap.to(cardsWrapper, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=" + totalScroll,
                scrub: true,
                pin: true,
                pinSpacing: true, // 👈 ab space milega, agla section overlap nahi karega
                anticipatePin: 1,
            },
        })

        // Har card ka effect
        cards.forEach((card) => {
            const content = card.querySelector(".card-content")

            gsap.set(card, { scale: 0.9 })
            gsap.set(content, { autoAlpha: 0, y: 30 })

            ScrollTrigger.create({
                trigger: card,
                containerAnimation: horizontalAnim,
                start: "left center",
                end: "right center",
                onEnter: () => {
                    gsap.to(card, { scale: 1.1, duration: 0.5 })
                    gsap.to(content, { autoAlpha: 1, y: 0, duration: 0.5 })
                },
                onLeave: () => {
                    gsap.to(card, { scale: 0.9, duration: 0.5 })
                    gsap.to(content, { autoAlpha: 0, y: 30, duration: 0.5 })
                },
                onEnterBack: () => {
                    gsap.to(card, { scale: 1.1, duration: 0.5 })
                    gsap.to(content, { autoAlpha: 1, y: 0, duration: 0.5 })
                },
                onLeaveBack: () => {
                    gsap.to(card, { scale: 0.9, duration: 0.5 })
                    gsap.to(content, { autoAlpha: 0, y: 30, duration: 0.5 })
                },
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])



    return (
        <section ref={sectionRef} className="flex flex-col h-screen items-start justify-center rounded-t-[50px] bg-neutral-800 relative overflow-hidden z-20 py-30">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight font-sans ml-10 mb-10">
                Our Services
            </h2>

            <div ref={cardsWrapperRef} className="flex px-12">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="service-card relative md:w-[400px] md:h-[400px] w-[200px] h-[200px] bg-neutral-900 overflow-hidden rounded-2xl origin-center"
                    >
                        {/* Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={service.img}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        </div>

                        {/* Text Overlay (sirf active card par dikhega) */}
                        <div className="card-content absolute bottom-8 left-6 right-6 z-10">
                            <h3 className="md:text-3xl font-semibold text-white mb-2">
                                {service.title}
                            </h3>
                            <p className="text-white md:text-lg text-sm">{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
