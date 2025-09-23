"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import image1 from "@/public/images/person/professional-man-in-dark-shirt-smiling.jpg"
import image2 from "@/public/images/person/professional-man-in-pink-shirt.jpg"
import image3 from "@/public/images/person/professional-man-with-glasses-in-pink-shirt-smilin.jpg"
import image4 from "@/public/images/person/smiling-curly-woman.png"
import image5 from "@/public/images/person/smiling-professional-woman.png"
import image6 from "@/public/images/person/professional-woman-short-hair-smile.png"
import image7 from "@/public/images/person/professional-man-with-beard-in-orange-shirt.jpg"
import { gsap } from "gsap"
import Image from "next/image"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const teamMembers = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Product Manager",
        image: image1,
        testimonial: "This platform has revolutionized how our team collaborates. The real-time features are incredible!",
    },
    {
        id: 2,
        name: "Marcus Chen",
        role: "Software Engineer",
        image: image2,
        testimonial: "Task tracking has never been easier. I can focus on coding while staying organized.",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "UX Designer",
        image: image3,
        testimonial: "The performance insights help us make data-driven decisions every day.",
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Marketing Director",
        image: image4,
        testimonial: "Our workflow efficiency has increased by 40% since implementing this solution.",
    },
    {
        id: 5,
        name: "Lisa Park",
        role: "Operations Lead",
        image: image5,
        testimonial: "The collaboration tools have brought our remote team closer together than ever.",
    },
    {
        id: 6,
        name: "James Wilson",
        role: "Tech Lead",
        image: image6,
        testimonial: "Project delivery times have improved significantly with these tracking features.",
    },
    {
        id: 7,
        name: "Alex Kumar",
        role: "Data Analyst",
        image: image7,
        testimonial: "The analytics dashboard provides exactly the insights we need to optimize performance.",
    },
]


gsap.registerPlugin(ScrollTrigger)

