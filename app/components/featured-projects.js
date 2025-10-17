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
        description: "",
        icon: Building2,
        features: [],
        coordinates: { x: 65, y: 45 },
    },
    {
        id: "abu-dhabi",
        name: "Abu Dhabi",
        description: "Capital city advantages with mainland benefits",
        icon: MapPin,
        features: ["Government Proximity", "Oil & Gas Sector", "Strategic Location"],
        coordinates: { x: 25, y: 55 },
    },
    {
        id: "Sharjah",
        name: "Sharjah",
        description: "ASAS Building - Office 6&7 - Maleha St - Warehouses Land - Sharjah - United Arab Emirates",
        icon: Globe,
        features: ["View Projects"],
        coordinates: { x: 25, y: 50 },
    },
    {
        id: "Ajman",
        name: "Ajman",
        description: "Global business setup and expansion services",
        icon: Briefcase,
        features: ["Worldwide Presence", "Cross-border Solutions", "Global Compliance"],
        coordinates: { x: 45, y: 30 },
    },
]


export default function LocationsSection() {
    const sectionRef = useRef(null)
    useEffect(() => {
        const section = sectionRef.current

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])
    const [selectedLocation, setSelectedLocation] = useState("dubai-mainland")

    const selectedLocationData = locations.find((loc) => loc.id === selectedLocation)

    return (
        <section ref={sectionRef} className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Left Section - Location Tabs */}
                    <div className="space-y-4">
                        <div className="mb-6">
                            <h2 className="text-4xl md:text-5xl text-foreground mb-2">Office <span className="text-primary font-bold">Locations</span></h2>
                            <p className="text-sm text-muted-foreground">Choose from our premium business jurisdictions</p>
                        </div>

                        <div className="space-y-3">
                            {locations.map((location) => {
                                const Icon = location.icon
                                const isSelected = selectedLocation === location.id

                                return (
                                    <Card
                                        key={location.id}
                                        className={`p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${isSelected ? "bg-gradient-to-r from-[#01b2eb] to-primary text-primary-foreground  shadow-lg" : "bg-card hover:bg-accent"
                                            }`}
                                        onClick={() => setSelectedLocation(location.id)}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`p-2 rounded-lg ${isSelected ? "bg-primary-foreground/20" : "bg-primary/10"}`}>
                                                <Icon className={`h-5 w-5 ${isSelected ? "text-primary-foreground" : "text-primary"}`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className={`font-semibold text-sm mb-1 ${isSelected ? "text-primary-foreground" : "text-foreground"}`}>
                                                    {location.name}
                                                </h3>
                                                {/* <p
                                                    className={`text-xs leading-relaxed ${isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
                                                        }`}
                                                >
                                                    {location.description}
                                                </p> */}
                                                {/* <div className="flex flex-wrap gap-1 mt-2">
                                                    {location.features.slice(0, 2).map((feature, index) => (
                                                        <Badge
                                                            key={index}
                                                            variant={isSelected ? "secondary" : "outline"}
                                                            className="text-xs px-2 py-0.5"
                                                        >
                                                            {feature}
                                                        </Badge>
                                                    ))}
                                                </div> */}
                                            </div>
                                        </div>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Section - Map Area */}
                    <div className="space-y-4">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-foreground mb-2">Location Overview</h2>
                            <p className="text-sm text-muted-foreground">map showing your selected jurisdiction</p>
                        </div>

                        <Card className="p-6 h-[310px] relative overflow-hidden">
                            {/* UAE Map Illustration */}
                            <div className="relative w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border-2 border-dashed border-slate-200">
                                {/* Map Background */}
                                <div className="absolute inset-4">
                                    <svg viewBox="0 0 400 300" className="w-full h-full">
                                        {/* UAE Outline */}
                                        <path
                                            d="M50 150 Q80 120 120 130 L180 125 Q220 120 260 140 L320 145 Q350 150 370 180 L365 220 Q360 250 320 260 L280 265 Q240 270 200 265 L160 260 Q120 255 80 240 L50 220 Q45 180 50 150 Z"
                                            fill="rgb(241 245 249)"
                                            stroke="rgb(148 163 184)"
                                            strokeWidth="2"
                                        />

                                        {/* Location Markers */}
                                        {locations.map((location) => {
                                            const isSelected = selectedLocation === location.id
                                            const x = (location.coordinates.x / 100) * 400
                                            const y = (location.coordinates.y / 100) * 300

                                            return (
                                                <g key={location.id}>
                                                    <circle
                                                        cx={x}
                                                        cy={y}
                                                        r={isSelected ? "12" : "8"}
                                                        fill={isSelected ? "rgb(59 130 246)" : "rgb(148 163 184)"}
                                                        className="transition-all duration-300 cursor-pointer"
                                                        onClick={() => setSelectedLocation(location.id)}
                                                    />
                                                    <circle
                                                        cx={x}
                                                        cy={y}
                                                        r={isSelected ? "6" : "4"}
                                                        fill="white"
                                                        className="transition-all duration-300 cursor-pointer"
                                                        onClick={() => setSelectedLocation(location.id)}
                                                    />
                                                    {isSelected && (
                                                        <text x={x} y={y - 20} textAnchor="middle" className="text-xs font-medium fill-slate-700">
                                                            {location.name.split(" ")[0]}
                                                        </text>
                                                    )}
                                                </g>
                                            )
                                        })}
                                    </svg>
                                </div>

                                {/* Map Labels */}
                                <div className="absolute top-4 right-4">
                                    <Badge variant="outline" className="bg-white">
                                        United Arab Emirates
                                    </Badge>
                                </div>
                            </div>

                            {/* Selected Location Details */}
                            {selectedLocationData && (
                                <div className="absolute bottom-6 left-6 right-6">
                                    <Card className="p-4 bg-white/95 backdrop-blur-sm border shadow-lg">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-primary/10 rounded-lg">
                                                <selectedLocationData.icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-foreground mb-1">{selectedLocationData.name}</h3>
                                                <p className="text-sm text-muted-foreground mb-3">{selectedLocationData.description}</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {selectedLocationData.features.map((feature, index) => (
                                                        <Badge key={index} variant="secondary" className="text-xs">
                                                            {feature}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            )}
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
