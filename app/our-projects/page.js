import { Suspense } from "react"
import ProjectsPageContent from "./ProjectsPageContent"
import image1 from "@/public/images/projects/448...1.jpg"
import image2 from "@/public/images/projects/1438-07.jpg"
import image3 from "@/public/images/projects/1438-17.jpg"
import image4 from "@/public/images/projects/1438-19.jpg"
import image5 from "@/public/images/projects/1841-01.jpg"
import image6 from "@/public/images/projects/1841-02.jpg"

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
    return (
        <Suspense fallback={<div>Loading projects...</div>}>
            <ProjectsPageContent PROJECTS={PROJECTS} LOCATIONS={LOCATIONS} />
        </Suspense>
    )
}