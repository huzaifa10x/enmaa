import Testimonial from '../components/Testimonial'
import image1 from "@/public/images/projects/448...1.jpg"
import image2 from "@/public/images/projects/1438-07.jpg"
import Image from 'next/image'
import Banner from './Banner'


export default function EngineeringService() {

    return (
        <main className="">
            <Banner />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl font-bold text-foreground mb-2">Engineering Service</h1>
                <p className="text-muted-foreground text-sm">Home / Engineering Service</p>
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

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <p className="text-foreground text-base leading-relaxed mb-6">
                    Engineering is the art of creating if optional and aesthetically pleasing spaces that reflect the personality and needs of the occupants. By combining color schemes, furniture, lighting, and textures, designers can transform any room into a harmonious and inviting environment. Thoughtful space planning ensures that every corner serves a purpose while creating an open and free-flowing atmosphere. The choice of materials, patterns, and textures plays a crucial role in achieving a desired mood, whether it&rsquo;s modern, minimalist, or traditional.
                </p>
                <p className="text-foreground text-base leading-relaxed">
                    Customization makes for the integration of unique elements that make a space truly one-of-a-kind. Sustainability is also becoming an essential focus, with eco-friendly materials and sustainable solutions gaining popularity. Whether designing a cozy living room or a professional office space, thoughtful space design brings both beauty and functionality together. Ultimately, it&rsquo;s about crafting a space where people feel comfortable, inspired, and connected.
                </p>

                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Engineering Services Include:</h3>
                    <p className="text-foreground text-base leading-relaxed">
                        At Enmac, we provide strong criminal defense services to protect your rights and secure the best possible outcome. Our experienced attorneys handle a wide range of cases, from misdemeanors to serious felonies. Whether you need defense against DUI, drug offenses, or violent crimes.
                    </p>
                </div>
            </section>

            <Testimonial />
        </main>
    )
}