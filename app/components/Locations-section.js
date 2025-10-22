"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building2, Globe, Briefcase } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const locations = [
    {
        id: "dubai",
        name: "Dubai",
        description:
            "ASAS Building - Office 6&7 - Maleha St - Warehouses Land - Sharjah - United Arab Emirates",
        icon: Building2,
        features: ["View Projects"],
        mapEmbed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14438.265656058287!2d55.296249!3d25.276987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434dd1b3bb85%3A0x9d5d5fcd7dc0c081!2sDubai!5e0!3m2!1sen!2sae!4v1719327072809!5m2!1sen!2sae",
    },
    {
        id: "abu-dhabi",
        name: "Abu Dhabi",
        description:
            "ASAS Building - Office 6&7 - Maleha St - Warehouses Land - Sharjah - United Arab Emirates",
        icon: MapPin,
        features: ["View Projects"],
        mapEmbed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14455.19189294095!2d54.3773438!3d24.453884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e667b5de6e97b%3A0x8587f4c11da74c76!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1719327156708!5m2!1sen!2sae",
    },
    {
        id: "Sharjah",
        name: "Sharjah",
        description:
            "ASAS Building - Office 6&7 - Maleha St - Warehouses Land - Sharjah - United Arab Emirates",
        icon: Globe,
        features: ["View Projects"],
        mapEmbed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14433.064746014953!2d55.420931!3d25.346255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5e55f2f1f56f%3A0x3573c2745af44188!2sSharjah!5e0!3m2!1sen!2sae!4v1719327213222!5m2!1sen!2sae",
    },
    {
        id: "Ajman",
        name: "Ajman",
        description:
            "ASAS Building - Office 6&7 - Maleha St - Warehouses Land - Sharjah - United Arab Emirates",
        icon: Briefcase,
        features: ["View Projects"],
        mapEmbed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14431.745514217244!2d55.513643!3d25.405216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f59a2dd730b7%3A0x820dc3f865f23ec7!2sAjman!5e0!3m2!1sen!2sae!4v1719327274859!5m2!1sen!2sae",
    },
]

export default function LocationsSection() {
    const sectionRef = useRef(null)
    const [selectedLocation, setSelectedLocation] = useState("dubai")

    useEffect(() => {
        const section = sectionRef.current

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            onEnter: () => {
                gsap.to(section, {
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    duration: 0.3,
                    ease: "power2.out"
                })
            },
            onLeaveBack: () => {
                gsap.to(section, {
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    duration: 0.3,
                    ease: "power2.out"
                })
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])

    const selectedLocationData = locations.find(
        (loc) => loc.id === selectedLocation
    )

    return (
        <section ref={sectionRef} className="py-20 h-screen bg-white rounded-t-[50px] !z-[70]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 mx-auto">
                    {/* Left Section - Location Tabs */}
                    <div className="space-y-4">
                        <div className="mb-6">
                            <h2 className="text-4xl md:text-5xl text-foreground mb-2">
                                Office <span className="text-primary font-bold">Locations</span>
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Choose from our premium business jurisdictions
                            </p>
                        </div>

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
                                                        <Badge
                                                            key={index}
                                                            variant={isSelected ? "secondary" : "outline"}
                                                            className="text-xs px-2 py-0.5"
                                                        >
                                                            {feature}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Section - Google Map Iframe */}
                    <div className="space-y-4">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-foreground mb-2">
                                Location Overview
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Real Google Map showing your selected location
                            </p>
                        </div>

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
