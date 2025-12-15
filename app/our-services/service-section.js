import ServiceCard from "./service-card";
import Image from "next/image";
import servicesText from "@/public/images/Services.webp";
import servicesProject from "@/public/images/projects/448...1.jpg";

export default function ServiceSection({ lang = "en" }) {
    const isArabic = lang === "ar";

    // Translation object for titles & items
    const translations = {
        en: {
            header: {
                main: "Explore our",
                bold: "comprehensive <br /> interior design",
                services: "services",
            },
            services: [
                {
                    id: "01",
                    title: "Engineering Services",
                    image: servicesProject,
                    items: [
                        "Feasibility studies",
                        "Planning",
                        "Project development",
                        "Evaluation of engineering projects",
                        "Technical specifications",
                        "Quantity inventory",
                    ],
                    href: "/engineering-service",
                },
                {
                    id: "02",
                    title: "Design Services",
                    image: servicesProject,
                    items: [
                        "Data collection",
                        "Design idea",
                        "Initial design",
                        "Detailed design",
                        "Final design",
                    ],
                    href: "/design-services",
                },
                {
                    id: "03",
                    title: "Tendering Services",
                    image: servicesProject,
                    items: [
                        "Contract terms",
                        "Initial tender evaluation",
                        "Call for tender",
                        "Tender study",
                        "Final report",
                        "Contractor selection",
                    ],
                    href: "/tenderings-services",
                },
                {
                    id: "04",
                    title: "Supervision",
                    image: servicesProject,
                    items: [
                        "Supervising the construction process",
                        "Quality",
                        "Supervising the timeline and costs",
                        "Claims and contract conclusion",
                    ],
                    href: "/supervision",
                },
                {
                    id: "05",
                    title: "Client Engineer Representative Role",
                    image: servicesProject,
                    items: [
                        "Representing the owner at the workplace",
                        "On-site engagement with customers for better coordination",
                        "Project management to achieve the required quality on time and within the specified budget",
                    ],
                    href: "/client-engineer-representative-role",
                },
                {
                    id: "06",
                    title: "Program Management Services",
                    image: servicesProject,
                    items: [
                        "Determine the project timeline",
                        "Cost management",
                        "Managing relationships between reformers",
                        "Quality control",
                        "Resource management",
                        "Securing needs",
                        "File management",
                        "Guidance",
                    ],
                    href: "/program-management-services",
                },
                {
                    id: "07",
                    title: "Design & Build Project Participation",
                    image: servicesProject,
                    items: [
                        "Direct work with contractors",
                        "Quality and value of business",
                        "Project life cycle",
                        "Budget reduction",
                        "Agendas",
                    ],
                    href: "/design-build-project-participation",
                },
                {
                    id: "08",
                    title: "GIS Services",
                    image: servicesProject,
                    items: [
                        "Finding project solutions",
                        "Consulting services and strategic planning",
                        "Developing data models",
                        "Analysis, data presentation and model design",
                        "Development and integration of projects",
                        "Capacity building and operational support",
                    ],
                    href: "/gis-services",
                },
            ],
        },
        ar: {
            header: {
                main: "استكشف",
                bold: "خدمات التصميم الداخلي <br /> الشاملة",
                services: "",
            },
            services: [
                {
                    id: "١",
                    title: "الخدمات الهندسية",
                    image: servicesProject,
                    items: [
                        "دراسات الجدوى",
                        "التخطيط",
                        "تطوير المشروع",
                        "تقييم المشاريع الهندسية",
                        "المواصفات الفنية",
                        "جرد الكميات",
                    ],
                    href: "/engineering-service",
                },
                {
                    id: "٢",
                    title: "خدمات التصميم",
                    image: servicesProject,
                    items: [
                        "جمع البيانات",
                        "فكرة التصميم",
                        "التصميم الأولي",
                        "التصميم التفصيلي",
                        "التصميم النهائي",
                    ],
                    href: "/design-services",
                },
                {
                    id: "٣",
                    title: "خدمات المناقصات",
                    image: servicesProject,
                    items: [
                        "شروط العقد",
                        "تقييم المناقصة الأولي",
                        "الدعوة لتقديم العطاءات",
                        "دراسة المناقصة",
                        "التقرير النهائي",
                        "اختيار المقاول",
                    ],
                    href: "/tenderings-services",
                },
                {
                    id: "٤",
                    title: "الإشراف",
                    image: servicesProject,
                    items: [
                        "الإشراف على عملية البناء",
                        "الجودة",
                        "الإشراف على الجدول الزمني والتكاليف",
                        "المطالبات وإنهاء العقد",
                    ],
                    href: "/supervision",
                },
                {
                    id: "٥",
                    title: "دور ممثل مهندس العميل",
                    image: servicesProject,
                    items: [
                        "تمثيل المالك في مكان العمل",
                        "التفاعل مع العملاء في الموقع لتنسيق أفضل",
                        "إدارة المشروع لتحقيق الجودة المطلوبة في الوقت المحدد وضمن الميزانية المحددة",
                    ],
                    href: "/client-engineer-representative-role",
                },
                {
                    id: "٦",
                    title: "خدمات إدارة البرامج",
                    image: servicesProject,
                    items: [
                        "تحديد الجدول الزمني للمشروع",
                        "إدارة التكاليف",
                        "إدارة العلاقات بين المنفذين",
                        "مراقبة الجودة",
                        "إدارة الموارد",
                        "تأمين الاحتياجات",
                        "إدارة الملفات",
                        "الإرشاد",
                    ],
                    href: "/program-management-services",
                },
                {
                    id: "٧",
                    title: "المشاركة في مشاريع التصميم والبناء",
                    image: servicesProject,
                    items: [
                        "العمل المباشر مع المقاولين",
                        "جودة وقيمة الأعمال",
                        "دورة حياة المشروع",
                        "تقليل الميزانية",
                        "جداول الأعمال",
                    ],
                    href: "/design-build-project-participation",
                },
                {
                    id: "٨",
                    title: "خدمات نظم المعلومات الجغرافية (GIS)",
                    image: servicesProject,
                    items: [
                        "إيجاد حلول للمشاريع",
                        "الخدمات الاستشارية والتخطيط الاستراتيجي",
                        "تطوير نماذج البيانات",
                        "التحليل، عرض البيانات وتصميم النماذج",
                        "تطوير المشاريع ودمجها",
                        "بناء القدرات والدعم التشغيلي",
                    ],
                    href: "/gis-services",
                },
            ],
        },
    };

    const services = translations[lang].services;
    const header = translations[lang].header;

    return (
        <section className={`py-16 px-4 md:px-8 lg:px-12 ${isArabic ? "rtl" : "ltr"}`}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center relative mb-10">
                    <Image
                        src={servicesText}
                        width={800}
                        height={300}
                        alt="services"
                        className="w-auto h-auto mx-auto"
                    />
                    <div className="text-center mb-12 absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1
                            className="text-2xl md:text-5xl text-nowrap mb-2"
                            dangerouslySetInnerHTML={{ __html: `${header.main} <span class="text-primary font-bold">${header.bold}</span>` }}
                        />
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} isArabic={isArabic} />
                    ))}
                </div>
            </div>
        </section>
    );
}