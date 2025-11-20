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

import ArabicPage from "../pages-content/ArabicPage";
import EngineeringConsultantsInAjman from "../pages-content/engineering-consultants-in-ajman";
import OurServices from "../pages-content/OurServices";

export default function page({ params }) {
    const decodedSlug = decodeURIComponent(params.slug);
    let content;

    switch (decodedSlug) {
        case "استشارات-هندسية-ابوظبي":
            content = <ArabicPage />;
            break;

        case "engineering-consultants-in-ajman":
            content = <EngineeringConsultantsInAjman />;
            break;
        case "our-services":
            content = <OurServices />;
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