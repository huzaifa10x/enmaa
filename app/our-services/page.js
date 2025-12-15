import HeroSection from "../components/Hero-section";
import ServiceSection from "./service-section";
import image3 from "@/public/images/projects/1438-17.jpg"

export default function OurProjects() {
    return (
        <>
            <HeroSection
                bg={image3}
                title={' Our <br /> Services'}
                desc={'Our Services Enmaa Engineering provides comprehensive engineering, design, supervision, and project management services for villas, residential buildings, and commercial developments, ensuring quality, efficiency, and compliance at every stage.'}
            />
            <ServiceSection />
        </>
    )
}