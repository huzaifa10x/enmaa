"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { MdOutlineEngineering } from "react-icons/md"
import { BsBuildings } from "react-icons/bs"
import { SiAffinitydesigner } from "react-icons/si"
import { FaRegHandshake } from "react-icons/fa6"
import image1 from "@/public/images/home-services/3.jpg"
import image2 from "@/public/images/home-services/4.jpg"
import image3 from "@/public/images/home-services/5.jpg"
import image4 from "@/public/images/home-services/6.jpg"
import image5 from "@/public/images/home-services/7.jpg"
import image6 from "@/public/images/home-services/558.jpg"
import image7 from "@/public/images/home-services/8145.jpg"
import image8 from "@/public/images/home-services/ae.jpg"
import gsap from "gsap"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ScrollTrigger } from "gsap/all"
import ServicesSliderMobile from "./ServicesSliderMobile"
import useGsapPin from "@/app/components/hooks/useGsapPin"

const services = [
    {
        id: 1,
        title: "الخدمات الهندسية والتصميم",
        desc: `
        <ul class=''>
            <li>دراسات الجدوى</li>
            <li>التخطيط</li>
            <li>تطوير المشاريع</li>
            <li>تقييم المشاريع الهندسية</li>
            <li>المواصفات الفنية</li>
            <li>حصر الكميات</li>
        </ul>`,
        num: "١",
        img: image1,
        icon: <MdOutlineEngineering className="text-white" size={60} />,
    },
    {
        id: 2,
        title: "خدمات التصميم",
        desc: `
        <ul class=''>
           <li>جمع البيانات</li>
           <li>فكرة التصميم</li>
           <li>التصميم المبدئي</li>
           <li>التصميم التفصيلي</li>
           <li>التصميم النهائي</li>
        </ul>`,
        num: "٢",
        img: image2,
        icon: <BsBuildings className="text-white" size={60} />,
    },
    {
        id: 3,
        title: "خدمات المناقصات",
        desc: `
        <ul class=''>
            <li>شروط العقود</li>
            <li>التقييم المبدئي للمناقصات</li>
            <li>طرح المناقصات</li>
            <li>دراسة المناقصات</li>
            <li>التقرير النهائي</li>
            <li>اختيار المقاولين</li>
        </ul>`,
        num: "٣",
        img: image3,
        icon: <SiAffinitydesigner className="text-white" size={60} />,
    },
    {
        id: 4,
        title: "الإشراف",
        desc: `
        <ul class=''>
            <li>الإشراف على عملية التنفيذ</li>
            <li>مراقبة الجودة</li>
            <li>الإشراف على الجدول الزمني والتكاليف</li>
            <li>المطالبات وإنهاء العقود</li>
        </ul>`,
        num: "٤",
        img: image4,
        icon: <FaRegHandshake className="text-white" size={60} />,
    },
    {
        id: 5,
        title: "تمثيل المالك",
        desc: `
        <ul class=''>
            <li>تمثيل المالك في موقع العمل</li>
            <li>التنسيق المباشر مع العملاء في الموقع</li>
            <li>إدارة المشروع لتحقيق الجودة المطلوبة ضمن الوقت والميزانية المحددة</li>
        </ul>`,
        num: "٥",
        img: image5,
        icon: <MdOutlineEngineering className="text-white" size={60} />,
    },
    {
        id: 6,
        title: "خدمات إدارة المشاريع",
        desc: `
        <ul class=''>
            <li>تحديد الجدول الزمني للمشروع</li>
            <li>إدارة التكاليف</li>
            <li>إدارة العلاقات بين الأطراف المعنية</li>
            <li>مراقبة الجودة</li>
            <li>إدارة الموارد</li>
            <li>تأمين الاحتياجات</li>
            <li>إدارة الملفات</li>
            <li>الإشراف والتوجيه</li>
        </ul>`,
        num: "٦",
        img: image6,
        icon: <BsBuildings className="text-white" size={60} />,
    },
    {
        id: 7,
        title: "تنفيذ وتصميم المشاريع",
        desc: `
        <ul class=''>
            <li>العمل المباشر مع المقاولين</li>
            <li>جودة وقيمة الأعمال</li>
            <li>دورة حياة المشروع</li>
            <li>خفض التكاليف</li>
            <li>الجداول الزمنية</li>
        </ul>`,
        num: "٧",
        img: image7,
        icon: <SiAffinitydesigner className="text-white" size={60} />,
    },
    {
        id: 8,
        title: "خدمات نظم المعلومات الجغرافية (GIS)",
        desc: `
        <ul class=''>
            <li>إيجاد حلول للمشاريع</li>
            <li>الخدمات الاستشارية والتخطيط الاستراتيجي</li>
            <li>تطوير نماذج البيانات</li>
            <li>التحليل، عرض البيانات وتصميم النماذج</li>
            <li>تطوير وتكامل المشاريع</li>
            <li>بناء القدرات والدعم التشغيلي</li>
        </ul>`,
        num: "٨",
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

    const sectionRef = useRef(null)

    useGsapPin(sectionRef)

    return (
        <>
            <section className="lg:block hidden relative z-40 md:rounded-t-[50px] overflow-y-hidden h-screen" ref={sectionRef}>
                <section ref={sliderRef} className="relative md:flex hidden flex-col items-center justify-center bg-gradient-to-r from-[#01b2eb] to-primary  overflow-hidden">
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
                        <div className="flex w-max group">
                            {services.map((services) => (
                                <div key={services.id}
                                    onMouseEnter={() => handleHover(services.img)}
                                    className="group relative w-[90vw] group-hover:bg-black/60 sm:w-[50vw] lg:w-[25vw] h-screen snap-center shrink-0 border-r border-white/35 overflow-hidden hover:bg-blue-500/30 duration-300 flex items-end p-6 justify-end"
                                >

                                    <div className="mb-3 me-10 font-ps absolute top-[10%] text-3xl group-hover:opacity-100 opacity-0 duration-300 font-light text-transparent font-sans!" style={{
                                        WebkitTextStroke: "1px #fff",
                                        // fontFamily: "",
                                    }}>{services.num}</div>
                                    <div className="z-10 me-10 transition-all duration-300 relative group-hover:bottom-0 bottom-12">

                                        <div className="brightness-50 group-hover:brightness-200 duration-300">
                                            {/* <div className="mb-3">{services.icon}</div> */}
                                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 text-right">
                                                {services.title}
                                            </h3>
                                            <div className="opacity-0 group-hover:block hidden group-hover:opacity-100 text-right transition-opacity duration-300 text-white text-sm" dangerouslySetInnerHTML={{ __html: services.desc }} />
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
            </section>

            <section className="md:hidden z-50">
                <section ref={sliderRef} className=' bg-white min-h-screen'>
                    <ServicesSliderMobile services={services} />
                </section>
            </section>
        </>
    )
}