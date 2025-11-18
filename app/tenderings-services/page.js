import Testimonial from '../components/Testimonial'
import image1 from "@/public/images/projects/448...1.jpg"
import Image from 'next/image'
import ServicesBanner from '../components/services-banner'


export default function EngineeringService() {

    return (
        <main className="">
            <ServicesBanner />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl font-bold text-foreground mb-2">Tendering Services</h1>
                <p className="text-muted-foreground text-sm">Home / Tendering Services</p>
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
                <h1 className='text-2xl font-semibold mb-5'>Ensuring Transparent and Competitive Procurement Processes</h1>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Enmaa Engineering Consultant offers highly skilled tender services. We provide transparent, competitive and compliant procurement for construction and engineering projects in the UAE. Our all-inclusive service offers contract conditions specific to the project, comprehensive pre-qualification processes to investigate contractors capabilities, and formal invitation to tender processes to encourage maximum participation from contractors in the market. Our tender evaluations include qualitative and quantitative assessment techniques that create value for clients by procuring contracts based on the best value, rather than simply the lowest price.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    The pre-qualification processes review the technical expertise, financial capability, health and safety program, and relevant project experience of contractors. This allows only firms that demonstrate a capability to be involved in the bidding process. We prepare detailed tender documents. This includes drawings, specifications, bills of quantities and contracts that meet the client&apos;s needs in clearly articulating requirements and the apportioning of risk.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Our significant evaluation process reviews commercial and technical submissions to specific criteria. This way we assess submissions against including pricing submissions, statements, program schedules and resources. We remain neutral and confidential throughout the entirety of the process, ensuring fairness is paramount throughout. Our final report reviews our recommendation to the client about who is to be awarded the contract and is defensible in its positions.
                </p>
            </section>

            <Testimonial />
        </main>
    )
}