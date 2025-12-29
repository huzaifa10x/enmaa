'use client'

import { Card } from "@/components/ui/card"

import Image from "next/image"


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

export default function ServicesPageSlider({ images }) {
    return (
        <section className="bg-white relative flex flex-col justify-center py-10 md:rounded-t-[50px]">
            <div aria-label="Project gallery" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4">


                <div className="flex flex-col gap-8">
                    <Row items={images} reverse={false} duration="40s" />
                    {/* <Row items={imagesBottom} reverse={true} duration="40s" /> */}
                </div>
            </div>
        </section>
    )
}
