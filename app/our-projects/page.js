"use client"

import { useEffect, useState } from "react"
import ProjectGrid from "../components/our-projects/project-grid"
import ProjectModal from "../components/our-projects/project-modal"
import projects from "@/public/images/projects.webp"
import image1 from "@/public/images/projects/448...1.jpg"
import image2 from "@/public/images/projects/1438-07.jpg"
import image3 from "@/public/images/projects/1438-17.jpg"
import image4 from "@/public/images/projects/1438-19.jpg"
import image5 from "@/public/images/projects/1841-01.jpg"
import image6 from "@/public/images/projects/1841-02.jpg"
import Image from "next/image"
import ServicesBanner from "../components/services-banner"
import { useSearchParams } from "next/navigation"

const LOCATIONS = ["ABUDHABI", "DUBAI", "SHARJAH", "AJMAN"]
const PROJECTS = [
    {
        id: 1,
        name: "Project 401 DXB",
        location: "Umm Al Sheif",
        style: "Modern",
        type: "Modern",
        size: "30900 sq ft",
        rooms: "08 rooms",
        images: [image1, image2, image3],
        description:
            "A stunning modern villa featuring contemporary architecture with premium finishes. This luxury property includes a swimming pool, spacious living areas, and state-of-the-art amenities.",
        locationCity: "DUBAI",
    },
    {
        id: 2,
        name: "Seaside Residence",
        location: "Dubai Marina",
        style: "Contemporary",
        type: "Contemporary",
        size: "25000 sq ft",
        rooms: "06 rooms",
        images: [image4, image5, image6],
        description:
            "Elegant contemporary residence with stunning waterfront views. Features floor-to-ceiling windows, open-plan living spaces, and direct beach access.",
        locationCity: "DUBAI",
    },
    {
        id: 3,
        name: "Heritage Palace",
        location: "Old Town",
        style: "Classical",
        type: "Classical",
        size: "35000 sq ft",
        rooms: "10 rooms",
        images: [image4, image5, image6],
        description:
            "Magnificent classical palace with traditional architectural elements. Featuring ornate details, grand entrance halls, and luxurious interiors.",
        locationCity: "ABUDHABI",
    },
    {
        id: 4,
        name: "Urban Lofts",
        location: "Downtown",
        style: "Industrial",
        type: "Industrial",
        size: "18000 sq ft",
        rooms: "04 rooms",
        images: [image4, image5, image6],
        description:
            "Trendy industrial loft with exposed brick, high ceilings, and modern amenities. Perfect for contemporary living with urban convenience.",
        locationCity: "DUBAI",
    },
    {
        id: 5,
        name: "Curved Elegance",
        location: "Business Bay",
        style: "Modern",
        type: "Modern",
        size: "28000 sq ft",
        rooms: "07 rooms",
        images: [image4, image5, image6],
        description:
            "Striking modern architecture with distinctive curved design elements. Premium finishes and innovative spatial planning throughout.",
        locationCity: "DUBAI",
    },
    {
        id: 6,
        name: "Desert Oasis",
        location: "Al Barari",
        style: "Modern",
        type: "Modern",
        size: "32000 sq ft",
        rooms: "09 rooms",
        images: [image4, image5, image6],
        description:
            "Luxurious modern villa set in a serene desert landscape. Features expansive gardens, outdoor entertainment areas, and sustainable design.",
        locationCity: "DUBAI",
    },
    {
        id: 7,
        name: "Sharjah Heights",
        location: "Al Qasba",
        style: "Contemporary",
        type: "Contemporary",
        size: "22000 sq ft",
        rooms: "05 rooms",
        images: [image4, image5, image6],
        description:
            "Modern residential tower with contemporary design and premium amenities. Offering stunning city views and convenient urban living.",
        locationCity: "SHARJAH",
    },
    {
        id: 8,
        name: "Ajman Gateway",
        location: "Corniche",
        style: "Modern",
        type: "Modern",
        size: "26000 sq ft",
        rooms: "06 rooms",
        images: [image4, image5, image6],
        description:
            "Stunning waterfront property with modern architecture and panoramic sea views. Features premium finishes and exclusive amenities.",
        locationCity: "AJMAN",
    },
    {
        id: 9,
        name: "Abu Dhabi Towers",
        location: "Saadiyat Island",
        style: "Modern",
        type: "Modern",
        size: "40000 sq ft",
        rooms: "12 rooms",
        images: [image4, image5, image6],
        description:
            "Prestigious residential tower on Saadiyat Island with world-class amenities. Featuring luxury finishes, smart home technology, and exclusive services.",
        locationCity: "ABUDHABI",
    },
]

export default function Page() {
    const params = useSearchParams()
    const defaultLocation = (params.get("location") || "DUBAI").toUpperCase()
    const [selectedLocation, setSelectedLocation] = useState(defaultLocation)

    useEffect(() => {
        setSelectedLocation(defaultLocation)
    }, [defaultLocation])
    const [selectedProject, setSelectedProject] = useState(null)
    const filteredProjects = PROJECTS.filter((project) => project.locationCity === selectedLocation)
    return (
        <>
            <ServicesBanner />
            <main className="bg-background relative">
                <div className="max-w-7xl mx-auto px-4 py-16 ">
                    {/* Header */}
                    <div className="text-center relative">
                        <Image
                            src={projects}
                            width={800}
                            height={100}
                            alt="projects"
                            className="w-auto h-auto mx-auto"
                        />
                        <div className="text-center mb-12 absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <h1 className="text-4xl md:text-5xl text-nowrap font-bold mb-2">
                                <span className="text-primary">Project</span> <span className="text-foreground">Locations.</span>
                            </h1>
                        </div>
                    </div>
                    {/* Location Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {LOCATIONS.map((location) => (
                            <button
                                key={location}
                                onClick={() => setSelectedLocation(location)}
                                className={`px-2 py-2 font-bold border border-transparent transition-all ${selectedLocation === location
                                    ? "!border-primary"
                                    : "text-muted-foreground hover:border-primary"
                                    }`}
                            >
                                {location}
                            </button>
                        ))}
                    </div>
                    {/* Projects Grid */}
                    <ProjectGrid projects={filteredProjects} onProjectClick={setSelectedProject} />
                </div>
                {/* Project Modal */}
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                        allProjects={filteredProjects}
                        onProjectChange={setSelectedProject}
                    />
                )}
            </main>
        </>
    )
}