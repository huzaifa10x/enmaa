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
        </>
    )
}