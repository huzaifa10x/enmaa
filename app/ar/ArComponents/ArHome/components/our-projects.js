"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import image418 from "@/public/images/418.jpg"
import image590 from "@/public/images/590.jpg"
import image1717 from "@/public/images/1717.jpg"
import image416 from "@/public/images/416.jpg"
import image1703 from "@/public/images/image1703.webp"
import bgProp from "@/public/images/bg-prop.webp"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import Link from "next/link"
import PillTitle from "@/app/components/pill-title"
import useGsapPin from "@/app/components/hooks/useGsapPin"

gsap.registerPlugin(ScrollTrigger)

// const items = [
//     {
//         id: 1,
//         type: "image",
//         src: image6,
//         title: "مشروع 110 – دبي",
//         description: "إنماء للاستشارات الهندسية – دبي",
//     },
//     {
//         id: 2,
//         type: "image",
//         src: image2,
//         title: "تصميم فيلا فاخرة",
//         description: "سكن خاص – أبوظبي",
//     },
//     {
//         id: 3,
//         type: "iframe",
//         src: image3,
//         title: "برج مكاتب حديث",
//         description: "مجموعة سكاي لاين – وسط مدينة دبي",
//     },
//     {
//         id: 4,
//         type: "iframe",
//         src: image4,
//         title: "مجمع تجاري",
//         description: "شركة النور للتطوير العقاري – الشارقة",
//     },
//     {
//         id: 5,
//         type: "image",
//         src: image5,
//         title: "مسكن على الواجهة البحرية",
//         description: "نخلة جميرا – دبي",
//     },
// ]

