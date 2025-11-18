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
                <h1 className="text-4xl font-bold text-foreground mb-2">Client Engineer Representative Role</h1>
                <p className="text-muted-foreground text-sm">Home / Client Engineer Representative Role</p>
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
                <h1 className='text-2xl font-semibold mb-5'>Your Committed Technical Advocate for Project Success</h1>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Enmaa Engineering Consultant provides Client Engineer Representative services by placing our professionals within client organizations to serve as technical advisors and project advocates. Enmaa uses this family approach to ensure our professional representatives can fully understand the client&apos;s goals and project scope. They align project actions with the enterprise organizational priorities. It also promotes quick decision-making. By being embedded with client teams, we remove traditional project management barriers between clients and consultants. We build confidence in communications and collaboration processes. Our representatives take an inclusive approach to project interface management. They work directly with designers, contractors, regulatory authorities, and stakeholders to maintain portfolio momentum.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Client Engineer representation requires technical capability, business sense, and diplomacy when working to advance the client&apos;s interests while accommodating competing or conflicting interests. Our representatives participate in planning, budgeting, and procurement to ensure technical considerations are provided appropriate weight in business decisions. We monitor contractor performance and evaluate change orders. We provide technical advice to protect the client&apos;s interests. Enmaa has a demonstrated history of always completing projects on time or better than the scheduled completion dates
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Our representatives are dedicated to continuously observing (on and off site) the schedule, costs. They do quality assurance project parameters to identify opportunities to optimize schedule and costs or address challenges before they escalate. This representation provides our clients with the confidence to know their projects are in the hands of a professional service that understands their business objective.
                </p>
            </section>

            <Testimonial />
        </main>
    )
}