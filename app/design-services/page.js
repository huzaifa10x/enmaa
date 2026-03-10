export const metadata = {
    title: "Design Services | Enma Engineering Companies",
    description: "Explore professional design services by Enma Engineering Companies, offering innovative architectural and engineering solutions tailored for residential and commercial projects.",

    alternates: {
        canonical: "https://www.enmaaengcon.com/design-services",
        languages: {
            "x-default": "https://www.enmaaengcon.com/design-services",
            en: "https://www.enmaaengcon.com/design-services",
            ar: "https://www.enmaaengcon.com/ar/design-services",
        },
    },

    openGraph: {
        title: "Design Services | Enma Engineering Companies",
        description: "Explore professional design services by Enma Engineering Companies, offering innovative architectural and engineering solutions tailored for residential and commercial projects.",
        type: "website",
        url: "https://www.enmaaengcon.com/design-services",
    },

    twitter: {
        card: "summary_large_image",
        title: "Design Services | Enma Engineering Companies",
        description: "Explore professional design services by Enma Engineering Companies, offering innovative architectural and engineering solutions tailored for residential and commercial projects.",
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
import image1 from "@/public/images/Services-images/Design Services/565.jpg"
import image2 from "@/public/images/Services-images/Design Services/876.jpg"
import image3 from "@/public/images/Services-images/Design Services/9878.jpg"
import ServicesPageSlider from '../components/services-page-slider'

export default function EngineeringService() {
    const images = [image1, image2, image3]
    return (
        <main className="">
            <ServicesBanner />
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl font-bold text-foreground mb-2">Design Services</h1>
                <p className="text-muted-foreground text-sm">Home / Design Services</p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ServicesPageSlider images={images} />
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <h1 className='text-2xl font-semibold mb-5'>Transforming Vision into Solutions for Construction</h1>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Enmaa&apos;s services include the whole design process, from collecting background data to completion of construction documentation. We ensure that each project takes advantage of our approach, which balances a systematic with a creative methodology. Our process begins during site surveys and stakeholder discussions. Here we use data and stakeholder engagement to inform smart design decisions. We develop creative concepts that are compatible with the aesthetic desires of stakeholders as well as the building functionality.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    We focus on regulatory requirements, and project budget. During the preliminary design and detail design phases, we continuously refine the concepts into construction-ready documentation. It helps us to establish vision and can be built.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Our integrated design approach coordinates the architectural, structural, and MEP disciplines from the earliest stages. It removes potential conflicts and maximizes building performance. We also apply some of the most latest design tools, such as Building Information Modeling (BIM). This helps us to facilitate integration across disciplines and to identify design issues prior to starting construction. The detailed design phase focuses on developing and documenting drawings, specifications, and calculations. It helps to meet the submission requirements of all applicable UAE regulatory authorities.
                </p>
            </section>

            <Testimonial />
        </main>
    )
}