import { Card } from "@/components/ui/card"
import image1 from "@/public/images/image2342.webp"
import image2 from "@/public/images/image234223.webp"
import image3 from "@/public/images/image3455.webp"
import image4 from "@/public/images/image65452.webp"
import Image from "next/image"

const imagesTop = [
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
]

const imagesBottom = [
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,

]

function Row({ items = [], reverse = false, duration = "35s" }) {
    const anim = reverse ? "animate-[marquee-right_35s_linear_infinite]" : "animate-[marquee-left_35s_linear_infinite]"

    return (
        <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
                className={`flex min-w-max gap-6 pr-6 will-change-transform ${anim} hover:[animation-play-state:paused] marquee-reduce-motion`}
                style={{ animationDuration: duration }}
                aria-hidden="false"
            >
                {items.map((src, i) => (
                    <Card key={`row-a-${i}`} className="h-56 w-[420px] overflow-hidden rounded-xl border-0 bg-card shadow-sm">
                        <Image
                            src={src}
                            alt="Project render"
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                    </Card>
                ))}

                {/* duplicate for seamless looping */}
                {items.map((src, i) => (
                    <Card
                        key={`row-b-${i}`}
                        className="h-56 w-[420px] overflow-hidden rounded-xl border-0 bg-card shadow-sm"
                        aria-hidden="true"
                    >
                        <img src={src || "/placeholder.svg"} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default function ProjectsScroller() {
    return (
        <section aria-label="Project gallery" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-16">
            <header className="flex items-end justify-between">
                <h2 className="text-pretty text-2xl font-semibold tracking-tight">Selected Projects</h2>
                <p className="text-muted-foreground text-sm">Continuous showcase</p>
            </header>

            <div className="flex flex-col gap-8">
                <Row items={imagesTop} reverse={false} duration="36s" />
                <Row items={imagesBottom} reverse={true} duration="40s" />
            </div>
        </section>
    )
}
