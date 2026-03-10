export const metadata = {
  title: "أفضل شركات التصميم الداخلي في الشارقة، الإمارات - شركة ديكور في الشارقة",
  description: "إذا كنت بحاجة إلى مصمم داخلي محترف يعمل داخل منزلك, مكتبك, مطعمك أو غير ذلك وتبحث عن أفضل شركات التصميم الداخلي في الشارقة ! فإن إنماء للاستشارات الهندسية هي خيارك الأمثل.",
  alternates: {
    canonical: 'https://www.enmaaengcon.com/our-services/',
    languages: {
      "x-default": "https://www.enmaaengcon.com/our-services/",
      en: "https://www.enmaaengcon.com/our-services/",
      ar: "https://www.enmaaengcon.com/ar/our-services/",
    },
  },
  openGraph: {
    title: "أفضل شركات التصميم الداخلي في الشارقة، الإمارات - شركة ديكور في الشارقة",
    description: "إذا كنت بحاجة إلى مصمم داخلي محترف يعمل داخل منزلك, مكتبك, مطعمك أو غير ذلك وتبحث عن أفضل شركات التصميم الداخلي في الشارقة ! فإن إنماء للاستشارات الهندسية هي خيارك الأمثل.",
    type: "website",
    url: "https://www.enmaaengcon.com/our-services/"
  },
  twitter: {
    card: "summary_large_image",
    title: "أفضل شركات التصميم الداخلي في الشارقة، الإمارات - شركة ديكور في الشارقة",
    description: "إذا كنت بحاجة إلى مصمم داخلي محترف يعمل داخل منزلك, مكتبك, مطعمك أو غير ذلك وتبحث عن أفضل شركات التصميم الداخلي في الشارقة ! فإن إنماء للاستشارات الهندسية هي خيارك الأمثل.",
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