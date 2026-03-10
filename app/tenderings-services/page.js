export const metadata = {
  title: "Tenderings Services | Enma Engineering Companies",
  description: "Enma Engineering Companies offer professional tendering services, including bid management, project evaluation, and contract preparation for engineering projects in the UAE.",
  alternates: {
    canonical: 'https://www.enmaaengcon.com/supervision/',
    languages: {
      "x-default": "https://www.enmaaengcon.com/supervision/",
      en: "https://www.enmaaengcon.com/supervision/",
      ar: "https://www.enmaaengcon.com/ar/supervision/",
    },
  },
  openGraph: {
    title: "Tenderings Services | Enma Engineering Companies",
    description: "Enma Engineering Companies offer professional tendering services, including bid management, project evaluation, and contract preparation for engineering projects in the UAE.",
    type: "website",
    url: "https://www.enmaaengcon.com/supervision/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenderings Services | Enma Engineering Companies",
    description: "Enma Engineering Companies offer professional tendering services, including bid management, project evaluation, and contract preparation for engineering projects in the UAE.",
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
}
import ServicesBanner from "../components/services-banner"
import Testimonial from "../components/Testimonial"
import image1 from "@/public/images/Services-images/Tendering-Services/43.jpg"
import image2 from "@/public/images/Services-images/Tendering-Services/453.jpg"
import image3 from "@/public/images/Services-images/Tendering-Services/e5w.jpg"
import ServicesPageSlider from "../components/services-page-slider"

export default function TenderingsServices() {
    const images = [image1, image2, image3]
    return (
        <main className="">
            <ServicesBanner />
            {/* Top Heading */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl font-bold text-foreground mb-2">Tendering Services</h1>
                <p className="text-muted-foreground text-sm">Ensuring Transparent and Competitive Procurement Processes</p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ServicesPageSlider images={images} />
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <h1 className="text-2xl font-semibold mb-5">
                    Ensuring Transparent and Competitive Procurement Processes
                </h1>
                <p className="text-foreground text-base leading-relaxed mb-6">Enmaa Engineering Consultant offers highly skilled tender services. We provide transparent, competitive and compliant procurement for construction and engineering projects in the UAE. Our all-inclusive service offers contract conditions specific to the project, comprehensive pre-qualification processes to investigate contractors&apos; capabilities, and formal invitation to tender processes to encourage maximum participation from contractors in the market. Our tender evaluations include qualitative and quantitative assessment techniques that create value for clients by procuring contracts based on the best value, rather than simply the lowest price.</p>
                <p className="text-foreground text-base leading-relaxed mb-6">The pre-qualification processes review the technical expertise, financial capability, health and safety program, and relevant project experience of contractors. This allows only firms that demonstrate a capability to be involved in the bidding process. We prepare detailed tender documents. This includes drawings, specifications, bills of quantities and contracts that meet the client&apos;s needs in clearly articulating requirements and the apportioning of risk.</p>
                <p className="text-foreground text-base leading-relaxed mb-6">Our significant evaluation process reviews commercial and technical submissions to specific criteria. This way we assess submissions against including pricing submissions, statements, program schedules and resources. We remain neutral and confidential throughout the entirety of the process, ensuring fairness is paramount throughout. Our final report reviews our recommendation to the client about who is to be awarded the contract and is defensible in its positions.</p>
            </section>
            <Testimonial />
        </main>
    )
}
