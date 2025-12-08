import HeroSection from "../components/Hero-section";
import ServiceSection from "./service-section";
import image3 from "@/public/images/projects/1438-17.jpg"

export default function OurProjects() {
    return (
        <>
            <HeroSection
                bg={image3}
                title={' Our <br /> Services'}
                desc={'The stylish and organized interior represents the way to feel happy and complete. Design and comfort are primarily important for the success of a person’s life.'}
            />
            <ServiceSection />
        </>
    )
}