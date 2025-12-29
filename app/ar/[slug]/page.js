const metaDataBySlug = {
    "استشارات-هندسية-ابوظبي": {
        title: "شركات استشارات هندسية في ابوظبي | استشاري هندسي ابوظبي",
        description:
            "هل تبحث عن أفضل شركة استشارات هندسية في أبو ظبي؟ تقدم شركة إنماء للاستشارات الهندسية في أبو ظبي خدمات وحلول متخصصة.",
        canonical: "https://www.enmaaengcon.com/ar/استشارات-هندسية-ابوظبي",
    },

    "engineering-consultants-in-ajman": {
        title: "Engineering Consultants & Companies in Ajman | Engineering consultants Ajman",
        description: "Looking for expert engineering consultants in Ajman? Our top firm provides innovative, tailored solutions for your projects. Contact us today.",
        canonical: "https://www.enmaaengcon.com/engineering-consultants-in-ajman",
    },

    "our-services": {
        title: "أفضل شركات التصميم الداخلي في الشارقة، الإمارات - شركة ديكور في الشارقة",
        description: "إذا كنت بحاجة إلى مصمم داخلي محترف يعمل داخل منزلك, مكتبك, مطعمك أو غير ذلك وتبحث عن أفضل شركات التصميم الداخلي في الشارقة ! فإن إنماء للاستشارات الهندسية هي خيارك الأمثل.",
        canonical: "https://www.enmaaengcon.com/our-services",
    },
};

export async function generateMetadata({ params }) {
    const decodedSlug = decodeURIComponent(params.slug);
    const data = metaDataBySlug[decodedSlug];

    if (!data) {
        return {
            title: "Page Not Found",
            description: "The requested page does not exist.",
        };
    }

    return {
        title: data.title,
        description: data.description,
        alternates: {
            canonical: data.canonical,
            languages: {
                "x-default": data.canonical,
                en: data.canonical.replace("/ar/", "/en/"),
                ar: data.canonical,
            },
        },
        openGraph: {
            title: data.title,
            description: data.description,
            type: "website",
            url: data.canonical,
        },
        twitter: {
            card: "summary_large_image",
            title: data.title,
            description: data.description,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

import TenderingsServices from "@/app/tenderings-services/page";
import ArabicPage from "../pages-content/ArabicPage";
import ContactUs from "../pages-content/contact-us";
import EngineeringConsultantsInAjman from "../pages-content/engineering-consultants-in-ajman";
import EngineeringService from "../pages-content/engineering-service";
import OurProject from "../pages-content/our-projects";
import OurServices from "../pages-content/OurServices";
import ProjectMap from "../pages-content/ProjectMap";
import Supervision from "../pages-content/supervision";
import ClientEngineerRepresentativeRole from "../pages-content/client-engineer-representative-role";
import ProgramManagementServices from "../pages-content/program-management-services";
import HomePage from "../pages-content/homePage";

export default function page({ params }) {
    const decodedSlug = decodeURIComponent(params.slug);
    let content;

    switch (decodedSlug) {
        case "home":
            content = <HomePage />;
            break;
        case "استشارات-هندسية-ابوظبي":
            content = <ArabicPage />;
            break;
        case "engineering-consultants-in-ajman":
            content = <EngineeringConsultantsInAjman />;
            break;
        case "our-services":
            content = <OurServices />;
            break;
        case "project-map":
            content = <ProjectMap />;
            break;
        case "our-projects":
            content = <OurProject />;
            break;
        case "contact-us":
            content = <ContactUs />;
            break;
        case "engineering-service":
            content = <EngineeringService />;
            break;
        case "design-services":
            content = <EngineeringService />;
            break;
        case "tenderings-services":
            content = <TenderingsServices />;
            break;
        case "supervision":
            content = <Supervision />;
            break;
        case "client-engineer-representative-role":
            content = <ClientEngineerRepresentativeRole />;
            break;
        case "program-management-services":
            content = <ProgramManagementServices />;
            break;
        case "design-build-project-participation":
            content = <></>;
            break;
        case "gis-services":
            content = <></>;
            break;

        default:
            content = <div>Page not found</div>;
    }
    return (
        <>
            {content}
        </>
    )
}