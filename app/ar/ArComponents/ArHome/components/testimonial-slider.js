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
import PillTitle from "@/app/components/pill-title"
import useGsapPin from "@/app/components/hooks/useGsapPin"

const testimonials = [
    {
        id: 1,
        text: "من منازل التاون هاوس إلى الفلل الفاخرة، ومن المباني الصغيرة إلى الأبراج العالية، فإن مستشاري إنماء الهندسية جاهزون لتلبية جميع احتياجات تصميم المخططات. فريق محترف للغاية ويتمتع بأخلاق عالية وتعامل راقٍ.",
        author: "مرزا معاذ",
        image: male,
    },
    {
        id: 2,
        text: "خدمة استثنائية واهتمام كبير بالتفاصيل. الفريق بذل مجهودًا إضافيًا لضمان إنجاز مشروعنا في الوقت المحدد وضمن الميزانية.",
        author: "سارة جونسون",
        image: female,
    },
    {
        id: 3,
        text: "حلول معمارية متميزة. أسلوبهم الابتكاري حوّل رؤيتنا إلى واقع بدقة مذهلة.",
        author: "أحمد حسن",
        image: male,
    },
    {
        id: 4,
        text: "احترافية، موثوقية، وإبداع. كانت إنماء شريكنا الموثوق في عدة مشاريع على مدار السنوات.",
        author: "إيما ويلسون",
        image: female,
    },
    {
        id: 5,
        text: "المهندسون متعاونون وعلى دراية تامة بإجراءات العمل. شكر خاص للمهندس إسلام على خبرته واحترافيته في منطقة السييوخ. كل التقدير لإنماء والمهندس إسلام.",
        author: "البيضاء – الإمارات",
        image: male,
    },
    {
        id: 6,
        text: "أفضل شركة استشارية. متعاونون جدًا من البداية، وخاصة المهندسة شذى وكامل الفريق الهندسي. شكرًا لكم جميعًا على الدعم الرائع.",
        author: "فاطمة الزرعوني",
        image: female,
    },
    {
        id: 7,
        text: "من أفضل مكاتب الاستشارات الهندسية في الشارقة. أنصح بالتعامل معهم بشدة.",
        author: "عمر الأمين",
        image: male,
    },
    {
        id: 8,
        text: "فريق متميز يتمتع بتنسيق عالي واهتمام قوي بالتفاصيل طوال فترة المشروع.",
        author: "أنور عمر",
        image: male,
    },
    {
        id: 9,
        text: "إحدى أفضل شركات التصميم والاستشارات الهندسية. عمل احترافي بكل معنى الكلمة.",
        author: "ديوان جاويد",
        image: male,
    },
    {
        id: 10,
        text: "استشارات إنماء الهندسية مكتب عريق بفريق محترم. يديرون عدة مشاريع في الشارقة وبقية الإمارات بخبرة ممتازة.",
        author: "عمر الجلاف",
        image: male,
    },
    {
        id: 11,
        text: "بناءً على تجربتي في تصميم والإشراف على مشروعين في الحوشي، تتميز إنماء بالتنظيم العالي وخدمة العملاء الممتازة. شكر خاص للمهندسة شذى ومدير الحسابات أبو خالد.",
        author: "فاطمة محمد",
        image: female,
    },
    {
        id: 12,
        text: "شركة استشارية قوية واحترافية. الإدارة متعاونة وسريعة الاستجابة، وخدمة العملاء متميزة. يتم حل أي ملاحظة فورًا.",
        author: "عمار ملاص",
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


    const boxRef = useRef(null);
    useEffect(() => {
        const el = boxRef.current;

        gsap.to(el, {
            y: "-100%",
            // rotation: 360,
            duration: 5,
            scrollTrigger: {
                trigger: el,
                pin: true,
                start: "top center",
                end: "bottom top",
                scrub: true,
                pinSpacing: false,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="bg-stone-100 px-6 h-screen relative flex flex-col justify-center md:rounded-t-[50px] !z-[90]">
            <Image
                src={bg}
                width={200}
                height={200}
                alt=""
                className="w-full h-full absolute left-0"
            />
            <div>
                <div
                    className="z-10 flex max-w-7xl mx-auto w-full flex-wrap justify-between px-4 items-start lg:gap-0 gap-4 mt-15"
                    dir="rtl"
                >
                    <PillTitle title={'آراء العملاء'} />

                    <div>
                        <h2 className="text-2xl md:text-5xl mb-4 text-balance leading-tight text-right">
                            ماذا يقول
                            <span className="text-primary font-bold"> عملاؤنا </span>
                        </h2>
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
                            className="text-black px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition cursor-pointer"
                        >
                            <ArrowLeft />
                        </button>

                        <div className="flex-1" />
                        <button
                            onClick={goToNext}
                            className="text-black px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition cursor-pointer"
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
                    <div
                        className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground"
                        dir="rtl"
                    >
                        <button
                            onClick={goToNext}
                            className="font-bold text-primary hover:text-foreground transition-colors cursor-pointer"
                        >
                            التالي
                        </button>

                        <button
                            onClick={goToPrevious}
                            className="font-semibold hover:text-foreground transition-colors cursor-pointer"
                        >
                            السابق
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSlider
