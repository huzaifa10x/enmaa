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
import TenderingServicesArabic from "../pages-content/tenderings-services";
import DesignBuildProjectParticipationArabic from "../pages-content/design-build-project-participation";
import GisArabic from "../pages-content/gis-services";
import DeesignServices from "../pages-content/design-services";
import Footer from "@/app/components/footer";

const metaDataBySlug = {
    "استشارات-هندسية-ابوظبي": {
        title: "شركات استشارات هندسية في ابوظبي | استشاري هندسي ابوظبي",
        description: "هل تبحث عن أفضل شركة استشارات هندسية في أبو ظبي؟ تقدم شركة إنماء للاستشارات الهندسية في أبو ظبي خدمات وحلول متخصصة. ثق في شركتنا للاستشارات الهندسية في أبو ظبي للحصول على استشارات موثوقة ومبتكرة.",
        canonical: 'https://www.enmaaengcon.com/ar/استشارات-هندسية-ابوظبي',
    },
    "project-map": {
        title: "خريطة المواقع | إنماء للاستشارات الهندسية",
        description: "اكتشف خريطة مواقعنا في الشارقة، الإمارات. نقدم خدمات استشارات هندسية متميزة في جميع أنحاء المنطقة.",
        canonical: 'https://www.enmaaengcon.com/ar/project-map',
    },
    "our-services": {
        title: "أفضل شركات التصميم الداخلي في الشارقة، الإمارات - شركة ديكور في الشارقة",
        description: "إذا كنت بحاجة إلى مصمم داخلي محترف يعمل داخل منزلك, مكتبك, مطعمك أو غير ذلك وتبحث عن أفضل شركات التصميم الداخلي في الشارقة ! فإن إنماء للاستشارات الهندسية هي خيارك الأمثل.",
        canonical: "https://www.enmaaengcon.com/our-services",
    },
    "engineering-consultants-in-ajman": {
        title: "استشاريون وشركات الهندسة في عجمان | استشارات هندسية في عجمان",
        description: "هل تبحث عن استشاريين هندسيين في عجمان؟ تقدم شركتنا خدمات التصميم المعماري والهندسة المدنية والإشراف على المشاريع بحلول مبتكرة تلبي احتياجاتك.",
        canonical: "https://www.enmaaengcon.com/ar/engineering-consultants-in-ajman/",
    },
    "contact-us": {
        title: "تواصل معنا | إنماء للاستشارات الهندسية",
        description: "تواصل معنا اليوم لطلب استشارة مجانية حول خدمات الاستشارات الهندسية. نحن هنا لمساعدتك في تحقيق أهداف مشروعك.",
        canonical: "https://www.enmaaengcon.com/ar/contact-us",
    },
    "our-projects": {
        title: "أحدث مشاريعنا الهندسية في الشارقة | إنماء للاستشارات الهندسية",
        description: "تعرف على أحدث مشاريعنا الهندسية في الشارقة، الإمارات. نقدم خدمات استشارات هندسية متميزة في جميع أنحاء المنطقة.",
        canonical: "https://www.enmaaengcon.com/ar/our-projects",
    },
    "supervision": {
        title: "الإشراف على المشاريع | إنماء للاستشارات الهندسية",
        description: "خدمة الإشراف على المشاريع لدينا تضمن تنفيذ المشاريع بجودة عالية وفقًا للمعايير المطلوبة. نوفر إشرافًا شاملًا على جميع مراحل المشروع.",
        canonical: "https://www.enmaaengcon.com/ar/supervision",
    },
    "client-engineer-representative-role": {
        title: "دور الممثل الهندسي للعميل | إنماء للاستشارات الهندسية",
        description: "خدمة دور الممثل الهندسي للعميل لدينا تضمن تمثيل احتياجات العميل بفعالية وتقديم حلول هندسية مبتكرة. نوفر خدمة متميزة لتمثيل العملاء في جميع مراحل المشروع.",
        canonical: "https://www.enmaaengcon.com/ar/client-engineer-representative-role",
    },
    "program-management-services": {
        title: "خدمات إدارة البرامج | إنماء للاستشارات الهندسية",
        description: "تقدم شركتنا خدمات إدارة البرامج لتوفير حلول هندسية متكاملة وفعالة. نحن نقدم خدمة متميزة لإدارة البرامج الهندسية في جميع أنحاء المنطقة.",
        canonical: "https://www.enmaaengcon.com/ar/program-management-services",
    },
    "design-build-project-participation": {
        title: "مشاركة في مشاريع البناء والتصميم | إنماء للاستشارات الهندسية",
        description: "شارك في مشاريع البناء والتصميم مع شركتنا. نقدم خدمات متميزة لمشاركة الشركات في مشاريع البناء والتصميم في جميع أنحاء المنطقة.",
        canonical: "https://www.enmaaengcon.com/ar/design-build-project-participation",
    },
    "gis-services": {
        title: "خدمات نظم المعلومات الجغرافية | إنماء للاستشارات الهندسية",
        description: "نقدم خدمات نظم المعلومات الجغرافية المتقدمة لتقديم حلول هندسية متكاملة وفعالة. نحن نقدم خدمة متميزة لتقديم خدمات نظم المعلومات الجغرافية في جميع أنحاء المنطقة.",
        canonical: "https://www.enmaaengcon.com/ar/gis-services",
    },
    "tenderings-services": {
        title: "خدمات المناقصات | إنماء للاستشارات الهندسية",
        description: "نقدم خدمات المناقصات المتقدمة لتقديم حلول هندسية متكاملة وفعالة. نحن نقدم خدمة متميزة لتقديم خدمات المناقصات في جميع أنحاء",
        canonical: "https://www.enmaaengcon.com/ar/tenderings-services",
    },
};

// --- ADD THIS FUNCTION FOR STATIC EXPORT ---
export function generateStaticParams() {
    // Collect all unique slugs from your metadata and your switch cases
    const slugs = [
        "home", // from your switch case
        "engineering-service", // from your switch case
        "design-services", // from your switch case
        ...Object.keys(metaDataBySlug)
    ];

    return slugs.map((slug) => ({
        slug: slug,
    }));
}
// -------------------------------------------

export async function generateMetadata({ params }) {
    // Await the params before using them
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
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

export default async function page({ params }) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    
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
            content = <DeesignServices />;
            break;
        case "tenderings-services":
            content = <TenderingServicesArabic />;
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
            content = <DesignBuildProjectParticipationArabic />;
            break;
        case "gis-services":
            content = <GisArabic />;
            break;
        default:
            content = <div>Page not found</div>;
    }

    return (
        <>
            {content}
            <Footer />
        </>
    );
}