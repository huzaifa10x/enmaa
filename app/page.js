export const metadata = {
  title: "Civil Engineering Consultants in Sharjah | Architecture Companies & Firms",
  description: "Enmaa Engineering Consultants deliver high-quality, innovative designs, blending natural and modern styles for personalized home solutions.",
  alternates: {
    canonical: 'https://www.enmaaengcon.com/',
    languages: {
      "x-default": "https://www.enmaaengcon.com/ar/",
      en: "https://www.enmaaengcon.com/",
      ar: "https://www.enmaaengcon.com/ar/",
    },
  },
  openGraph: {
    title: "Civil Engineering Consultants in Sharjah | Architecture Companies & Firms",
    description: "Enmaa Engineering Consultants deliver high-quality, innovative designs, blending natural and modern styles for personalized home solutions.",
    type: "website",
    url: "https://www.enmaaengcon.com/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Civil Engineering Consultants in Sharjah | Architecture Companies & Firms",
    description: "Enmaa Engineering Consultants deliver high-quality, innovative designs, blending natural and modern styles for personalized home solutions.",
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

import DiscoverSlider from "./components/discover-slider";
import WelcomeSection from "./components/welcome-section";
import ServicesSection from "./components/services-section";
import DesignSolutions from "./components/design-solutions";
import TestimonialSlider from "./components/testimonial-slider";
import FAQ from "./components/faq";
import OurProcess from "./components/our-process";
import ProjectsScroller from "./components/projects-scroller";
import OurProjects from "./components/our-projects";
import LocationsSection from "./components/Locations-section";
import Footer from "./components/footer";

export default function Home() {
  const faqData = [
    {
      id: 1,
      question: "What is the background and vision behind Enmaa Engineering Consultants in Sharjah?",
      answer: `
      Enmaa Engineering Consultants was established in 2015 by an experienced group of civil engineering consultants in Sharjah & engineering consultant in Abu Dhabi who aim to make a valuable contribution in the real estate market by providing solid and sustainable designs for residential and commercial spaces, and public structures like sheds and schools.
      <br>
      <br>
      As one of the leading architecture firms and companies in the region, we always strive to earn the confidence of our clients by delivering    world-class building and structure designs that meet the needs, desires, and requirements of the client on the agreed timetable. Our team of  talented Sharjah engineering consultants will meet and collaborate with you to know your ideas and specifications.`
    },
    {
      id: 2,
      question: "How does Enmaa Engineering Consultants ensure an innovative and client-focused design process?",
      answer: `
      As a premier engineering consulting company in the UAE, we always ensure that our client’s needs are met with satisfaction. Our client-centered approach enables us to provide accurate design solutions that will meet and exceed the expectations of our clients, from the main design blueprint to the smallest space details.
      <br>
      <br>
      We also employ hired science and diligence to ensure that our designs comply with the industry standards and also sustainable for maintenance and long-term use. We take into account the functionality of the space and the needs of the people who will be using the space.`
    },
    {
      id: 3,
      question: "What professional strengths does Enmaa’s team of civil engineering consultants bring to their projects?",
      answer: `
      Enmaa is composed of talented architecture and design professionals who are known for their architectural and engineering skills. Their portfolio boast of outstanding designs and structural blueprints that are built and transformed into architectural masterpieces and spaces that can be seen today.
      <br>
      <br>
      Our crew’s practical experience in the field of construction and investment is sure to deliver the best architectural and engineering solution that satisfy any client, investor, or stakeholder.
      <br>
      <br>
      Browse our site to check out our latest projects and designs. Call us on +971 50 618 5529 to schedule an appointment or email us on info@enmaaengcon.com
      <br>
      <br>
      What specialized engineering and architectural solutions does Enmaa Engineering offer for Sharjah’s unique environment?
      <br>
      <br>
      Enmaa Engineering is a leading civil engineering and architectural company in Sharjah that offers integrated civil engineering solutions that seamlessly blend functionality and fine aesthetics. As one of the leading engineering specialists in Sharjah, our aim is to make sure that your initiatives meet all regulatory necessities even as exceeding layout expectations.
      <br>
      <br>
      Our talented specialists at Enmaa Engineering own deep information of the complicated hurdles supplied by Sharjah’s urban backdrop. Therefore, we have a specialized group of engineers who possess in-depth knowledge of the location’s guidelines and climatic state of affairs. This allows us to create custom solutions to our clients which caters for the particular regional needs.`
    },
    {
      id: 4,
      question: "How does Enmaa Engineering uphold quality and sustainability across various architectural and civil engineering projects?",
      answer: `
      At Enmaa Engineering, we take incredible pleasure in our capability to be agile and innovative in response to the particular necessities that each undertaking provides. Whether it is a complex of residences, a commercial venture, or even an office space, our designs are guided by three key principles: functionality, aesthetics, and sustainability; these reflect our unwavering commitment to quality across all realms of civil engineering and architecture within Sharjah.
      <br>
      <br>
      What precisely sets us apart from other civil engineering companies in Sharjah is our unwavering commitment to excellence. We work closely with our clients ensuring their vision is realized within their financial constraints and deadlines. By using cutting-edge technologies and industry best standards, Enmaa Engineering delivers efficient and sustainable engineering solutions designed to function for a long time.
      <br>
      <br>
      Opting for us as your civil engineering associate include hiring a team of specialists determined to create a flourishing future for Sharjah built on robust foundations.
      <br>
      <br>
      Contact us today to discuss your project requirements, and let us show you why we are the trusted choice among civil engineering companies in Sharjah.`
    },
    {
      id: 5,
      question: "What makes Enmaa Engineering Consultants a reputable and trusted engineering consultancy across the UAE?",
      answer: `
      Enmaa Engineering Consultants is one of the top engineering consultants in UAE. We are offering complete solutions following the highest industry standards. We work with decades of expertise in engineering, architecture. Enmaa Engineering Consultant has built a reputation for producing remarkable solutions in a variety of industries.
      <br>
      <br>
      Our solutions match current market expectations and also anticipate future requirements. As a client, you can count on the Enmaa team to surpass your expectations. Our engineering contracting company in Sharjah offers you a combination of innovation, engineering perfection, and extensive industry knowledge.`
    },
    {
      id: 6,
      question: "How does Enmaa Engineering deliver comprehensive project solutions as a leading contracting company in Sharjah?",
      answer: `
      Enmaa Engineering Consultants is delighted to be the perfect engineering contracting company in Sharjah, providing specialized solutions that span every step of a project, from inception to completion. Our services include thorough designs, procurement and construction management.
      <br>
      <br>
      Our team of experts guarantees that each project is managed with professionalism. We are one of the leading architecture firms in Sharjah. We offer creative solutions that you won’t find elsewhere.
      <br>
      <br>
      We have extensive expertise in implementing complicated civil, structural, and MEP (mechanical, electrical, and plumbing) projects. It makes us a desirable partner for both private and public sector clients. As one of the top architecture firms in sharjah, we specialize in designing structures that are visually appealing and also useful.`
    },
    {
      id: 7,
      question: "How has Enmaa Engineering’s extensive experience shaped its position as a top engineering contracting company in the UAE?",
      answer: `
      Our significant experience in many technical disciplines makes us a leading engineering contracting company in the UAE. We have successfully completed a number of projects over the years. Our portfolio demonstrates our ability to adapt to different project sizes, complexity, and customer needs.
      <br>
      <br>
      Our experience includes infrastructure construction, as well as specialty engineering services such as geotechnical analysis, structural retrofitting, and sustainability projects. We have the knowledge and resources to carry it out with accuracy, no matter the project’s size.`
    },
    // {
    //   id: 8,
    //   question: "In what ways does Enmaa Engineering develop customized engineering solutions for different project types?",
    //   answer: `
    //   Our top feature is its ability to provide custom engineering solutions. We address the every needs of each project. As the best engineering contracting company, we recognize that each customer has specific requirements. Whether they are in the residential, commercial, industrial, or public sectors, we work with them all.
    //   <br>
    //   <br>
    //   Our engineers, architects, and project managers collaborate closely with customers to create unique strategies that include their vision, budget, and timeframe. This collaborative approach guarantees that each project is developed and performed to maximize value while following the highest safety and quality requirements.`
    // },
    // {
    //   id: 9,
    //   question: "Why is Enmaa Engineering considered one of the most reliable engineering firms in Sharjah?",
    //   answer: `
    //   When it comes to dependability, Enmaa Engineering Consultants stands out as the best engineering contracting company in Sharjah. We do our best to complete projects on time and under budget. Our team works around the most effective plans while maintaining high quality standards. They can effectively manage risk and handle challenges. This implies that clients can trust us to deliver consistent results.
    //   <br>
    //   <br>
    //   We take pride in our ability to manage projects efficiently. We track progress using innovative technologies and approaches. We do our best to manage resources and ensure that all project stakeholders collaborate seamlessly. This attention to detail prevents delays and reduces expenses. Our top engineering consultants in UAE assure that projects are completed in accordance with the client’s specifications.`
    // },
    // {
    //   id: 10,
    //   question: "How does Enmaa Engineering stay ahead through innovation and advanced engineering practices?",
    //   answer: `
    //   Enmaa maintains its leadership position in an ever-changing sector by offering new solutions. We are constantly looking for new ways to improve our processes, incorporate newer technology, and implement best practices to expand our service offerings.
    //   <br>
    //   <br>
    //   Our emphasis on innovation enables us to develop projects that are future-ready. Our top engineering consultants in UAE are continually pushing the frontiers of what is possible. They perform exceptionally in developing solutions that are practical and creative.`
    // },
    // {
    //   id: 11,
    //   question: "How does Enmaa provide high-quality architectural services while maintaining cost-effective project delivery?",
    //   answer: `
    //   Enmaa believes that high-quality engineering services should not be prohibitively expensive. As one of the best architecture firms in Sharjah, we provide best consultation services. We ensure that our services are affordable without sacrificing quality. We recognize that cost containment is a crucial priority for our clients. That is why we are devoted to providing value throughout the project.
    //   <br>
    //   <br>
    //   We can keep costs low while providing great outcomes. That is due to careful planning, effective resource management, and smart connections with suppliers. Our clear pricing system guarantees that clients understand precisely what they are paying for. We work with no hidden costs or surprises. Connect with us today and explore our exceptional services.`
    // },
  ];

  return (
    <>
      <main className="min-h-screen scroll-smooth">
        <DiscoverSlider />
        <WelcomeSection />
        <ServicesSection />
        <OurProcess />
        {/* <ProjectSlider /> */}
        <OurProjects />
        <LocationsSection />
        <DesignSolutions />
        <FAQ faqData={faqData} />
        <TestimonialSlider />
        <ProjectsScroller />
      </main>
      <Footer />
    </>
  );
}