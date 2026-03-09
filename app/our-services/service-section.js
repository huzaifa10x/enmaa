import ServiceCard from "./service-card";
import Image from "next/image";
import servicesText from "@/public/images/Services.webp";
import servicesProject from "@/public/images/projects/448...1.jpg";
import engineering from "@/public/images/Services-images/Engineering Service/25.jpg";
import design from "@/public/images/Services-images/Engineering Service/24.jpg";
import tender from "@/public/images/Services-images/Tendering-Services/453.jpg";
import supervision from "@/public/images/Services-images/Supervision/21.jpg";
import clientEng from "@/public/images/Services-images/Client-Engineer-Representative/27.jpg";
import program from "@/public/images/Services-images/Program-Management-Services/554.jpg";
import designBuild from "@/public/images/Services-images/Design-Build-Project/46445.jpg";
import GIS from "@/public/images/Services-images/GIS-Services/65.jpg";

export default function ServiceSection({ lang = "en" }) {
    const isArabic = lang === "ar";

    const translations = {
        en: {
            header: {
                main: "Explore our",
                bold: "comprehensive <br /> Services",
                services: "services",
            },
            services: [
                {
                    id: "01",
                    title: "Engineering Services",
                    image: engineering,
                    items: [
                        `<ul class='list-disc pl-6'>
                        <li>Feasibility studies</li>
                        <li>Planning</li>
                        <li>Program development</li>
                        <li>Value engineering</li>
                        <li>Technical specifications</li>
                        <li>Bills of quantities</li>
                    </ul>`,
                    ],
                    href: "/engineering-service",
                },
                {
                    id: "02",
                    title: "Design Services",
                    image: design,
                    items: [
                        `<ul class='list-disc pl-6'>
                        <li>Data collection</li>
                        <li>Concept Design</li>
                        <li>Preliminary Design</li>
                        <li>Detailed Design</li>
                        <li>Final Design</li>
                    </ul>`,
                    ],
                    href: "/design-services",
                },
                {
                    id: "03",
                    title: "Tendering Services",
                    image: tender,
                    items: [
                        `<ul class='list-disc pl-6'>
                        <li>Conditions of Contracts</li>
                        <li>Pre qualification of tender</li>
                        <li>Invitation to tender</li>
                        <li>Tender Analysis</li>
                        <li>Final Report &</li>
                        <li>Contract Award</li>
                    </ul>`,
                    ],
                    href: "/tenderings-services",
                },
                {
                    id: "04",
                    title: "Supervision",
                    image: supervision,
                    items: [
                        `<ul class='list-disc pl-6'>
                        <li>Supervision of construction</li>
                        <li>Quality</li>
                        <li>Time & Cost Control</li>
                        <li>Claims & Commissioning</li>
                    </ul>`,
                    ],
                    href: "/supervision",
                },
                {
                    id: "05",
                    title: "Client Engineer Representative Role",
                    image: clientEng,
                    items: [
                        `<ul class='list-disc pl-6'>
                        <li>Integrated within</li>
                        <li>Client s organization</li>
                        <li>Co Location with clients</li>
                        <li>For Better Coordination</li>
                        <li>Project Interfaces Managment</li>
                        <li>On time or better completion</li>
                        <li>On Budget or better completion</li>
                        <li>Quality compliance</li>
                    </ul>`,
                    ],
                    href: "/client-engineer-representative-role",
                },
                {
                    id: "06",
                    title: "Program Management Services",
                    image: program,
                    items: [
                        `<ul class='list-disc pl-6'>
                            <li>Project life cycle schedules</li>
                            <li>Cost Management</li>
                            <li>Stakeholders Management</li>
                            <li>Quality Assurance & Control</li>
                            <li>Resources Management</li>
                            <li>Procurement</li>
                            <li>Document Control</li>
                            <li>Disseminatio</li>
                        </ul>`,
                    ],
                    href: "/program-management-services",
                },
                {
                    id: "07",
                    title: "Design & Build Project Participation",
                    image: designBuild,
                    items: [
                        `<ul class='list-disc pl-6'>
                        <li>Work closely with the Contractor</li>
                        <li>Produce Effective Value</li>
                        <li>Engineering Ideas</li>
                        <li>Project lifecycle schedules</li>
                        <li>Preserving budget</li>
                        <li>Schedule concern</li>
                    </ul>`
                    ],
                    href: "/design-build-project-participation",
                },
                {
                    id: "08",
                    title: "GIS Services",
                    image: GIS,
                    items: [
                        `<ul class='list-disc pl-6'>
                        <li>Enterprise Solutions</li>
                        <li>Consultancy Services & Strategy Development</li>
                        <li>Data Modeling Development</li>
                        <li>Analysis & Visualization</li>
                        <li>Solution Design</li>
                        <li>Development & Integration</li>
                        <li>Capacity BLDG, Operation & Support</li>
                    </ul>`,
                    ],
                    href: "/gis-services",
                },
            ],
        },

        ar: {
            header: {
                main: "استكشف",
                bold: "خدماتنا <br /> المتكاملة",
                services: "الخدمات",
            },
            services: [
                {
                    id: "01",
                    num: "١",
                    title: "الخدمات الهندسية",
                    image: engineering,
                    items: [
                        `<ul class='list-disc pl-6'>
                    <li>دراسات الجدوى</li>
                    <li>التخطيط</li>
                    <li>تطوير البرامج</li>
                    <li>هندسة القيمة</li>
                    <li>المواصفات الفنية</li>
                    <li>جداول الكميات</li>
                </ul>`,
                    ],
                    href: "/ar/engineering-service",
                },
                {
                    id: "02",
                    num: "٢",
                    title: "خدمات التصميم",
                    image: design,
                    items: [
                        `<ul class='list-disc pl-6'>
                    <li>جمع البيانات</li>
                    <li>التصميم المفاهيمي</li>
                    <li>التصميم المبدئي</li>
                    <li>التصميم التفصيلي</li>
                    <li>التصميم النهائي</li>
                </ul>`,
                    ],
                    href: "/ar/design-services",
                },
                {
                    id: "03",
                    num: "٣",
                    title: "خدمات المناقصات",
                    image: tender,
                    items: [
                        `<ul class='list-disc pl-6'>
                    <li>شروط العقود</li>
                    <li>التأهيل المسبق للمناقصات</li>
                    <li>دعوة لتقديم العطاءات</li>
                    <li>تحليل العطاءات</li>
                    <li>التقرير النهائي</li>
                    <li>ترسية العقد</li>
                </ul>`,
                    ],
                    href: "/ar/tenderings-services",
                },
                {
                    id: "04",
                    num: "٤",
                    title: "الإشراف",
                    image: supervision,
                    items: [
                        `<ul class='list-disc pl-6'>
                    <li>الإشراف على أعمال البناء</li>
                    <li>ضبط الجودة</li>
                    <li>التحكم في الوقت والتكلفة</li>
                    <li>المطالبات والتشغيل</li>
                </ul>`,
                    ],
                    href: "/ar/supervision",
                },
                {
                    id: "05",
                    num: "٥",
                    title: "دور ممثل مهندس العميل",
                    image: clientEng,
                    items: [
                        `<ul class='list-disc pl-6'>
                    <li>الاندماج ضمن</li>
                    <li>هيكل مؤسسة العميل</li>
                    <li>التواجد المشترك مع العميل</li>
                    <li>لتعزيز التنسيق</li>
                    <li>إدارة واجهات المشروع</li>
                    <li>الإنجاز في الوقت المحدد أو أفضل</li>
                    <li>الالتزام بالميزانية أو أفضل</li>
                    <li>الالتزام بمعايير الجودة</li>
                </ul>`,
                    ],
                    href: "/ar/client-engineer-representative-role",
                },
                {
                    id: "06",
                    num: "٦",
                    title: "خدمات إدارة البرامج",
                    image: program,
                    items: [
                        `<ul class='list-disc pl-6'>
                    <li>تحديد الجدول الزمني للمشروع</li>
                    <li>إدارة التكاليف</li>
                    <li>إدارة العلاقات بين الأطراف المعنية</li>
                    <li>مراقبة الجودة</li>
                    <li>إدارة الموارد</li>
                    <li>تأمين الاحتياجات</li>
                    <li>إدارة الملفات</li>
                    <li>التوجيه والإرشاد</li>
                </ul>`,
                    ],
                    href: "/ar/program-management-services",
                },
                {
                    id: "07",
                    num: "٧",
                    title: "المشاركة في مشاريع التصميم والبناء",
                    image: designBuild,
                    items: [
                        `<ul class='list-disc pl-6'>
                    <li>العمل عن قرب مع</li>
                    <li>المقاول</li>
                    <li>تقديم حلول هندسية ذات قيمة فعّالة</li>
                    <li>أفكار هندسية مبتكرة</li>
                    <li>جداول دورة حياة المشروع</li>
                    <li>الحفاظ على الميزانية</li>
                    <li>الالتزام بالجدول الزمني</li>
                </ul>`
                    ],
                    href: "/ar/design-build-project-participation",
                },
                {
                    id: "08",
                    num: "٨",
                    title: "خدمات نظم المعلومات الجغرافية (GIS)",
                    image: GIS,
                    items: [
                        `<ul class='list-disc pl-6'>
                    <li>حلول مؤسسية</li>
                    <li>الخدمات الاستشارية وتطوير الاستراتيجيات</li>
                    <li>تطوير نماذج البيانات</li>
                    <li>التحليل والتصور</li>
                    <li>تصميم الحلول</li>
                    <li>التطوير والتكامل</li>
                    <li>بناء القدرات، التشغيل والدعم</li>
                </ul>`,
                    ],
                    href: "/ar/gis-services",
                },
            ],
        },
    };

    const services = translations[lang].services;
    const header = translations[lang].header;

    return (
        <section className={`py-16 px-4 md:px-8 lg:px-12 ${isArabic ? "rtl " : "ltr"}`}>
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
                {/* <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isArabic ? "" : ""}`}
                 >
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} isArabic={isArabic} />
                    ))}
                </div> */}
                <div
                    className={`flex flex-wrap gap-6 ${isArabic ? "flex-row-reverse" : "flex-row"}`}
                >
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                        >
                            <ServiceCard service={service} isArabic={isArabic} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}