"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import image1 from "@/public/images/image65452.webp"
import Image from "next/image"


export default function ProjectSlider() {
    // sample data (replace with real projects later)
    const projects = useMemo(
        () => [
            {
                title: "Project 110 DXB",
                subtitle: "Enmaa Engineering Consultants — Dubai",
                image: image1,
            },
            {
                title: "Marina Tower",
                subtitle: "Seafront Residences — Doha",
                image: image1,
            },
            {
                title: "Atrium Offices",
                subtitle: "Business District — Abu Dhabi",
                image: image1,
            },
            {
                title: "Hillside Villas",
                subtitle: "Residential — Muscat",
                image: image1,
            },
            {
                title: "Cultural Pavilion",
                subtitle: "Arts Quarter — Riyadh",
                image: image1,
            },
        ],
        [],
    )

    const containerRef = useRef(null)
    const trackRef = useRef(null)
    const cardRefs = useRef([])
    const activeIndexRef = useRef(0)
    const [activeIndex, setActiveIndex] = useState(0)
    const autoplayRef = useRef(true)
    const resizeObserverRef = useRef(null)
    const delayedCallRef = useRef(null)

    function computeTargetX(index) {
        if (!containerRef.current || !trackRef.current) return 0
        const containerRect = containerRef.current.getBoundingClientRect()
        const card = cardRefs.current[index]
        if (!card) return 0
        const cardRect = card.getBoundingClientRect()

        // center card: viewport center minus card center
        const viewportCenter = containerRect.left + containerRect.width / 2
        const cardCenter = cardRect.left + cardRect.width / 2
        const currentX = gsap.getProperty(trackRef.current, "x") || 0
        const delta = viewportCenter - cardCenter
        return (currentX || 0) + delta
    }

    function goTo(index, opts = { animate: true }) {
        const total = projects.length
        const next = (index + total) % total
        activeIndexRef.current = next
        setActiveIndex(next)

        const x = computeTargetX(next)
        if (!trackRef.current) return
        gsap.killTweensOf(trackRef.current)

        gsap.to(trackRef.current, {
            x,
            duration: opts.animate ? 1.1 : 0.001,
            ease: "power3.inOut",
        })
    }

    function prev() {
        stopAutoplayTemporarily()
        goTo(activeIndexRef.current - 1)
    }

    function next() {
        stopAutoplayTemporarily()
        goTo(activeIndexRef.current + 1)
    }

    function scheduleAutoplay() {
        if (!autoplayRef.current) return
        if (delayedCallRef.current) delayedCallRef.current.kill()
        delayedCallRef.current = gsap.delayedCall(3.2, () => {
            goTo(activeIndexRef.current + 1)
            scheduleAutoplay()
        })
    }

    function stopAutoplayTemporarily() {
        autoplayRef.current = false
        if (delayedCallRef.current) delayedCallRef.current.kill()
        // resume autoplay after a short idle
        gsap.delayedCall(4, () => {
            autoplayRef.current = true
            scheduleAutoplay()
        })
    }

    // init
    useEffect(() => {
        // initial layout pass without animation
        requestAnimationFrame(() => goTo(0, { animate: false }))
        scheduleAutoplay()

        // responsive recalculation
        const ro = new ResizeObserver(() => {
            goTo(activeIndexRef.current, { animate: false })
        })
        resizeObserverRef.current = ro
        if (containerRef.current) ro.observe(containerRef.current)
        window.addEventListener("resize", handleResize)

        return () => {
            if (delayedCallRef.current) delayedCallRef.current.kill()
            if (resizeObserverRef.current && containerRef.current) {
                resizeObserverRef.current.unobserve(containerRef.current)
            }
            window.removeEventListener("resize", handleResize)
            gsap.killTweensOf(trackRef.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleResize() {
        goTo(activeIndexRef.current, { animate: false })
    }

    // hover pause
    function handleMouseEnter() {
        autoplayRef.current = false
        if (delayedCallRef.current) delayedCallRef.current.kill()
    }
    function handleMouseLeave() {
        autoplayRef.current = true
        scheduleAutoplay()
    }

    return (
        <section
            className="relative py-16 md:py-24"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.92)), url('/images/projects-blueprint-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-center text-balance font-sans font-semibold leading-tight text-4xl md:text-6xl">
                    {"Creative "}
                    <span className="font-extrabold text-[hsl(var(--brand))]">{"Projects That Define"}</span> {"Our Style"}
                </h2>

                <div
                    ref={containerRef}
                    className="relative mt-10 md:mt-14 overflow-visible"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        ref={trackRef}
                        className="flex gap-6 md:gap-8 will-change-transform"
                        style={{ transform: "translateX(0px)" }}
                    >
                        {projects.map((p, i) => {
                            const isActive = i === activeIndex
                            return (
                                <article
                                    key={i}
                                    ref={(el) => (cardRefs.current[i] = el)}
                                    className={[
                                        "relative shrink-0 rounded-xl overflow-hidden transition-all duration-500 ease-out",
                                        // responsive sizing: one card on mobile, ~5 on desktop
                                        "w-[78%] sm:w-[65%] md:w-[45%] lg:w-[26%] xl:w-[22%]",
                                        isActive ? "scale-105 z-10 shadow-xl" : "scale-[0.96] opacity-90",
                                    ].join(" ")}
                                >
                                    <Image
                                        src={p.image || "/placeholder.svg"}
                                        alt={p.title}
                                        width={300}
                                        height={300}
                                        className="h-full w-full object-cover" />
                                    {/* gradient overlay for text readability */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    {/* overlay text */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                                        <h3 className="text-white text-2xl md:text-4xl font-extrabold drop-shadow-md">{p.title}</h3>
                                        <div className="mt-2 h-[2px] w-16 bg-white/70" />
                                        <p className="mt-2 text-white/90 text-sm md:text-base font-medium">{p.subtitle}</p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>

                    {/* controls */}
                    <div className="mt-10 md:mt-12 flex items-center justify-center gap-4">
                        <Button
                            variant="outline"
                            size="icon"
                            aria-label="Previous project"
                            className="h-12 w-12 rounded-full bg-transparent"
                            onClick={prev}
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </Button>

                        <Button aria-label="Explore all projects" className="h-12 px-8 rounded-full">
                            Explore All
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            aria-label="Next project"
                            className="h-12 w-12 rounded-full bg-transparent"
                            onClick={next}
                        >
                            <ArrowRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}