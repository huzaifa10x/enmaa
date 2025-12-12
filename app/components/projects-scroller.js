'use client'


import { Card } from "@/components/ui/card"
import image1 from "@/public/images/projects/448...1.jpg"
import image2 from "@/public/images/projects/1438-07.jpg"
import image3 from "@/public/images/projects/1438-17.jpg"
import image4 from "@/public/images/projects/1438-19.jpg"
import image5 from "@/public/images/projects/1841-01.jpg"
import image6 from "@/public/images/projects/1841-02.jpg"
import image7 from "@/public/images/projects/1841-02.jpg"
import image8 from "@/public/images/projects/1855-01.jpg"
import image9 from "@/public/images/projects/1855-02.jpg"
import image10 from "@/public/images/projects/1875-01.jpg"
import image11 from "@/public/images/projects/1883-1884-02.jpg"
import image12 from "@/public/images/projects/1902.jpg"
import image13 from "@/public/images/projects/1928.jpg"
import Image from "next/image"
import { useRef } from "react"
import gsap from "gsap"
import useGsapPin from "./hooks/useGsapPin"

const imagesTop = [image1, image2, image3, image4, image5, image12, image7, image8]
const imagesBottom = [image3, image6, image2, image9, image10, image13, image12, image11]

function Row({ items = [], reverse = false, duration = "35s" }) {
    const anim = reverse ? "animate-marquee-right" : "animate-marquee-left"

    return (
        <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className={`flex min-w-max gap-6 pr-6 will-change-transform ${anim} hover:[animation-play-state:paused]`}
                style={{ animationDuration: duration }}
            >
                {items.map((src, i) => (
                    <Card key={`row-a-${i}`} className="h-72 w-[420px] py-0 overflow-hidden rounded-xl border-0 bg-card shadow-sm">
                        <Image
                            src={src}
                            alt={`Project render ${i}`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                    </Card>
                ))}

                {/* duplicate for seamless loop */}
                {items.map((src, i) => (
                    <Card
                        key={`row-b-${i}`}
                        className="h-72 w-[420px] py-0 overflow-hidden rounded-xl border-0 bg-card shadow-sm"
                        aria-hidden="true"
                    >
                        <Image src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default function ProjectsScroller() {
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


    return (
        <section ref={sectionRef} className="bg-white relative !z-[99] h-screen flex flex-col justify-center py-10 md:rounded-t-[50px]">
            <div aria-label="Project gallery" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4">
                {/* <header className="flex items-end justify-between">
                    <PillTitle title={'Selected Projects'} />
                    <p className="text-muted-foreground text-sm">Continuous showcase</p>
                </header> */}

                <div className="flex flex-col gap-8">
                    <Row items={imagesTop} reverse={false} duration="40s" />
                    <Row items={imagesBottom} reverse={true} duration="40s" />
                </div>
            </div>
        </section>
    )
}