import ServiceCard from "./service-card"
import image1 from "@/public/images/projects/448...1.jpg"
import Image from "next/image"
import servicesText from "@/public/images/Services.webp"

export default function ServiceSection() {
    const services = [
        {
            id: "01",
            title: "Engineering Services",
            items: ["Feasibility studies", "Planning", "Program development", "Value engineering"],
            featured: true,
            image: image1,
            href: '/engineering-service'
        },
        {
            id: "02",
            title: "Engineering Services",
            items: ["Feasibility studies", "Planning", "Program development", "Value engineering"],
            featured: false,
            href: '/our-services'
        },
        {
            id: "03",
            title: "Engineering Services",
            items: ["Feasibility studies", "Planning", "Program development", "Value engineering"],
            featured: false,
            href: '/our-services'
        },
        {
            id: "04",
            title: "Engineering Services",
            items: ["Feasibility studies", "Planning", "Program development", "Value engineering"],
            featured: false,
            href: '/our-services'
        },
        {
            id: "05",
            title: "Engineering Services",
            items: ["Feasibility studies", "Planning", "Program development", "Value engineering"],
            featured: false,
            href: '/our-services'
        },
        {
            id: "06",
            title: "Engineering Services",
            items: ["Feasibility studies", "Planning", "Program development", "Value engineering"],
            featured: false,
            href: '/our-services'
        },
        {
            id: "07",
            title: "Engineering Services",
            items: ["Feasibility studies", "Planning", "Program development", "Value engineering"],
            featured: false,
            href: '/our-services'
        },
        {
            id: "08",
            title: "Engineering Services",
            items: ["Feasibility studies", "Planning", "Program development", "Value engineering"],
            featured: false,
            href: '/our-services'
        },
    ]

    return (
        <section className="py-16 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center relative mb-10">
                    <Image
                        src={servicesText}
                        width={800}
                        height={300}
                        alt="services"
                        className="w-auto h-auto mx-auto"
                    />
                    <div className="text-center mb-12 absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-4xl md:text-5xl text-nowrap mb-2">
                            Explore our <span className="text-primary font-bold"> comprehensive <br /> interior design </span> services
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    )
}