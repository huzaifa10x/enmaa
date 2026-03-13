"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import image1 from "@/public/images/14.jpg"
import image2 from "@/public/images/2972.jpg"
import image3 from "@/public/images/3322.jpg"
import image5 from "@/public/images/432.jpg"
import imagearabic from "@/public/images/image17.png"
import Image from "next/image"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PillTitle from "@/app/components/pill-title"
import useGsapPin from "@/app/components/hooks/useGsapPin"

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
    {
        id: 1,
        title: "اللقاء والاتفاق",
        description:
            "يسعدنا استقبالكم في مكتبنا مع فنجان من القهوة، وتقديم الدعم الكامل لكم فيما يخص متطلبات أعمالكم.",
        image: image1,
    },
    {
        id: 2,
        title: "الفكرة والتصور",
        description:
            "يعمل فريقنا ذو الخبرة على استكشاف أفكار مدروسة وسريعة تساهم بفعالية في إنجاح مشروعكم، سواء كان سكنيًا أو تجاريًا واسع النطاق.",
        image: image2
    },
    {
        id: 3,
        title: "التصميم والتنفيذ",
        description:
            "نحوّل الأفكار المختارة إلى تصاميم واضحة ومخرجات دقيقة، مع تجهيز كل ما يلزم للانتقال بثقة إلى مرحلة التطوير والتنفيذ.",
        image: image3
    },
    {
        id: 4,
        title: "البناء والتركيب",
        description:
            "تأسست شركة إنماء للاستشارات الهندسية عام 2015 على يد نخبة من المهندسين ذوي الخبرة، وانطلقت بخطوات مدروسة للمساهمة في تطوير سوق العقارات، بما يشمل الأبراج والمباني التجارية والمستودعات والفلل والمصانع والمدارس.",
        image: image5
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

            <div
                className="pointer-events-none absolute left-1/2 top-1/2 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background text-center text-sm font-medium text-foreground md:flex items-center justify-center shadow-sm"
                aria-hidden="true"
            >
                {step.id}
            </div>

            {/* Main Grid */}
            <div className={`grid items-center gap-10 md:grid-cols-2 ${reverseOnDesktop ? "!flex-row-reverse md:flex" : ""}`}>

                {/* Text */}
                <div className={`flex flex-col justify-center text-center md:text-end ${reverseOnDesktop ? "md:w-1/2" : ""}`}>
                    <h3 className="text-3xl font-semibold tracking-tight text-foreground">
                        {step.title}
                    </h3>
                    <p className="mt-3 max-w-prose text-lg leading-relaxed text-muted-foreground text-pretty">
                        {step.description}
                    </p>
                </div>
                {/* Image */}
                <div className={`relative flex justify-center ${reverseOnDesktop ? "md:w-1/2" : ""}`}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border">
                        <Image
                            src={step.image}
                            alt={step.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function OurProcess() {
    const sectionRef = useRef(null)
    useGsapPin(sectionRef)

    return (
        <div className="relative w-full rounded-t-[50px] !z-50 bg-gray-100">
            <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:py-20">
                <div dir="rtl" className="flex flex-wrap md:justify-between items-start lg:gap-0 gap-4 text-right">
                    <PillTitle title={'آلية العمل'} />

                    <h2 className="text-balance text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
                        نحب إيجاد <span className="text-primary font-bold">الحلول</span>
                        <br />
                        للتحديات <span className="text-primary font-bold">المعقدة</span>
                    </h2>
                </div>

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
                    <StepRow step={STEPS[3]} reverseOnDesktop />
                </div>

                <Image
                    src={imagearabic}
                    width={600}
                    alt={imagearabic}
                    height={200}
                    className="mt-16"
                />
            </div>
        </div>
    )
}
