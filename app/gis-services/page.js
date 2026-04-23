export const metadata = {
    title: "GIS Services | Enma Engineering Companies",
    description: "Enma Engineering Companies provide advanced GIS services, offering accurate mapping, spatial analysis, and data-driven solutions for engineering and construction projects.",

    alternates: {
        canonical: "https://www.enmaaengcon.com/design-services",
        languages: {
            "x-default": "https://www.enmaaengcon.com/design-services",
            en: "https://www.enmaaengcon.com/design-services",
            ar: "https://www.enmaaengcon.com/ar/design-services",
        },
    },

    openGraph: {
        title: "GIS Services | Enma Engineering Companies",
        description: "Enma Engineering Companies provide advanced GIS services, offering accurate mapping, spatial analysis, and data-driven solutions for engineering and construction projects.",
        type: "website",
        url: "https://www.enmaaengcon.com/design-services",
    },

    twitter: {
        card: "summary_large_image",
        title: "GIS Services | Enma Engineering Companies",
        description: "Enma Engineering Companies provide advanced GIS services, offering accurate mapping, spatial analysis, and data-driven solutions for engineering and construction projects.",
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
import image1 from "@/public/images/Services-images/GIS-Services/43.jpg"
import image2 from "@/public/images/Services-images/GIS-Services/54.jpg"
import image3 from "@/public/images/Services-images/GIS-Services/65.jpg"
import image4 from "@/public/images/Services-images/GIS-Services/76.jpg"
import ServicesPageSlider from '../components/services-page-slider'
import Footer from '../components/footer';

export default function page() {
    const images = [image1, image2, image3, image4]
    return (
        <>
            <main className="">
                <ServicesBanner />

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">GIS Services</h1>
                    <p className="text-muted-foreground text-sm">Home / GIS Services</p>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <ServicesPageSlider images={images} />
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <h1 className='text-2xl font-semibold mb-5'>Leveraging Spatial Intelligence to Support Intelligent Decisions</h1>
                    <p className="text-foreground text-base leading-relaxed mb-6">
                        Enmaa Engineering Consultant offers a full suite of Geographic Information System (GIS) services. Our service enables organizations to exploit spatial information. This results in improved decision-making, operational performance and strategic planning.
                    </p>
                    <p className="text-foreground text-base leading-relaxed mb-6">
                        Our enterprise solutions embed GIS technology into existing business workflows to develop a powerful platform to visualize, analyze and manage data. We provide consulting services and the development of strategic plans that ensure GIS implementations are in alignment with the direction of the organization. This provides measurable value for technology investments. Our development of data models creates scalable spatial databases that systematically capture geographical information that can be queried and analyzed to inform all manner of things related to infrastructure planning, asset management and facility operations.
                    </p>
                    <p className="text-foreground text-base leading-relaxed mb-6">
                        Our GIS experts utilize best practice analytic approaches including spatial analysis, network analysis, and predictive modelling. This provides insight into the geographical database. We create user-friendly visualization products which could include interactive maps, dashboards and reports to distill complex spatial relationships for technical and non-technical users. Our design, development and integration services ensure the functionality of GIS is integrated naturally into our clients business workflows. Our capacity building, operation and support services ensure our clients can sustainably invest in GIS to provide organizations with measurable value over the long term. We develop customized training programs. We also provide operational support in the form of maintenance.
                    </p>
                </section>

                <Testimonial />
            </main>
            <Footer />
        </>
    )
}