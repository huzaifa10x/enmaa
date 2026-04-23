export const metadata = {
  title: "Our Services | Enma Engineering Companies",
  description: "Enma Engineering Companies offer professional engineering services in the UAE, including architectural design, civil engineering, GIS solutions, and project management.",
  alternates: {
    canonical: 'https://www.enmaaengcon.com/our-services/',
    languages: {
      "x-default": "https://www.enmaaengcon.com/our-services/",
      en: "https://www.enmaaengcon.com/our-services/",
      ar: "https://www.enmaaengcon.com/ar/our-services/",
    },
  },
  openGraph: {
    title: "Our Services | Enma Engineering Companies",
    description: "Enma Engineering Companies offer professional engineering services in the UAE, including architectural design, civil engineering, GIS solutions, and project management.",
    type: "website",
    url: "https://www.enmaaengcon.com/our-services/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Enma Engineering Companies",
    description: "Enma Engineering Companies offer professional engineering services in the UAE, including architectural design, civil engineering, GIS solutions, and project management.",
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
import Footer from "../components/footer";
import HeroSection from "../components/Hero-section";
import ServiceSection from "./service-section";
import image3 from "@/public/images/projects/1438-17.jpg"

export default function OurProjects() {
  return (
    <>
      <HeroSection
        bg={image3}
        title={' Our <br /> Services'}
        desc={'We offer a range of architectural and engineering solutions designed to meet your unique needs, from initial concept to final execution.'}
      />
      <ServiceSection />
      <Footer />
    </>
  )
}