const items = [
    {
        id: 3,
        type: "image",
        src: image418,
        title: "مستودع صناعي",
        description: `
    <div>
        <div>شركة الفيل للتجارة ذ.م.م – فرع دبي</div>
        <div>سيح شعيب 4، دبي</div>
        <div>إجمالي مواقف السيارات المقترحة 11</div>
        <div>مستودع صناعي (أرضي + ميزانين)</div>
        <div>المساحة المبنية 4912.14 م²</div>
    </div>`
    },
    {
        id: 4,
        type: "image",
        src: image590,
        title: "حضانة",
        description: `
    <div>
        <div>الشارقة – الحمرية الشرقية</div>
        <div>إجمالي مواقف السيارات المقترحة 20</div>
        <div>مشروع حضانة مقترح – طابق أرضي فقط <br/> + غرفة حارس + مبنى خدمات + سور</div>
        <div>المساحة المبنية 2004.19 م²</div>
    </div>`
    },
    {
        id: 5,
        type: "image",
        src: image1703,
        title: "برج – تجاري <br/> مكاتب / سكني",
        description: `
    <div>
        <div>الشارقة – الخان</div>
        <div>إجمالي مواقف السيارات المقترحة 526</div>
        <div>مبنى برج (قبو + أرضي + 5 مواقف + طابق صحي + طابقين خدمات <br/> + 48 طابق)</div>
        <div>المساحة المبنية 4211.67 م²</div>
    </div>`
    },
    {
        id: 6,
        type: "image",
        src: image1717,
        title: "مبنى – تجاري <br/> مكاتب / سكني",
        description: `
    <div>
        <div>الشارقة – مويلح التجارية</div>
        <div>مبنى (أرضي + 4 طوابق + 50% من الطابق الخامس + السطح)</div>
        <div>المساحة المبنية 415.53 م²</div>
    </div>`
    },
    {
        id: 7,
        type: "image",
        src: image416,
        title: "مدرسة مقترحة + حضانة",
        description: `
    <div>
        <div>المدرسة الفرنسية الدولية الخاصة</div>
        <div>مدرسة مقترحة (قبو + أرضي + طابقين + سطح) + حضانة</div>
        <div>الهبية السادسة، دبي</div>
        <div>المساحة المبنية 1490.00 م²</div>
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
    useEffect(() => {
        const interval = setInterval(() => next(), 3000)
        return () => clearInterval(interval)
    }, [index])

    // const next = () => setIndex((prev) => (prev + 1) % items.length)
    // const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length)

    // const getPositionClass = (i) => {
    //     const diff = (i - index + items.length) % items.length

    //     switch (diff) {
    //         case 0: // main
    //             return "z-30 lg:scale-130 md:scale-60 scale-60 opacity-100 translate-x-0"
    //         case 1: // right
    //             return "z-20 lg:scale-100 md:scale-40 scale-50 opacity-100 !md:translate-x-[5me] translate-x-[18em]"
    //         case 2: // far right (slightly visible)
    //             return "z-10 lg:scale-80 md:scale-30 scale-20 opacity-100 !md:translate-x-[8me] translate-x-[28em]"
    //         case items.length - 1: // left
    //             return "z-20 lg:scale-100 md:scale-40 scale-50 opacity-100 !md:-translate-x-[5me] -translate-x-[18em]"
    //         case items.length - 2: // far left (slightly visible)
    //             return "z-10 lg:scale-80 md:scale-30 scale-20 opacity-100 !md:translate-x-[8me] -translate-x-[28em]"
    //         default:
    //             return "opacity-0 lg:scale-50 md:scale-30"
    //     }
    // }

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
                return "z-20 lg:scale-100 md:scale-50 scale-30 opacity-100 brightness-50 -translate-x-[13rem] md:-translate-x-[21rem] lg:-translate-x-[38rem]"

            case items.length - 2: // far left
                return "z-10 lg:scale-0 md:scale-40 scale-0 opacity-80 brightness-50 -translate-x-[6rem] md:-translate-x-[20rem] lg:-translate-x-[48rem]"

            default:
                return "opacity-0 lg:scale-50 md:scale-30"
        }
    }

    return (
        // <section ref={sectionRef} className="relative w-full h-screen flex flex-col py-10 overflow-x-hidden items-center justify-center rounded-t-[50px] !z-[60] bg-neutral-200 -mt-10">
        //     <div
        //         dir="rtl"
        //         className="flex flex-wrap md:justify-between w-full max-w-7xl items-start lg:gap-0 gap-4 px-6 text-right"
        //     >
        //         <PillTitle title="مشاريعنا" />

        //         <div className="md:mb-16 max-w-[500px]">
        //             <h2 className="text-4xl md:text-5xl mb-4 text-balance">
        //                 مشاريع <span className="text-primary font-bold">إبداعية</span> تعكس
        //                 <br />
        //                 أسلوبنا
        //             </h2>
        //         </div>
        //     </div>

        //     <Image
        //         src={bgProp}
        //         width={300}
        //         height={300}
        //         alt=""
        //         className="absolute w-full h-full"
        //     />
        //     {/* Carousel container */}
        //     <div className="relative w-[40em] h-[25em] flex items-center justify-center">
        //         <ul className="relative w-full h-full flex items-center justify-center">
        //             {items.map((item, i) => (
        //                 <li
        //                     key={item.id}
        //                     className={`absolute transition-all duration-500 ease-in-out w-[500px] h-[281px] bg-gray-800 overflow-hidden shadow-2xl transform ${getPositionClass(
        //                         i
        //                     )}`}
        //                 >
        //                     <div className="relative w-full h-full">
        //                         <Image
        //                             src={item.src}
        //                             alt={`Slide ${item.id}`}
        //                             width={500}
        //                             height={481}
        //                             className="w-full h-full object-cover brightness-75"
        //                         />

        //                         {/* Overlay Text */}
        //                         <div className="absolute text-end inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent">
        //                             <h3 className="text-3xl font-bold text-cyan-400 mb-1">
        //                                 {item.title}
        //                             </h3>
        //                             <p className="text-white text-sm opacity-90">
        //                                 {item.description}
        //                             </p>
        //                         </div>
        //                     </div>
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>

        //     {/* Buttons */}
        //     <div className="relative z-10 flex justify-center gap-4 mt-8">
        //         <button
        //             onClick={prev}
        //             className="text-black px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
        //         >
        //             <ArrowLeft />
        //         </button>
        //         <Link href={'our-projects'} className="bg-neutral-800 text-white px-6 border border-neutral-400 py-2 rounded-full hover:bg-black transition" >
        //             Explore All
        //         </Link>
        //         <button
        //             onClick={next}
        //             className="text-black px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
        //         >
        //             <ArrowRight />
        //         </button>
        //     </div>
        // </section>

          <section ref={sectionRef} className="relative w-full  flex flex-col py-10 overflow-x-hidden items-center justify-center rounded-t-[50px] !z-[60] bg-neutral-200 -mt-10">
                    <div className="flex flex-wrap md:justify-between w-full max-w-7xl items-start lg:gap-0 gap-4 px-6">
                         <PillTitle title="مشاريعنا" />

                        <div className="md:mb-16 max-w-[500px]">
                             <h2 className="text-4xl md:text-5xl mb-4 text-balance text-right">
                         مشاريع <span className="text-primary font-bold">إبداعية</span> تعكس
                         <br />
                         أسلوبنا
                     </h2>
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
                                            <div className="text-black text-right text-xs  opacity-90" dangerouslySetInnerHTML={{ __html: item.description }} />
                                            <div className="font-bold text-right text-black mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
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
        
                        <div className="flex items-center gap-4 lg-mt-0 mt-5">
                            <button
                                onClick={prev}
                                className="text-black lg:px-6 lg:py-2 px-3 border border-neutral-400 rounded-full hover:bg-neutral-400 transition"
                            >
                                <ArrowLeft className="lg:w-10 w-3" />
                            </button>
                            <Link href={'our-projects'} className="bg-neutral-800 text-xs text-white text-nowrap lg:px-6 px-3 border border-neutral-400 py-1 lg:py-2 rounded-full hover:bg-black transition" >
                                استكشاف الكل
                                
                            </Link>
                            <button
                                onClick={next}
                                className="text-black lg:px-6 lg:py-2 px-3 border border-neutral-400 rounded-full hover:bg-neutral-400 transition"
                            >
                                <ArrowRight className="lg:w-10 w-3" />
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