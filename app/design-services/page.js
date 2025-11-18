import Testimonial from '../components/Testimonial'
import image1 from "@/public/images/projects/448...1.jpg"
import image2 from "@/public/images/projects/1438-07.jpg"
import Image from 'next/image'
import ServicesBanner from '../components/services-banner'

export default function EngineeringService() {

    return (
        <main className="">
            <ServicesBanner />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl font-bold text-foreground mb-2">Design Services</h1>
                <p className="text-muted-foreground text-sm">Home / Design Services</p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="h-64 md:h-80 rounded-xl overflow-hidden">
                        <Image
                            src={image1}
                            height={200}
                            width={200}
                            alt=''
                            className='w-full h-full'
                        />
                    </div>
                    <div className="h-64 md:h-80 rounded-xl overflow-hidden">
                        <Image
                            src={image1}
                            height={200}
                            width={200}
                            alt=''
                            className='w-full h-full'
                        />
                    </div>
                </div>
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