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
                <h1 className="text-4xl font-bold text-foreground mb-2">Supervision</h1>
                <p className="text-muted-foreground text-sm">Home / Supervision</p>
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
                <h1 className='text-2xl font-semibold mb-5'>Ensuring Quality through Comprehensive Construction Administration Services</h1>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    We provide quality assurance services that deliver continuative construction oversight as your projects move through construction phases, confirming the project&apos;s execution is according to the approved designs, specifications, and quality control measures. Our experienced field supervision teams will oversee and inspect construction activities on a daily basis. They will confirm workmanship meets contract standards. They&apos;ll check if those materials are consistent with specified testing. We build quality assurance protocols by means of quality control protocols such as inspection and testing protocols that are coordinated with accredited laboratories. Through our proactive time and cost control procedures, we will monitor the recommended project progress against the accepted baseline schedule. We&apos;ll approve contracts, flagging, reporting, and rectifying variances early to preserve project objectives.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Our supervisors will be conducting regular inspections of the job site, providing reviews of shop drawings, method statements, and witnessing critical construction activities to ensure compliance with the design intent. We will also maintain comprehensive records of the job site with daily reports, records of progress photographs, and capturing the results of all testing to provide a means to document the construction quality from the start of the project through to receiving the substantial completion certificate.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Our quality assurance methods will not only address quality assurance but will also entail quality control by layering services into an oversight of the quality management process to deliver another layer of protection for a sustainable and successful project outcome. Our claims management services and commissioning process is a critical part of our service to ensure projects have correct and proper closure and transition processes on projects. We are fair in administering contracts, exercising claim protocols, evaluating claims based on contract entitlements and documenting all system testing, preparing operations manuals, and training facility staff.
                </p>
            </section>

            <Testimonial />
        </main>
    )
}