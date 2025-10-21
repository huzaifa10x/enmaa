"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import image1 from "@/public/images/person/professional-man-with-glasses-in-pink-shirt-smilin.jpg"
import image2 from "@/public/images/person/professional-man-in-pink-shirt-smiling - Copy.jpg"
import image3 from "@/public/images/person/smiling-curly-woman.png"
import image4 from "@/public/images/person/smiling-professional-woman.png"
import bg from "@/public/images/bg-prop422.webp"
import quot from "@/public/images/quots.webp"
import { gsap } from "gsap"
import Image from "next/image"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants"

const testimonials = [
    {
        id: 1,
        text: "From townhouse to luxury villa, from small building to high rise, Ermaa engineering consultants are available to cater all your design layout needs. One of the most professional team with humble attitude.",
        author: "Mirza Maaz",
        image: image1,
    },
    {
        id: 2,
        text: "Exceptional service and attention to detail. The team went above and beyond to ensure our project was completed on time and within budget.",
        author: "Sarah Johnson",
        image: image2,
    },
    {
        id: 3,
        text: "Outstanding architectural solutions. Their innovative approach transformed our vision into reality with remarkable precision.",
        author: "Ahmed Hassan",
        image: image3,
    },
    {
        id: 4,
        text: "Professional, reliable, and creative. Ermaa has been our trusted partner for multiple projects over the years.",
        author: "Emma Wilson",
        image: image4,
    },
]


gsap.registerPlugin(ScrollTrigger)

function TestimonialSlider() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    const currentTestimonial = testimonials[currentIndex]

    const pinSection = useRef(null)
    useEffect(() => {
        const section = pinSection.current

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
        <div ref={pinSection} className="bg-stone-100 px-4 h-screen relative flex flex-col justify-center rounded-t-[50px] !z-[90] overflow-x-hidden">
            {/* // <div className="bg-stone-100 py-16 px-4 relative rounded-t-[50px] !z-[70] overflow-x-hidden no-scrollbar"> */}
            <Image
                src={bg}
                width={200}
                height={200}
                alt=""
                className="w-full h-full absolute left-0"
            />
            <div className="flex justify-evenly items-start w-full">
                <div className="border rounded-full border-black px-4 tracking-widest inline-block">Testimonials</div>

                <div className="mb-">
                    <h2 className="text-4xl md:text-5xl mb-4 text-balance">What Our <span className="text-primary font-bold">Client’s Say</span> our </h2>
                    {/* <p className="text-[#01b2eb] text-lg">From One Of The Top Civil Engineering Companies In Sharjah</p> */}
                </div>
                <div></div>
            </div>

            <div className="w-full max-w-4xl mx-auto px-4 py-12 relative z-10">
                {/* Quote Icon */}
                <div className="flex justify-center">
                    <Image
                        src={quot}
                        width={100}
                        height={100}
                        alt=""
                        className="mb-10"
                    />
                </div>

                {/* Testimonial Content */}
                <div className="text-center mb-8">
                    <p className="text-lg text-foreground mb-6 leading-relaxed">{currentTestimonial.text}</p>
                    <h3 className="text-xl font-semibold text-foreground">{currentTestimonial.author}</h3>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center justify-between mb-12">
                    {/* <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-transparent"
                        aria-label="Previous testimonial"
                        >
                        <ChevronLeft className="h-5 w-5" />
                    </Button> */}
                    <button
                        onClick={goToPrevious}
                        className="text-black px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
                    >
                        <ArrowLeft />
                    </button>

                    <div className="flex-1" />

                    {/* <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-transparent"
                        aria-label="Next testimonial"
                        >
                        <ChevronRight className="h-5 w-5" />
                    </Button> */}

                    <button
                        onClick={goToNext}
                        className="text-black px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
                    >
                        <ArrowRight />
                    </button>

                </div>

                {/* Profile Pictures with Blur Effect */}
                <div className="flex items-center justify-center">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={testimonial.id}
                            onClick={() => goToSlide(index)}
                            className={`relative transition-all duration-300 ${index === currentIndex ? "scale-100" : "scale-75"}`}
                            aria-label={`Go to ${testimonial.author}'s testimonial`}
                        >
                            <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.author}
                                className={`h-16 w-16 rounded-full object-cover border-2 transition-all duration-300 ${index === currentIndex ? "blur-none opacity-100 border-orange-400" : "blur-[2px] border-0 opacity-100"
                                    }`}
                            />
                        </button>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center justify-center gap-4 mt-8 text-sm text-muted-foreground">
                    <button onClick={goToPrevious} className="font-semibold hover:text-foreground transition-colors">
                        . Previous
                    </button>
                    <button onClick={goToNext} className="font-bold text-primary hover:text-foreground transition-colors">
                        Next .
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlider
