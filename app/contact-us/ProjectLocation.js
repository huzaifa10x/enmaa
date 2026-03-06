"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)


export default function ProjectLocation({ isArabic }) {
    {

        const locations = isArabic ? [
            {
                id: "Sharjah",
                name: "الشارقة",
                description:
                    "مبنى أساس – مكتب 6 و7 – شارع مليحة – منطقة المستودعات – الشارقة – الإمارات العربية المتحدة",
                icon: MapPin,
                features: ["عرض المشاريع"],
                mapEmbed:
                    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d451.04648455819586!2d55.5113347!3d25.2580728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5a2519eb4fcf%3A0x9add3920d3078245!2zRU5NQUEgRU5HSU5FRVJJTkcgQ09OU1VMVEFOVCDYpdmG2YXYp9ihINmE2YTYpdiz2KrYtNin2LHYp9iqINin2YTZh9mG2K_Ys9mK2Kk!5e0!3m2!1sen!2s!4v1761123561260!5m2!1sen!2s",
            },
            {
                id: "Dubai",
                name: "دبي",
                description:
                    "أبراج دونا – مكتب 905 و906 – شارع 64 – واحة دبي للسيليكون – دبي – الإمارات العربية المتحدة",
                icon: MapPin,
                features: ["عرض المشاريع"],
                link: "/our-projects",
                mapEmbed:
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.546712935814!2d55.3695698!3d25.1172011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42ef24a0273f%3A0x573117b316e0bda0!2z2KfZhtmF2KfYoSDZhNmE2KXYs9iq2LTYp9ix2KfYqiDYp9mE2YfZhtiv2LPZitipINmB2LHYuSDYr9io2YogLSBFbm1hYSBFbmdpbmVlcmluZyBDb25zdWx0YW50IGR1YmFp!5e0!3m2!1sen!2s!4v1761124635396!5m2!1sen!2s",
            },

            {
                id: "Abu Dhabi",
                name: "أبوظبي",
                description:
                    "أبراج شاينينغ – مكتب 2402A – شارع مبارك بن محمد – الخالدية – أبوظبي – الإمارات العربية المتحدة",
                icon: MapPin,
                features: ["عرض المشاريع"],
                mapEmbed:
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.3498833840536!2d54.34930519999999!3d24.473331100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e47811de93e67%3A0x575c1f0c45f534cb!2z2KfZhtmF2KfYoSDZhNmE2KXYs9iq2LTYp9ix2KfYqiDYp9mE2YfZhtiv2LPZitipINmB2LHYuSDYp9io2Ygg2LjYqNmKIC0gRW5tYWEgRW5naW5lZXJpbmcgQ29uc3VsdGFudCBBYnVEaGFiaQ!5e0!3m2!1sen!2s!4v1761123463468!5m2!1sen!2s",
            },

            {
                id: "Ajman",
                name: "عجمان",
                description:
                    "سارة بلازا 2 – منطقة الجرف 2 – شارع الشيخ خليفة بن زايد – عجمان – الإمارات العربية المتحدة",
                icon: MapPin,
                features: ["عرض المشاريع"],
                mapEmbed:
                    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14416.93303373329!2d55.4514874!3d25.3970015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59f88693e40d%3A0xf5b9d0d97263c316!2z2KfZhtmF2KfYoSDZhNmE2KXYs9iq2LTYp9ix2KfYqiDYp9mE2YfZhtiv2LPZitipINmB2LHYuSDYudis2YXYp9mGIC1Fbm1hYSBFbmdpbmVlcmluZyBDb25zdWx0YW50IEFqbWFu!5e0!3m2!1sen!2s!4v1761123506135!5m2!1sen!2s",
            },

        ] : [
            {
                id: "Sharjah",
                name: "Sharjah",
                description:
                    "ASAS Building - Office 6&7 - Maleha St - Warehouses Land - Sharjah - United Arab Emirates",
                icon: MapPin,
                features: ["View Projects"],
                mapEmbed:
                    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d451.04648455819586!2d55.5113347!3d25.2580728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5a2519eb4fcf%3A0x9add3920d3078245!2zRU5NQUEgRU5HSU5FRVJJTkcgQ09OU1VMVEFOVCDYpdmG2YXYp9ihINmE2YTYpdiz2KrYtNin2LHYp9iqINin2YTZh9mG2K_Ys9mK2Kk!5e0!3m2!1sen!2s!4v1761123561260!5m2!1sen!2s",
            },
            {
                id: "dubai",
                name: "Dubai",
                description:
                    "Donna Towers - Office 905,906 - 64 street - Dubai Silicon Oasis - Dubai - United Arab Emirates",
                icon: MapPin,
                features: ["View Projects"],
                link: '/our-projects',
                mapEmbed:
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.546712935814!2d55.3695698!3d25.1172011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42ef24a0273f%3A0x573117b316e0bda0!2z2KfZhtmF2KfYoSDZhNmE2KXYs9iq2LTYp9ix2KfYqiDYp9mE2YfZhtiv2LPZitipINmB2LHYuSDYr9io2YogLSBFbm1hYSBFbmdpbmVlcmluZyBDb25zdWx0YW50IGR1YmFp!5e0!3m2!1sen!2s!4v1761124635396!5m2!1sen!2s",
            },

            {
                id: "abudhabi",
                name: "Abu Dhabi",
                description:
                    "Shining Towers - Office No. 2402A - Mubarak Bin Mohammed St - Al Khalidiyah - W9 - Abu Dhabi - United Arab Emirates",
                icon: MapPin,
                features: ["View Projects"],
                mapEmbed:
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.3498833840536!2d54.34930519999999!3d24.473331100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e47811de93e67%3A0x575c1f0c45f534cb!2z2KfZhtmF2KfYoSDZhNmE2KXYs9iq2LTYp9ix2KfYqiDYp9mE2YfZhtiv2LPZitipINmB2LHYuSDYp9io2Ygg2LjYqNmKIC0gRW5tYWEgRW5naW5lZXJpbmcgQ29uc3VsdGFudCBBYnVEaGFiaQ!5e0!3m2!1sen!2s!4v1761123463468!5m2!1sen!2s",
            },
            {
                id: "Ajman",
                name: "Ajman",
                description:
                    "Sara Plaza 2, Al Jurf 2 area - Sheikh Khalifa Bin Zayed St - Ajman - United Arab Emirates",
                icon: MapPin,
                features: ["View Projects"],
                mapEmbed:
                    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14416.93303373329!2d55.4514874!3d25.3970015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59f88693e40d%3A0xf5b9d0d97263c316!2z2KfZhtmF2KfYoSDZhNmE2KXYs9iq2LTYp9ix2KfYqiDYp9mE2YfZhtiv2LPZitipINmB2LHYuSDYudis2YXYp9mGIC1Fbm1hYSBFbmdpbmVlcmluZyBDb25zdWx0YW50IEFqbWFu!5e0!3m2!1sen!2s!4v1761123506135!5m2!1sen!2s",
            },
        ]
        const sectionRef = useRef(null)
        const [selectedLocation, setSelectedLocation] = useState("Sharjah")

        const selectedLocationData = locations.find(
            (loc) => loc.id === selectedLocation
        )

        return (
            <section className="py-20 bg-white md:rounded-t-[50px] !z-[70]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8 mx-auto">
                        <div className="space-y-4">
                            {isArabic ?
                                <div className="mb-6">
                                    <h2 className="text-4xl text-end md:text-5xl text-foreground mb-2">
                                        مواقع <span className="text-primary font-bold">مكاتبنا</span>
                                    </h2>
                                    <p className="text-sm text-end text-muted-foreground">
                                        اختر موقعنا المناسب لأعمالك
                                    </p>
                                </div> :
                                <div className="mb-6">
                                    <h2 className="text-4xl md:text-5xl text-foreground mb-2">
                                        Office <span className="text-primary font-bold">Locations</span>
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        Choose from our premium business locations
                                    </p>
                                </div>

                            }

                            {isArabic ?
                                <div className="space-y-3">
                                    {locations.map((location) => {
                                        const Icon = location.icon
                                        const isSelected = selectedLocation === location.id

                                        return (
                                            <Card key={location.id}
                                                className={`p-2 cursor-pointer transition-all duration-200 hover:shadow-md ${isSelected
                                                    ? "bg-gradient-to-r from-[#01b2eb] to-primary text-primary-foreground shadow-lg"
                                                    : "bg-card hover:bg-accent"
                                                    }`}
                                                onClick={() => setSelectedLocation(location.id)}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="flex items-start min-w-0">
                                                        <div className="flex flex-wrap gap-1 mt-2">
                                                            {location.features.map((feature, index) => (
                                                                <Link href={`/ar/our-projects?location=${location.id}`} key={index}>
                                                                    <Badge
                                                                        variant={isSelected ? "secondary" : "outline"}
                                                                        className="text-xs px-2 py-0.5"
                                                                    >
                                                                        {feature}
                                                                    </Badge>
                                                                </Link>
                                                            ))}
                                                        </div>

                                                        <div>
                                                            <h3
                                                                className={`font-semibold text-end text-sm mb-1 ${isSelected
                                                                    ? "text-primary-foreground"
                                                                    : "text-foreground"
                                                                    }`}
                                                            >
                                                                {location.name}
                                                            </h3>
                                                            <p
                                                                className={`text-xs text-end leading-relaxed ${isSelected
                                                                    ? "text-primary-foreground/80"
                                                                    : "text-muted-foreground"
                                                                    }`}
                                                            >
                                                                {location.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={`p-2 rounded-lg ${isSelected
                                                            ? "bg-primary-foreground/20"
                                                            : "bg-primary/10"
                                                            }`}
                                                    >
                                                        <Icon
                                                            className={`h-5 w-5 ${isSelected
                                                                ? "text-primary-foreground"
                                                                : "text-primary"
                                                                }`}
                                                        />
                                                    </div>

                                                </div>
                                            </Card>
                                        )
                                    })}
                                </div> :
                                <div className="space-y-3">
                                    {locations.map((location) => {
                                        const Icon = location.icon
                                        const isSelected = selectedLocation === location.id

                                        return (
                                            <Card key={location.id}
                                                className={`p-2 cursor-pointer transition-all duration-200 hover:shadow-md ${isSelected
                                                    ? "bg-gradient-to-r from-[#01b2eb] to-primary text-primary-foreground shadow-lg"
                                                    : "bg-card hover:bg-accent"
                                                    }`}
                                                onClick={() => setSelectedLocation(location.id)}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div
                                                        className={`p-2 rounded-lg ${isSelected
                                                            ? "bg-primary-foreground/20"
                                                            : "bg-primary/10"
                                                            }`}
                                                    >
                                                        <Icon
                                                            className={`h-5 w-5 ${isSelected
                                                                ? "text-primary-foreground"
                                                                : "text-primary"
                                                                }`}
                                                        />
                                                    </div>
                                                    <div className="flex items-start min-w-0">
                                                        <div>
                                                            <h3
                                                                className={`font-semibold text-sm mb-1 ${isSelected
                                                                    ? "text-primary-foreground"
                                                                    : "text-foreground"
                                                                    }`}
                                                            >
                                                                {location.name}
                                                            </h3>
                                                            <p
                                                                className={`text-xs leading-relaxed ${isSelected
                                                                    ? "text-primary-foreground/80"
                                                                    : "text-muted-foreground"
                                                                    }`}
                                                            >
                                                                {location.description}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-wrap gap-1 mt-2">
                                                            {location.features.map((feature, index) => (
                                                                <Link href={`/our-projects?location=${location.id}`} key={index}>
                                                                    <Badge
                                                                        variant={isSelected ? "secondary" : "outline"}
                                                                        className="text-xs px-2 py-0.5"
                                                                    >
                                                                        {feature}
                                                                    </Badge>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        )
                                    })}
                                </div>


                            }



                        </div>
                        <div className="space-y-4">
                            {isArabic ?
                            <div className="mb-6 text-right">
                            <h2 className="text-xl font-semibold text-foreground mb-2">
                                نظرة عامة على الموقع
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                خريطة جوجل تعرض الموقع الذي اخترته
                            </p>
                        </div>
                        :
                        
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-foreground mb-2">
                                    Location Overview
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    A real Google Map showing the selected location
                                </p>
                            </div>
                        }

                            <Card className="p-2 h-[370px] relative overflow-hidden">
                                <iframe
                                    key={selectedLocationData.id}
                                    src={selectedLocationData.mapEmbed}
                                    width="100%"
                                    height="100%"
                                    allowFullScreen=""
                                    loading="lazy"
                                    className="rounded-lg border-none"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}