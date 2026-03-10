export const metadata = {
    title: "Engineering Service | Enma Engineering Companies",
    description: "Enma Engineering Companies provide expert engineering services, including civil, structural, and architectural solutions, ensuring high-quality results for your projects.",
    alternates: {
        canonical: "https://www.enmaaengcon.com/engineering-services",
        languages: {
            "x-default": "https://www.enmaaengcon.com/engineering-services",
            en: "https://www.enmaaengcon.com/engineering-services",
            ar: "https://www.enmaaengcon.com/ar/engineering-services",
        },
    },

    openGraph: {
        title: "Engineering Service | Enma Engineering Companies",
        description: "Enma Engineering Companies provide expert engineering services, including civil, structural, and architectural solutions, ensuring high-quality results for your projects.",
        type: "website",
        url: "https://www.enmaaengcon.com/engineering-services",
    },

    twitter: {
        card: "summary_large_image",
        title: "Engineering Service | Enma Engineering Companies",
        description: "Enma Engineering Companies provide expert engineering services, including civil, structural, and architectural solutions, ensuring high-quality results for your projects.",
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
import ServicesBanner from '../components/services-banner'
import ServicesPageSlider from '../components/services-page-slider'
import image1 from "@/public/images/Services-images/Engineering Service/20.jpg"
import image2 from "@/public/images/Services-images/Engineering Service/21.jpg"
import image3 from "@/public/images/Services-images/Engineering Service/23.jpg"
import image4 from "@/public/images/Services-images/Engineering Service/24.jpg"
import image5 from "@/public/images/Services-images/Engineering Service/25.jpg"

export default function page() {
    const images = [image1, image2, image3, image4, image5]
    return (
        <main className="">
            <ServicesBanner />
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl font-bold text-foreground mb-2">Engineering Service</h1>
                <p className="text-muted-foreground text-sm">Home / Engineering Service</p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ServicesPageSlider images={images} />
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <h1 className='text-2xl font-semibold mb-5'>Achieving Success Through Engineering Strategy and Excellence</h1>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Enmaa Engineering Consultant operates throughout the UAE to deliver diverse engineering services to realize your project vision. We offer our expertise in engineering and planning with a multidisciplinary perspective on services. Our expertise ranges from feasibility studies, strategic planning, and programming. We ensure each project relies on a solid technical basis. We utilize the principles of value engineering to optimize project costs. Typically, we deliver product value in the range of a 10-15% savings.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    The bills of quantities and technical specifications we develop resolve ambiguities. We provide clarity on the manner to move from procurement to project construction phase. Our team of experienced professional engineers conducts thorough assessments.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    We evaluate feasibility by means of the processes of planning to identify risk factors and possible impacts. Our team develops mitigation strategies that safeguard the project&apos;s timeline and budget. The technical documentation we produce conforms to national standards while facilitating the incorporation of local regulations in Sharjah and across the UAE. The formal process of the system engineering of the business offers extensive information for confident and informed decision-making. We are here to take your project from inception to completion.
                </p>
            </section>

            <Testimonial />
        </main>
    )
}