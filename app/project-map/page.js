export const metadata = {
  title: "Our Project Map | Enma Engineering Companies",
  description: "Explore the Enma Engineering Companies project map showcasing our completed and ongoing architectural and engineering projects across the UAE.",
  alternates: {
    canonical: 'https://www.enmaaengcon.com/project-map/',
    languages: {
      "x-default": "https://www.enmaaengcon.com/project-map/",
      en: "https://www.enmaaengcon.com/project-map/",
      ar: "https://www.enmaaengcon.com/ar/project-map/",
    },
  },
  openGraph: {
    title: "Our Project Map | Enma Engineering Companies",
    description: "Explore the Enma Engineering Companies project map showcasing our completed and ongoing architectural and engineering projects across the UAE.",
    type: "website",
    url: "https://www.enmaaengcon.com/project-map/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Project Map | Enma Engineering Companies",
    description: "Explore the Enma Engineering Companies project map showcasing our completed and ongoing architectural and engineering projects across the UAE.",
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
import projects from "@/public/images/projects.webp"
import Image from "next/image"
import GalleryPage from "./Gallery"
import HeroSection from "../components/Hero-section"
import image3 from "@/public/images/projects/1438-17.jpg"
import Footer from "../components/footer"
export default function page() {

    return (
        <>
            <HeroSection
                bg={image3}
                title={'Project <br/> Inspirations'}
                desc={'A visual showcase of design concepts and project ideas that influence our engineering and development work.'}
            />
            <main className="bg-background relative">
                <div className="max-w-7xl mx-auto px-4 py-16 ">

                    {/* Header */}
                    <div className="text-center relative">
                        <Image
                            src={projects}
                            width={600}
                            height={100}
                            alt="projects"
                            className=" mx-auto"
                        />
                        <div className="text-center mb-12 absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <h1 className="text-4xl md:text-5xl text-nowrap font-bold mb-2">
                                <span className="text-primary">Project </span> <span className="text-foreground">Inspirations</span>
                            </h1>
                        </div>
                    </div>
                    <GalleryPage />
                </div>
            </main>
        <Footer />
        </>
    )
}