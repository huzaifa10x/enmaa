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
      question: "Why is Enmaa Engineering one of the Top Engineering Companies in Sharjah?",
      answer:
        "At Enmaa Engineering, we take incredible pleasure in our capability to be agile and innovative in response to the particular necessities that each undertaking provides. Whether it is a complex of residences, a commercial venture, or even an office space, our designs are guided by three key principles: functionality, aesthetics, and sustainability; these reflect our unwavering commitment to quality across all realms of civil engineering and architecture within Sharjah.What precisely sets us apart from other civil engineering companies in Sharjah is our unwavering commitment to excellence.We work closely with our clients ensuring their vision is realized within their financial constraints and deadlines.By using cutting- edge technologies and industry best standards, Enmaa Engineering delivers efficient and sustainable engineering solutions designed to function for a long time. Opting for us as your civil engineering associate include hiring a team of specialists determined to create a flourishing future for Sharjah built on robust foundations. Contact us today to discuss your project requirements, and let us show you why we are the trusted choice among civil engineering companies in Sharjah."
    },
    {
      id: 2,
      question: "Enmaa Engineering – Leading Civil Engineering & Architecture Solutions in Sharjah, UAE",
      answer:
        "Enmaa Engineering is a leading civil engineering and architectural company in Sharjah that offers integrated civil engineering solutions that seamlessly blend functionality and fine aesthetics. As one of the leading engineering specialists in Sharjah, our aim is to make sure that your initiatives meet all regulatory necessities even as exceeding layout expectations. Our talented specialists at Enmaa Engineering own deep information of the complicated hurdles supplied by Sharjah’s urban backdrop.Therefore, we have a specialized group of engineers who possess in-depth knowledge of the location’s guidelines and climatic state of affairs.This allows us to create custom solutions to our clients which caters for the particular regional needs."
    },
    {
      id: 3,
      question: "Looking for top engineering consultants in the UAE?",
      answer:
        "Enmaa Engineering Consultants is one of the top engineering consultants in UAE. We are offering complete solutions following the highest industry standards. We work with decades of expertise in engineering, architecture. Enmaa Engineering Consultant has built a reputation for producing remarkable solutions in a variety of industries. Our solutions match current market expectations and also anticipate future requirements.As a client, you can count on the Enmaa team to surpass your expectations.Our engineering contracting company in Sharjah offers you a combination of innovation, engineering perfection, and extensive industry knowledge."
    },
    {
      id: 4,
      question: "Looking for an engineering contracting company in Sharjah that provides perfect solutions?",
      answer:
        "Our significant experience in many technical disciplines makes us a leading engineering contracting company in the UAE. We have successfully completed a number of projects over the years. Our portfolio demonstrates our ability to adapt to different project sizes, complexity, and customer needs. Our experience includes infrastructure construction, as well as specialty engineering services such as geotechnical analysis, structural retrofitting, and sustainability projects.We have the knowledge and resources to carry it out with accuracy, no matter the project’s size."
    },
    {
      id: 5,
      question: "Need a reliable company in Sharjah?",
      answer:
        "When it comes to dependability, Enmaa Engineering Consultants stands out as the best engineering contracting company in Sharjah. We do our best to complete projects on time and under budget. Our team works around the most effective plans while maintaining high quality standards. They can effectively manage risk and handle challenges. This implies that clients can trust us to deliver consistent results. We take pride in our ability to manage projects efficiently.We track progress using innovative technologies and approaches.We do our best to manage resources and ensure that all project stakeholders collaborate seamlessly.This attention to detail prevents delays and reduces expenses.Our top engineering consultants in UAE assure that projects are completed in accordance with the client’s specifications."
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
