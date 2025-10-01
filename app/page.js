import Image from "next/image";
import DiscoverSlider from "./components/discover-slider";
import WelcomeSection from "./components/welcome-section";
import ServicesSection from "./components/services-section";
import FeaturedProjects from "./components/featured-projects";
import DesignSolutions from "./components/design-solutions";
import TestimonialSlider from "./components/testimonial-slider";
import Footer from "./components/footer";
import FAQ from "./components/faq";
import OurProcess from "./components/our-process";

export default function Home() {

  const faqData = [
    {
      id: 1,
      question: "Lorem Ipsum is simply dummy text of the printing",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 2,
      question: "Lorem Ipsum is simply dummy text of the printing",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 3,
      question: "Lorem Ipsum is simply dummy text of the printing",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 4,
      question: "Lorem Ipsum is simply dummy text of the printing",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 5,
      question: "Lorem Ipsum is simply dummy text of the printing",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
  ];

  return (
    <main className="min-h-screen">
      <DiscoverSlider />
      <WelcomeSection />
      <ServicesSection />
      <FeaturedProjects />
      <DesignSolutions />
      <OurProcess />
      <FAQ faqData={faqData} />
      <TestimonialSlider />
      <Footer />
    </main>
  );
}
