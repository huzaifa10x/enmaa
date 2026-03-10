export const metadata = {
    title: "Design & Build Project Participation | Enma Engineering Companies",
    description: "Find the best engineering consultants and companies in Abu Dhabi. We offer innovative and tailored engineering solutions for all your needs.",

    alternates: {
        canonical: "https://www.enmaaengcon.com/design-build-project-participation",
        languages: {
            "x-default": "https://www.enmaaengcon.com/design-build-project-participation",
            en: "https://www.enmaaengcon.com/design-build-project-participation",
            ar: "https://www.enmaaengcon.com/ar/design-build-project-participation",
        },
    },

    openGraph: {
        title: "Design & Build Project Participation | Enma Engineering Companies",
        description: "Find the best engineering consultants and companies in Abu Dhabi. We offer innovative and tailored engineering solutions for all your needs.",
        type: "website",
        url: "https://www.enmaaengcon.com/design-build-project-participation",
    },

    twitter: {
        card: "summary_large_image",
        title: "Design & Build Project Participation | Enma Engineering Companies",
        description: "Find the best engineering consultants and companies in Abu Dhabi. We offer innovative and tailored engineering solutions for all your needs.",
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
};
import Testimonial from '../components/Testimonial'
import Image from 'next/image'
import ServicesBanner from '../components/services-banner'
import image1 from "@/public/images/Services-images/Design-Build-Project/345.jpg"
import image2 from "@/public/images/Services-images/Design-Build-Project/534.jpg"
import image3 from "@/public/images/Services-images/Design-Build-Project/3456.jpg"
import image4 from "@/public/images/Services-images/Design-Build-Project/46445.jpg"
import ServicesPageSlider from '../components/services-page-slider'

export default function EngineeringService() {
const images = [image1, image2, image3, image4]
    return (
        <main className="">
            <ServicesBanner />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl font-bold text-foreground mb-2">Design & Build Project Participation</h1>
                <p className="text-muted-foreground text-sm">Home / Design & Build Project Participation</p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ServicesPageSlider images={images} />
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <h1 className='text-2xl font-semibold mb-5'>Accelerating Delivery Through Collaborative Innovation</h1>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Enmaa Engineering Consultant brings sought-after expertise to design-build projects. We collaborate with contractors to create effective value engineering ideas and creatively-designed solutions. Our solutions are aimed at improving the end result of the project. When working in a design-build configuration, we take our technical capabilities and construction experience and utilize them to improve designs for constructability, cost, and schedule. We establish project lifecycle schedules that account for design, procurement, and construction. While doing this, we are always focused on managing costs within the schedule.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Design-build project delivery methods rely on disciplined teamwork between designers and contractors from day one of the project. This helps in creating opportunities for innovation that are impossible with traditional approaches. Design engineers work alongside contractor personnel to obtain the best design alternatives and workflows. They assess how the work might be constructed, and create opportunities for value improvements.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    As part of this process, we perform a constructability review. This way we identify challenges associated with executing the design early on. When the cost to make a change is less than in the field. Design-build project delivery minimizes expensive construction modifications by encouraging concurrent construction and design proceeds. With value engineering expertise, we will always find ways to reduce cost and improve schedules. We will increase performance without compromising quality. By tracking costs and monitoring schedules, we provide early warning of potential issues. This allows for rapid decision making to increase the delivery of value.
                </p>
            </section>

            <Testimonial />
        </main>
    )
}