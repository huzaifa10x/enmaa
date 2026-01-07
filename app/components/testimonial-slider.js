"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import image1 from "@/public/images/person/professional-man-with-glasses-in-pink-shirt-smilin.jpg"
import image2 from "@/public/images/person/professional-man-in-pink-shirt-smiling - Copy.jpg"
import image3 from "@/public/images/person/smiling-curly-woman.png"
import image4 from "@/public/images/person/smiling-professional-woman.png"
import bg from "@/public/images/bg-prop422.webp"
import male from "@/public/images/male-placeholder.webp"
import female from "@/public/images/female-placeholder.webp"
import quot from "@/public/images/quots.webp"
import { gsap } from "gsap"
import Image from "next/image"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PillTitle from "./pill-title"
import useGsapPin from "./hooks/useGsapPin"

const testimonials = [
    // 🔹 Previous Reviews (UNCHANGED)
    {
        id: 1,
        text: "From townhouse to luxury villa, from small building to high rise, Ermaa engineering consultants are available to cater all your design layout needs. One of the most professional team with humble attitude.",
        author: "Mirza Maaz",
        image: male,
    },
    {
        id: 2,
        text: "Exceptional service and attention to detail. The team went above and beyond to ensure our project was completed on time and within budget.",
        author: "Sarah Johnson",
        image: female,
    },
    {
        id: 3,
        text: "Outstanding architectural solutions. Their innovative approach transformed our vision into reality with remarkable precision.",
        author: "Ahmed Hassan",
        image: male,
    },
    {
        id: 4,
        text: "Professional, reliable, and creative. Ermaa has been our trusted partner for multiple projects over the years.",
        author: "Emma Wilson",
        image: female,
    },

    // 🔹 New Reviews (ADDED)
    {
        id: 5,
        text: "The engineers are cooperative and well aware of work procedures. Special thanks to Eng. Islam for his experience and professionalism in the Siyokh area. Much appreciation to Enma and Eng. Islam.",
        author: "Albaida UAE",
        image: male,
    },
    {
        id: 6,
        text: "The best consulting company. Very cooperative from the beginning, especially Eng. Shatha and the entire engineering team. Thank you all for the great support.",
        author: "Fatima Al Zarouni",
        image: female,
    },
    {
        id: 7,
        text: "One of the best engineering consulting offices in Sharjah. Highly recommended to work with.",
        author: "Omer Alamin",
        image: male,
    },
    {
        id: 8,
        text: "A great team with close coordination and strong attention to detail throughout the project.",
        author: "Anwar Omar",
        image: male,
    },
    {
        id: 9,
        text: "One of the best design and engineering consultancy firms. Truly professional work.",
        author: "Deewan Javed",
        image: male,
    },
    {
        id: 10,
        text: "Anmaa Engineering Consultancy is a well-established office with a respectful team. They manage multiple projects across Sharjah and other Emirates with excellent expertise.",
        author: "Omar Aljallaf",
        image: male,
    },
    {
        id: 11,
        text: "Based on my experience designing and supervising two projects in Al-Hawshi, Anmaa is highly organized with excellent customer service. Special thanks to Eng. Shatha and accounts manager Abu Khalid.",
        author: "Fatima Mohammed",
        image: female,
    },
    {
        id: 12,
        text: "A strong and professional consultancy. Management is respectful and responsive, and customer service is outstanding. Any issue is resolved immediately.",
        author: "Ammar Malas",
        image: male,
    },
];


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
    const sectionRef = useRef(null)
    useGsapPin(sectionRef)

    return (
        <section className="bg-stone-100 px-6 h-screen relative flex flex-col justify-center md:rounded-t-[50px] !z-[90]">
            <Image
                src={bg}
                width={200}
                height={200}
                alt=""
                className="w-full h-full absolute left-0"
            />
            <div>
                <div className="z-10 flex max-w-7xl mx-auto w-full flex-wrap justify-between px-4 items-start lg:gap-0 gap-4 mt-15">
                    <PillTitle title={'Testimonials'} />

                    <div className="mb-">
                        <h2 className="text-2xl md:text-5xl mb-4 text-balance">What
                            <span className="text-primary font-bold"> Our Client’s </span>Say</h2>
                    </div>
                </div>

                <div className="w-full max-w-4xl mx-auto px-4 md:py-12 py-5 relative z-10">
                    {/* Quote Icon */}
                    <div className="flex justify-center">
                        <Image
                            src={quot}
                            width={100}
                            height={100}
                            alt=""
                            className="mb-10 w-11"
                        />
                    </div>

                    {/* Testimonial Content */}
                    <div className="text-center mb-8">
                        <p className="text-lg text-foreground mb-6 leading-relaxed">{currentTestimonial.text}</p>
                        <h3 className="text-xl font-semibold text-foreground">{currentTestimonial.author}</h3>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="hidden lg:flex items-center justify-between md:mb-12 mb-5">
                        <button
                            onClick={goToPrevious}
                            className="text-black px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
                        >
                            <ArrowLeft />
                        </button>

                        <div className="flex-1" />
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
                                    className={`h-12 w-12 rounded-full object-cover border-2 transition-all duration-300 ${index === currentIndex ? "blur-none opacity-100 border-orange-400" : "blur-[2px] border-0 opacity-100"
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
        </section>
    )
}

export default TestimonialSlider
