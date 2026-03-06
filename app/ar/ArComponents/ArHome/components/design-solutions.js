"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import image1 from "@/public/images/projects/1855-02.jpg";
import image2 from "@/public/images/projects/1841-02.jpg";
import image3 from "@/public/images/projects/1855-01.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsapPin from "@/app/components/hooks/useGsapPin";
import PillTitle from "@/app/components/pill-title";
gsap.registerPlugin(ScrollTrigger);

const designSolutions = [
    {
        id: 1,
        number: "01.",
        title: "تصميم سكني",
        description:
            "لدينا خبرة واسعة في تصميم أنواع مختلفة من المساكن، من مباني الشقق الصغيرة إلى المنازل العائلية الفاخرة والمعقولة التكلفة. نحن متخصصون في العمارة المعاصرة والحديثة مع التركيز على التصميم الجيد.",
        image: image1,
        readMore: "اقرأ المزيد",
    },
    {
        id: 2,
        number: "02.",
        title: "تصميم المكاتب",
        description:
            "مساحات مكتبية احترافية مصممة لتعزيز الإنتاجية وبيئة العمل الحديثة. فريقنا يبتكر تصاميم عملية تعزز التعاون مع الحفاظ على الجاذبية الجمالية.",
        image: image2,
        readMore: "اقرأ المزيد",
    },
    {
        id: 3,
        number: "03.",
        title: "التصميم التجاري",
        description:
            "حلول تصميم تجارية شاملة للتجزئة والضيافة والمشاريع متعددة الاستخدامات. نركز على إنشاء مساحات تدعم نجاح الأعمال من خلال تصميم مدروس.",
        image: image3,
        readMore: "اقرأ المزيد",
    },
];


export default function DesignSolutions() {
    const [hoveredId, setHoveredId] = useState(1);
    const sectionRef = useRef(null);
    useGsapPin(sectionRef)

    return (
        <section ref={sectionRef} dir="rtl" className="bg-neutral-200 relative px-0 lg:h-screen no-scrollbar md:rounded-t-[50px] text-white py-16 !z-[80]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap md:justify-between items-start lg:gap-0 gap-4" dir="rtl">
                    <PillTitle title="حلول التصميم" />
                    <div className="">
                        <h2 className="text-3xl md:text-5xl text-black text-balance">
                            وصف <br className="lg:block hidden" />
                            <span className="text-primary font-bold">
                                عملية العمارة
                            </span>
                            <br className="lg:block hidden" /> للحصول على نتائج استثنائية.
                        </h2>
                    </div>
                </div>


                <div className="space-y-1">
                    {designSolutions.map((solution) => (
                        <div
                            key={solution.id}
                            className={cn(
                                "relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer border-b border-white last:border-b-0",
                                hoveredId === solution.id
                                    ? "bg-neutral-200 py-8"
                                    : "py-6 hover:bg-gray-800/30"
                            )}
                            onMouseEnter={() => setHoveredId(solution.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="flex items-start gap-8">
                                <div className="flex-1">
                                    <div className="flex items-center gap-6 mb-4">
                                        <span className="text-2xl md:text-3xl font-bold text-[#01b2eb]">
                                            {solution.number}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl text-neutral-600 font-bold">
                                            {solution.title}
                                        </h3>
                                    </div>

                                    <div
                                        className={cn(
                                            "transition-all duration-500 ease-in-out overflow-hidden",
                                            hoveredId === solution.id
                                                ? "max-h-96 opacity-100"
                                                : "max-h-0 opacity-0"
                                        )}
                                    >
                                        <div className="flex flex-col md:flex-row gap-6 items-start">
                                            <div className="relative w-full md:w-80 h-48 rounded-lg overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={solution.image || "/placeholder.svg"}
                                                    alt={solution.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div className="flex-1">
                                                <p className="text-neutral-600 leading-relaxed mb-4">
                                                    {solution.description}
                                                </p>
                                                {/* <button className="text-gray-600 text-sm font-medium hover:text-neutral-400 transition-colors">
                                                    {solution.readMore}
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
