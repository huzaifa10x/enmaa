import ServiceCard from "./service-card"
import image1 from "@/public/images/projects/448...1.jpg"
import Image from "next/image"
import servicesText from "@/public/images/Services.webp"

export default function ServiceSection() {
    const services = [
        {
            id: "01",
            title: "Engineering Services",
            items: ["Feasibility studies",
                "Planning",
                "Project development",
                "Evaluation of engineering projects",
                "Technical specifications",
                "Quantity inventory"
            ],
            featured: true,
            image: image1,
            href: '/engineering-service'
        },
        {
            id: "02",
            title: "Design Services",
            items: ['Data collection',
                'Design idea',
                'Initial design',
                'Detailed design',
                'Final design'
            ],
            featured: false,
            image: image1,
            href: '/design-services'
        },
        {
            id: "03",
            title: "Tendering Services",
            items: ['Contract terms',
                'Initial tender evaluation',
                'Call for tender',
                'Tender study',
                'Final report',
                'Contractor selection'
            ],
            featured: false,
            image: image1,
            href: '/tenderings-services'
        },
        {
            id: "04",
            title: "Supervision",
            items: ['Supervising the construction process',
                'Quality',
                'Supervising the timeline and costs',
                'Claims and contract conclusion'
            ],
            featured: false,
            image: image1,
            href: '/supervision'
        },
        {
            id: "05",
            title: "Client Engineer Representative Role",
            items: ['Representing the owner at the workplace',
                'On - site engagement with customers for better coordination',
                'Project management to achieve the required quality on time and within the specified budget'
            ],
            featured: false,
            image: image1,
            href: '/client-engineer-representative-role'
        },
        {
            id: "06",
            title: "Program Management Services",
            items: [
                'Determine the project timeline',
                'Cost management',
                'Managing relationships between reformers',
                'Quality control',
                'Resource management',
                'Securing needs',
                'File management',
                'Guidance',
            ],
            featured: false,
            image: image1,
            href: '/program-management-services'
        },
        {
            id: "07",
            title: "Design & Build Project Participation",
            items: [
                'Direct work with contractors',
                'Quality and value of business',
                'Project life cycle',
                'Budget reduction',
                'Agendas',
            ],
            featured: false,
            image: image1,
            href: '/design-build-project-participation'
        },
        {
            id: "08",
            title: "GIS Services",
            items: [
                'Finding project solutions',
                'Consulting services and strategic planning',
                'Developing data models',
                'Analysis, data presentation and model design',
                'Development and integration of projects',
                'Capacity building and operational support',
            ],
            featured: false,
            image: image1,
            href: '/gis-services'
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