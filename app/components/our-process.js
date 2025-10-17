"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import image1 from "@/public/images/image3424.webp"
import image2 from "@/public/images/image436453.webp"
import image3 from "@/public/images/image45e24.webp"
import image4 from "@/public/images/Enmaa.webp"
import Image from "next/image"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
const STEPS = [
    {
        id: 1,
        title: "Meet & Agree",
        description:
            "We will be happy to have you in our office with a cup of coffee and to provide you complete assistance about your required work.",
        image: image1
    },
    {
        id: 2,
        title: "Idea & Concept",
        description:
            "Our experienced team explores quick and deliberate concepts to contribute meaningfully to your project, from residential to large-scale commercial developments.",
        image: image2
    },
    {
        id: 3,
        title: "Design & Create",
        description:
            "We translate selected concepts into clear designs and deliverables, preparing everything needed to move confidently into development and execution.",
        image: image3
    },
]

function StepRow({ step, reverseOnDesktop }) {
    return (
        <div className="relative">
            <div
                className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 md:block"
                aria-hidden="true"
            >
                <div className="h-full border-l border-border" />
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background text-center text-sm font-medium text-foreground md:flex items-center justify-center shadow-sm"
                aria-hidden="true"
            >
                {step.id}
            </div>
            <div className={`grid items-center gap-6 md:grid-cols-2 md:gap-10 ${reverseOnDesktop
                    ? "md:[&>*:first-child]:col-start-2 md:[&>*:last-child]:col-start-1"
                    : ""}`}
            >

                <div className="relative">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border">
                        <img
                            src={step.image.src || "/placeholder.svg?height=360&width=640&query=placeholder"}
                            alt={step.image.alt}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-semibold tracking-tight text-foreground">{step.title}</h3>
                    <p className="mt-3 max-w-prose text-lg leading-relaxed text-muted-foreground text-pretty">
                        {step.description}
                    </p>
                </div>
            </div>
        </div >
    )
}

export default function OurProcess() {
    const pinSection = useRef(null)
    // pin section
    useEffect(() => {
        const section = pinSection.current

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])

    return (
        <div ref={pinSection} className="relative overflow-x-hidden w-full h-screen overflow-y-auto rounded-t-[50px] !z-50 bg-gray-100">
            {/* <div ref={pinSection} className="relative bg-white overflow-x-hidden w-full overflow-hidden rounded-t-[50px] !z-50"> */}
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 lg:py-20">
                {/* Eyebrow / Pill */}
                <div className="md:flex justify-around items-start">
                    <div className="border rounded-full border-black px-4 tracking-widest inline-block">OUR PROCESS</div>

                    {/* Heading */}
                    <h2 className="text-balance text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
                        We Love To Find <span className="text-primary font-bold">Solutions</span> <br /> To{" "}
                        <span className="text-primary font-bold">Complex Challenges</span>
                    </h2>
                </div>

                {/* Steps */}
                <div className="mt-10 space-y-12 md:space-y-6">
                    <StepRow step={STEPS[0]} />
                    <div className="hidden md:block">
                        <div className="mx-auto h-px w-full max-w-5xl border-t border-border/60" aria-hidden="true" />
                    </div>

                    <StepRow step={STEPS[1]} reverseOnDesktop />
                    <div className="hidden md:block">
                        <div className="mx-auto h-px w-full max-w-5xl border-t border-border/60" aria-hidden="true" />
                    </div>
                    <StepRow step={STEPS[2]} />
                </div>

                <Image
                    src={image4}
                    width={600}
                    alt={image4}
                    height={200}
                    className="mt-16"
                />
            </div>
        </div>
    )
}
