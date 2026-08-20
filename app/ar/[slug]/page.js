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
    "home": {
        title: "إنماء للاستشارات الهندسية | الرئيسية",
        description: "شركة إنماء للاستشارات الهندسية تقدم حلول هندسية ومعمارية متكاملة ب جودة عالية.",
        arPath: "",
        enPath: "",
    },
    "استشارات-هندسية-ابوظبي": {
        title: "شركات استشارات هندسية في ابوظبي | استشاري هندسي ابوظبي",
        description: "هل تبحث عن أفضل شركة استشارات هندسية في أبو ظبي؟ تقدم شركة إنماء للاستشارات الهندسية في أبو ظبي خدمات وحلول متخصصة.",
        arPath: "استشارات-هندسية-ابوظبي",
        enPath: "engineering-consultant-in-abu-dhabi", // English exact slug map kiya
    },
    "project-map": {
        title: "خريطة المواقع | إنماء للاستشارات الهندسية",
        description: "اكتشف خريطة مواقعنا في الشارقة، الإمارات. نقدم خدمات استشارات هندسية متميزة في جميع أنحاء المنطقة.",
        arPath: "project-map",
        enPath: "project-map",
    },
    "our-services": {
        title: "أفضل شركات التصميم الداخلي في الشارقة، الإمارات - شركة ديكور في الشارقة",
        description: "إذا كنت بحاجة إلى مصمم داخلي محترف تعمل داخل منزلك, مكتبك, مطعمك أو غير ذلك وتبحث عن أفضل شركات التصميم الداخلي في الشارقة.",
        arPath: "our-services",
        enPath: "our-services",
    },
    "engineering-consultants-in-ajman": {
        title: "استشاريون وشركات الهندسة في عجمان | استشارات هندسية في عجمان",
        description: "هل تبحث عن استشاريين هندسيين في عجمان؟ تقدم شركتنا خدمات التصميم المعماري والهندسة المدنية والإشراف على المشاريع.",
        arPath: "engineering-consultants-in-ajman",
        enPath: "engineering-consultants-in-ajman",
    },
    "contact-us": {
        title: "تواصل معنا | إنماء للاستشارات الهندسية",
        description: "تواصل معنا اليوم لطلب استشارة مجانية حول خدمات الاستشارات الهندسية. نحن هنا لمساعدتك.",
        arPath: "contact-us",
        enPath: "contact-us",
    },
    "our-projects": {
        title: "أحدث مشاريعنا الهندسية في الشارقة | إنماء للاستشارات الهندسية",
        description: "تعرف على أحدث مشاريعنا الهندسية في الشارقة، الإمارات. نقدم خدمات استشارات هندسية متميزة.",
        arPath: "our-projects",
        enPath: "our-projects",
    },
    "supervision": {
        title: "الإشراف على المشاريع | إنماء للاستشارات الهندسية",
        description: "خدمة الإشراف على المشاريع لدينا تضمن تنفيذ المشاريع بجودة عالية وفقًا للمعايير المطلوبة.",
        arPath: "supervision",
        enPath: "supervision",
    },
    "client-engineer-representative-role": {
        title: "دور الممثل الهندسي للعميل | إنماء للاستشارات الهندسية",
        description: "خدمة دور الممثل الهندسي للعميل لدينا تضمن تمثيل احتياجات العميل بفعالية.",
        arPath: "client-engineer-representative-role",
        enPath: "client-engineer-representative-role",
    },
    "program-management-services": {
        title: "خدمات إدارة البرامج | إنماء للاستشارات الهندسية",
        description: "تقدم شركتنا خدمات إدارة البرامج لتوفير حلول هندسية متكاملة وفعالة.",
        arPath: "program-management-services",
        enPath: "program-management-services",
    },
    "design-build-project-participation": {
        title: "مشاركة في مشاريع البناء والتصميم | إنماء للاستشارات الهندسية",
        description: "شارك في مشاريع البناء والتصميم مع شركتنا. نقدم خدمات متميزة لمشاركة الشركات.",
        arPath: "design-build-project-participation",
        enPath: "design-build-project-participation",
    },
    "gis-services": {
        title: "خدمات نظم المعلومات الجغرافية | إنماء للاستشارات الهندسية",
        description: "نقدم خدمات نظم المعلومات الجغرافية المتقدمة لتقديم حلول هندسية متكاملة وفعالة.",
        arPath: "gis-services",
        enPath: "gis-services",
    },
    "tenderings-services": {
        title: "خدمات المناقصات | إنماء للاستشارات الهندسية",
        description: "نقدم خدمات المناقصات المتقدمة لتقديم حلول هندسية متكاملة وفعالة.",
        arPath: "tenderings-services",
        enPath: "tenderings-services",
    },
    "engineering-service": {
        title: "الخدمات الهندسية | إنماء للاستشارات الهندسية",
        description: "تصفح الخدمات الهندسية المتنوعة التي تقدمها شركة إنماء للاستشارات الهندسية.",
        arPath: "engineering-service",
        enPath: "engineering-service",
    },
    "design-services": {
        title: "خدمات التصميم | إنماء للاستشارات الهندسية",
        description: "خدمات تصميم معمارية وإنشائية احترافية تناسب احتياجاتك.",
        arPath: "design-services",
        enPath: "design-services",
    },
};

export function generateStaticParams() {
    return Object.keys(metaDataBySlug).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const data = metaDataBySlug[decodedSlug];

    if (!data) {
        return {
            title: "Page Not Found",
            description: "The requested page does not exist.",
        };
    }

    const domain = "https://www.enmaaengcon.com";
    
    // Arabic Page canonical setup (encoded for non-ASCII characters)
    const arCanonical = data.arPath === "" 
        ? `${domain}/ar/` 
        : encodeURI(`${domain}/ar/${data.arPath}/`);

    // English Alternate target URL setup
    const enAlternate = data.enPath === "" 
        ? `${domain}/` 
        : encodeURI(`${domain}/${data.enPath}/`);

    return {
        title: data.title,
        description: data.description,
        alternates: {
            canonical: arCanonical,
            languages: {
                "x-default": enAlternate,
                en: enAlternate,
                ar: arCanonical,
            },
        },
        openGraph: {
            title: data.title,
            description: data.description,
            type: "website",
            url: arCanonical,
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