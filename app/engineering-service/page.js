import Testimonial from '../components/Testimonial'
import ServicesBanner from '../components/services-banner'
import ServicesPageSlider from '../components/services-page-slider'
import image1 from "@/public/images/projects/448...1.jpg"
import image2 from "@/public/images/projects/1438-07.jpg"
import image3 from "@/public/images/projects/1438-17.jpg"
import image4 from "@/public/images/projects/1438-19.jpg"
import image5 from "@/public/images/projects/1841-01.jpg"
import image7 from "@/public/images/projects/1841-02.jpg"
import image8 from "@/public/images/projects/1855-01.jpg"
import image12 from "@/public/images/projects/1902.jpg"

export default function page() {
    const images = [image1, image2, image3, image4, image5, image12, image7, image8]
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