function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const sliderRef = useRef(null)
    const testimonialRef = useRef(null)
    const dotsRef = useRef(null)

    // helper: numeric transform values for GSAP
    const getTransformValues = (position) => {
        const angle = position * 12
        const translateZ = Math.abs(position) * -60
        const translateX = position * 140
        const scale = 1 - Math.abs(position) * 0.08
        const opacity = Math.abs(position) > 2 ? 0.2 : 1 - Math.abs(position) * 0.15
        const zIndex = 10 - Math.abs(position)

        return {
            x: translateX,
            z: translateZ,
            rotationY: angle,
            scale,
            opacity,
            zIndex,
        }
    }

    // returns array of visible members (center +/- 3)
    const getVisibleMembers = () => {
        const visible = []
        for (let i = -3; i <= 3; i++) {
            const index = (currentIndex + i + teamMembers.length) % teamMembers.length
            visible.push({
                ...teamMembers[index],
                position: i,
            })
        }
        return visible
    }

    // animate testimonial text + update dots
    const animateSlideTransition = (newIndex, direction = 1) => {
        const tl = gsap.timeline()

        tl.to(testimonialRef.current, {
            opacity: 0,
            x: direction === 1 ? -50 : 50,
            duration: 0.35,
            ease: "power2.inOut",
        }).to(
            testimonialRef.current,
            {
                opacity: 1,
                x: 0,
                duration: 0.45,
                ease: "power2.out",
            },
            0.25,
        )

        // dots
        if (dotsRef.current) {
            gsap.to(dotsRef.current.children, {
                scale: 1,
                duration: 0.18,
                ease: "power2.out",
            })
            gsap.to(dotsRef.current.children[newIndex], {
                scale: 1.4,
                duration: 0.28,
                ease: "back.out(1.6)",
            })
        }
    }

    // animate the card positions using GSAP
    const updateSlides = (animate = true) => {
        const slides = sliderRef.current?.querySelectorAll(".slide-item")
        if (!slides || slides.length === 0) return

        const visible = getVisibleMembers()

        visible.forEach((member, i) => {
            const el = slides[i]
            if (!el) return
            const vals = getTransformValues(member.position)
            el.style.zIndex = vals.zIndex

            if (animate) {
                gsap.to(el, {
                    duration: 0.8,
                    x: vals.x,
                    z: vals.z,
                    rotationY: vals.rotationY,
                    scale: vals.scale,
                    opacity: vals.opacity,
                    ease: "power3.out",
                    overwrite: true,
                })
            } else {
                gsap.set(el, {
                    x: vals.x,
                    z: vals.z,
                    rotationY: vals.rotationY,
                    scale: vals.scale,
                    opacity: vals.opacity,
                })
            }
        })
    }

    // autoplay
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const newIndex = (prev + 1) % teamMembers.length
                // animate testimonial immediately for snappy feel
                animateSlideTransition(newIndex, 1)
                return newIndex
            })
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    // initial layout on mount
    useEffect(() => {
        // small timeout to ensure DOM nodes exist
        const id = setTimeout(() => {
            updateSlides(false)
            // initial dot scale
            if (dotsRef.current) {
                gsap.set(dotsRef.current.children, { scale: 1 })
                gsap.set(dotsRef.current.children[currentIndex], { scale: 1.4 })
            }
        }, 30)
        return () => clearTimeout(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // animate slides whenever currentIndex changes
    useEffect(() => {
        updateSlides(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex])

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % teamMembers.length
        setCurrentIndex(newIndex)
        animateSlideTransition(newIndex, 1)
        setIsAutoPlaying(false)
    }

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length
        setCurrentIndex(newIndex)
        animateSlideTransition(newIndex, -1)
        setIsAutoPlaying(false)
    }

    const handleMouseEnter = () => {
        setIsAutoPlaying(false)
        gsap.to(sliderRef.current?.querySelectorAll(".slide-item"), {
            scale: "1.09",
            duration: 0.28,
            ease: "power2.out",
            overwrite: true,
        })
    }

    const handleMouseLeave = () => {
        setIsAutoPlaying(true)
        gsap.to(sliderRef.current?.querySelectorAll(".slide-item"), {
            scale: 1,
            duration: 0.28,
            ease: "power2.out",
            overwrite: true,
        })
    }

    const handleDotClick = (index) => {
        if (index === currentIndex) return
        const direction = index > currentIndex ? 1 : -1
        setCurrentIndex(index)
        animateSlideTransition(index, direction)
        setIsAutoPlaying(false)
    }

    const pinSection = useRef(null)
    useEffect(() => {
        const section = pinSection.current

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom", // 👈 dynamic height
            pin: true,
            pinSpacing: false, // 👈 spacing enable kardo
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])

    return (
        <div ref={pinSection} className="bg-stone-100 h-screen py-16 px-4 relative rounded-t-[50px] !z-[70] overflow-y-auto">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-light text-[#01b2eb] mb-4">Streamline Your Team</h1>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#264395] mb-6">Supercharge Your Workflow</h2>
                    <p className="text-lg text-[#01b2eb] mb-8 max-w-2xl mx-auto">
                        All-in-one platform to plan, collaborate, and deliver — faster and smarter.
                    </p>
                    <Button className="bg-[#264395] hover:bg-[#01b2eb] text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        Get started for Free
                    </Button>
                </div>

                <div className="relative">
                    <div
                        ref={sliderRef}
                        className="relative h-80 mx-auto"
                        style={{
                            perspective: "1200px",
                            perspectiveOrigin: "center center",
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            {getVisibleMembers().map((member) => (
                                // ⚠️ use stable key (member.id) so DOM nodes update instead of remount
                                <div
                                    key={member.id}
                                    className="slide-item absolute"
                                    style={{ willChange: "transform, opacity" }}
                                >
                                    <div className="w-48 h-64 rounded-2xl overflow-hidden shadow-2xl bg-white hover:shadow-3xl transition-all duration-300 cursor-pointer">
                                        <Image
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>

                    <div ref={testimonialRef} className="mt-8 max-w-2xl mx-auto">
                        <p className="text-xl text-gray-700 italic mb-4">{teamMembers[currentIndex].testimonial}</p>
                        <div className="text-gray-600">
                            <p className="font-semibold">{teamMembers[currentIndex].name}</p>
                            <p className="text-sm">{teamMembers[currentIndex].role}</p>
                        </div>
                    </div>

                    <div ref={dotsRef} className="flex justify-center space-x-2 mt-6">
                        {teamMembers.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${index === currentIndex ? "bg-gray-800 w-8 shadow-md" : "bg-gray-400 w-2 hover:bg-gray-600"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlider
