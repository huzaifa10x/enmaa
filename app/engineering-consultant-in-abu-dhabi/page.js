export const metadata = {
    title: "Engineering Consultants In Abu Dhabi | Abu Dhabi Engineering Companies",
    description: "Find the best engineering consultants and companies in Abu Dhabi. We offer innovative and tailored engineering solutions for all your needs.",

    alternates: {
        canonical: "https://www.enmaaengcon.com/engineering-consultant-in-abu-dhabi/",
        languages: {
            "x-default": "https://www.enmaaengcon.com/engineering-consultant-in-abu-dhabi/",
            en: "https://www.enmaaengcon.com/engineering-consultant-in-abu-dhabi/",
            ar: "https://www.enmaaengcon.com/ar/استشارات-هندسية-ابوظبي",
        },
    },

    openGraph: {
        title: "Engineering Consultants In Abu Dhabi | Abu Dhabi Engineering Companies",
        description: "Find the best engineering consultants and companies in Abu Dhabi. We offer innovative and tailored engineering solutions for all your needs.",
        type: "website",
        url: "https://www.enmaaengcon.com/engineering-consultant-in-abu-dhabi/",
    },

    twitter: {
        card: "summary_large_image",
        title: "Engineering Consultants In Abu Dhabi | Abu Dhabi Engineering Companies",
        description: "Find the best engineering consultants and companies in Abu Dhabi. We offer innovative and tailored engineering solutions for all your needs.",
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
import Footer from '../components/footer';

export default function page() {
    const images = [image1, image2, image3, image4, image5, image12, image7, image8]
    return (
        <>
            <main className="">
                <ServicesBanner />

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">Engineering Consultant In Abu Dhabi</h1>
                    <p className="text-muted-foreground text-sm">Home / Engineering Consultant In Abu Dhabi</p>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <ServicesPageSlider images={images} />
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <h2 className='text-xl font-semibold mb-5'>Reliable Engineering Companies In Abu Dhabi</h2>
                    <p className="text-neutral-500 text-base leading-relaxed mb-6">
                        From providing sheds and schools to functional commercial spaces, Enmaa Engineering Consultants have performed exceptionally. Our firm has been operating since 2015 by a team of talented civil engineering consultants. We have done our best to contribute to the real estate industry with exceptionally sustainable designs. Our excellent engineering consultants in Abu Dhabi offer top-notch services.
                        <br />
                        <br />
                        We are one of the leading engineering consulting companies in Abu Dhabi, delivering clients everything they hoped for. Our outstanding designs meet all the requirements set by the client in the given timeframe.
                        <br />
                        <br />
                        Have an initial consultation with us where you can discuss all your needs, demands, and desires. Our engineering consultant in Abu Dhabi team will look into everything and respect your recommendations. We work our best to bring your idea to life.
                    </p>

                    <h2 className='text-xl font-semibold mb-5'>Top Abu Dhabi Engineering Companies</h2>
                    <p className="text-neutral-500 text-base leading-relaxed mb-6">
                        Our approach ensures that all our clients are satisfied. This method of working has made us one of the most renowned engineering consultant engineering companies in Abu Dhabi. We have developed an effective process through which our clients receive accurate designs and blueprint models. Our team provides them with everything, even the smallest details about the space. We employ strategic calculations to deliver work that can meet industry standards.
                        <br />
                        <br />
                        Our engineering consultants in Abu Dhabi put their best foot forward to provide sustainability and longevity. We analyze and understand the space’s functionality to provide an ideal design.
                    </p>
                    <h2 className='text-xl font-semibold mb-5'>Talented Engineering Consultant Companies Abu Dhabi</h2>
                    <p className="text-neutral-500 text-base leading-relaxed mb-6">
                        Our expert team of consultants has ranked us as one of the top Abu Dhabi engineering companies. They have years of expertise and extensive knowledge on how to meet the needs of their clientele. With us, you can be confident that you’re investing in the appropriate area. Our team’s experience is evident in their remarkable designs, which showcase spectacular rooms designed to be useful and comfortable. With us, you can be assured that you are investing in the right space. Connect with us and explore astonishing architectural possibilities. Whether you are a client, investor, or stakeholder, we have the perfect engineering solutions.
                    </p>
                    <h2 className='text-xl font-semibold mb-5'>We Are Your Best Choice</h2>
                    <p className="text-neutral-500 text-base leading-relaxed mb-6">
                        Enmaa Engineering is a leading engineering consultant company in Abu Dhabi. We do our best to provide integrated solutions that balance practicality and beauty. Our team ensures to verify that projects meet regulatory criteria and surpass design objectives.
                        <br />
                        <br />
                        As the best choice out of all Abu Dhabi engineering companies, we deliver exceptional residential designs. From small spaces to large-scale multi-unit dwellings. For commercial places, we have ideally functional designs in our portfolio. Moreover, we offer incredible office designs that offer valuable solutions to all leading industries.
                    </p>
                    <h2 className='text-xl font-semibold mb-5'>Affordable Engineering Company In Abu Dhabi</h2>
                    <p className="text-neutral-500 text-base leading-relaxed mb-6">
                        Looking for an engineering company in Abu dhabi? You are at the right spot. At Enmaa we ensure that you get the ideal price for our consultancy services. Our packages are curated after a indepth research about the client’s average budget. Our aim is to provide you complete satisfaction with designs that you want. We ensure to have an initial consultation session and provide you with what you are looking for.
                        <br />
                        <br />
                        Our engineers listen to your demands attentively so they can provide you with the money’s worth. Our engineering consultant in Abu Dhabi firm is ready to serve you with residential, commercial or industrial engineering.
                        <br />
                        <br />
                        We are the most trusted service provider in Abu Dhabi. With local insights in the industry, we can guide you in the best way possible. We have years of expertise that makes us a reliable choice to opt for. Our service is just a phone call away. Connect with us today and bring you imagination to life with our talent.
                    </p>

                    <h2 className='text-xl font-semibold mb-5'>Connect With Us Today</h2>
                    <p className="text-neutral-500 text-base leading-relaxed mb-6">
                        If you are looking through the list of top engineering consultant companies Abu Dhabi, then connect with us today. Give us a call at <a className='text-primary' href="tel:+971 50 618 5529"> +971 50 618 5529</a> to schedule a meeting. You can also drop us an email at <a className='text-primary' href="mailto:marketing@enmaaengcon.com">marketing@enmaaengcon.com</a> We are just a call away to bring your ideal imagination into a proper functional design.
                    </p>

                </section>

                <Testimonial />
            </main>
            <Footer />
        </>
    )
}