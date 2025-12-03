import Testimonial from '../components/Testimonial'
import Image from 'next/image'
import ServicesBanner from '../components/services-banner'
import image1 from "@/public/images/projects/448...1.jpg"
import image2 from "@/public/images/projects/1438-07.jpg"
import image3 from "@/public/images/projects/1438-17.jpg"
import image4 from "@/public/images/projects/1438-19.jpg"
import image5 from "@/public/images/projects/1841-01.jpg"
import image7 from "@/public/images/projects/1841-02.jpg"
import image8 from "@/public/images/projects/1855-01.jpg"
import image12 from "@/public/images/projects/1902.jpg"
import ServicesPageSlider from '../components/services-page-slider'

export default function EngineeringService() {
    const images = [image1, image2, image3, image4, image5, image12, image7, image8]
    return (
        <main className="">
            <ServicesBanner />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl font-bold text-foreground mb-2">Program Management Services</h1>
                <p className="text-muted-foreground text-sm">Home / Program Management Services</p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ServicesPageSlider images={images} />
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <h1 className='text-2xl font-semibold mb-5'>Overseeing Complex Projects for Strategic Success</h1>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    &apos;s program management services provide oversight and coordination for complex projects and portfolios. We ensure interdependent activities are coordinated and aligned with our client&apos;s goals. Our program managers build comprehensive project life-cycle schedules that integrate design, procurement, construction, and commissioning activities into meaningful timeframes. We execute strong cost management systems to track expenditures, forecast final costs, and identify cost savings while the program is being executed.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Stakeholder management is at the core of what we do, guaranteeing that the varied interests are recognized, expectations are met, and communications are effective between all parties.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Our quality assurance and control processes cross project-level attitudes and expectations. We define quality standards, develop inspection regimes and conduct audits to ensure work is being completed in accordance with spec and regulatory expectation. Resource management maximizes the allocation of people, equipment, and materials over multiple projects. Using a central document control system guarantees that all participants utilize the correct and enhanced information.
                </p>
            </section>

            <Testimonial />
        </main>
    )
}