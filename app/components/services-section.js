"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { MdOutlineEngineering } from "react-icons/md"
import { BsBuildings } from "react-icons/bs"
import { SiAffinitydesigner } from "react-icons/si"
import { FaRegHandshake } from "react-icons/fa6"
import image1 from "@/public/images/home-services/3.jpg"
import image2 from "@/public/images/home-services/4.jpg"
import image3 from "@/public/images/home-services/5.jpg"
import image4 from "@/public/images/home-services/6.jpg"
import image5 from "@/public/images/home-services/7.jpg"
import image6 from "@/public/images/home-services/558.jpg"
import image7 from "@/public/images/home-services/8145.jpg"
import image8 from "@/public/images/home-services/ae.jpg"
import engineering from "@/public/images/Services-images/Engineering Service/25.jpg";
import design from "@/public/images/Services-images/Engineering Service/24.jpg";
import tender from "@/public/images/Services-images/Tendering-Services/453.jpg";
import supervision from "@/public/images/Services-images/Supervision/21.jpg";
import clientEng from "@/public/images/Services-images/Client-Engineer-Representative/27.jpg";
import program from "@/public/images/Services-images/Program-Management-Services/554.jpg";
import designBuild from "@/public/images/Services-images/Design-Build-Project/46445.jpg";
import GIS from "@/public/images/Services-images/GIS-Services/65.jpg";

import { ArrowLeft, ArrowRight } from "lucide-react"
import ServicesSliderMobile from "./ServicesSliderMobile"
import useGsapPin from "./hooks/useGsapPin"

// const services = [
//     {
//         id: 1,
//         title: "Engineering Services",
//         desc:
//             `<ul class='list-disc pl-6'>
//                 <li>Feasibility studies</li>
//                 <li>Planning</li>
//                 <li>Program development</li>
//                 <li>Value engineering</li>
//                 <li>Technical specifications</li>
//                 <li>Bills of quantities</li>
//             </ul>`,
//         img: image1,
//         icon: <MdOutlineEngineering className="text-white" size={60} />,
//     },
//     {
//         id: 2,
//         title: "Design services",
//         desc:
//             `<ul class='list-disc pl-6'>
//                 <li>Data collection</li>
//                 <li>Concept Design</li>
//                 <li>Preliminary Design</li>
//                 <li>Detailed Design</li>
//                 <li>Final Design</li>
//             </ul>`,
//         img: image2,
//         icon: <BsBuildings className="text-white" size={60} />,
//     },
//     {
//         id: 3,
//         title: "Tendering Services",
//         desc:
//             `<ul class='list-disc pl-6'>
//                 <li>Conditions of Contracts</li>
//                 <li>Pre qualification of tender</li>
//                 <li>Invitation to tender</li>
//                 <li>Tender Analysis</li>
//                 <li>Final Report &</li>
//                 <li>Contract Award</li>
//             </ul>`,
//         img: image3,
//         icon: <SiAffinitydesigner className="text-white" size={60} />,
//     },
//     {
//         id: 4,
//         title: "Supervision",
//         desc:
//             `<ul class='list-disc pl-6'>
//                 <li>Supervision of construction</li>
//                 <li>Quality</li>
//                 <li>Time & Cost Control</li>
//                 <li>Claims & Commissioning</li>
//             </ul>`,
//         img: image4,
//         icon: <FaRegHandshake className="text-white" size={60} />,
//     },
//     {
//         id: 5,
//         title: "Client Engineer Representative Role",
//         desc:
//             `<ul class='list-disc pl-6'>
//                 <li>Integrated within</li>
//                 <li>Client s organization</li>
//                 <li>Co Location with clients</li>
//                 <li>For Better Coordination</li>
//                 <li>Project Interfaces Managment</li>
//                 <li>On time or better completion</li>
//                 <li>On Budget or better completion</li>
//                 <li>Quality compliance</li>
//             </ul>`, img: image5,
//         icon: <MdOutlineEngineering className="text-white" size={60} />,
//     },
//     {
//         id: 6,
//         title: "Program MGMT Services",
//         desc:
//             `<ul class='list-disc pl-6'>
//                 <li>Project life cycle schedules</li>
//                 <li>Cost Management</li>
//                 <li>Stakeholders Management</li>
//                 <li>Quality Assurance & Control</li>
//                 <li>Resources Management</li>
//                 <li>Procurement</li>
//                 <li>Document Control</li>
//                 <li>Dissemination</li>
//             </ul>`,
//         img: image6,
//         icon: <BsBuildings className="text-white" size={60} />,
//     },
//     {
//         id: 7,
//         title: "Design & Build Project Participation",
//         desc:
//             `<ul class='list-disc pl-6'>
//                 <li>Work closely with the</li>
//                 <li>Contractor</li>
//                 <li>Produce Effective Value</li>
//                 <li>Engineering Ideas</li>
//                 <li>Project lifecycle schedules</li>
//                 <li>Preserving budget</li>
//                 <li>Schedule concern</li>
//             </ul>`,
//         img: image7,
//         icon: <SiAffinitydesigner className="text-white" size={60} />,
//     },
//     {
//         id: 8,
//         title: "GIS Services",
//         desc:
//             `<ul class='list-disc pl-6'>
//                 <li>Enterprise Solutions</li>
//                 <li>Consultancy Services & Strategy Development</li>
//                 <li>Data Modeling Development</li>
//                 <li>Analysis & Visualization</li>
//                 <li>Solution Design</li>
//                 <li>Development & Integration</li>
//                 <li>Capacity BLDG, Operation & Support</li>
//             </ul>`,
//         img: image8,
//         icon: <FaRegHandshake className="text-white" size={60} />,
//     },
// ]

export default function ServicesSection({ lang = "en" }) {
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
                    image: image1,
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
                    image: image2,
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
                    image: image3,
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
                    image: image4,
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
                    image: image5,
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
                    image: image6,
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
                    image: image7,
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
                    image: image8,
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
                    href: "/engineering-service",
                },
                {
                    id: "02",
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
                    href: "/design-services",
                },
                {
                    id: "03",
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
                    href: "/tenderings-services",
                },
                {
                    id: "04",
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
                    href: "/supervision",
                },
                {
                    id: "05",
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
                    href: "/client-engineer-representative-role",
                },
                {
                    id: "06",
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
                    href: "/program-management-services",
                },
                {
                    id: "07",
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
                    href: "/design-build-project-participation",
                },
                {
                    id: "08",
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
                    href: "/gis-services",
                },
            ],
        },
    };

    const services = translations[lang].services;
    const header = translations[lang].header;

    const [activeImg, setActiveImg] = useState(image1)

    const handleHover = (img) => {
        setActiveImg(img)
    }
    const sliderRef = useRef(null)
    const sectionRef = useRef(null)
    useGsapPin(sectionRef)

    return (
        <>
            <section className="lg:block hidden relative z-40 md:rounded-t-[50px] overflow-y-hidden h-screen" ref={sectionRef}>
                <section ref={sliderRef} className="relative md:flex hidden flex-col items-center justify-center bg-gradient-to-r from-[#01b2eb] to-primary  overflow-hidden">
                    {/* background image */}
                    <Image
                        src={activeImg}
                        alt="Background"
                        fill
                        className="object-cover transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
                    {/* slider container */}
                    <div className="relative z-10 w-full h-full overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth scrollbar-hide">
                        <div className="flex w-max group">
                            {services.map((service) => (
                                <div key={service.id}
                                    onMouseEnter={() => handleHover(service.image)}
                                    className="group relative w-[90vw] group-hover:bg-black/60 sm:w-[50vw] lg:w-[25vw] h-screen snap-center shrink-0 border-r border-white/35 overflow-hidden hover:bg-transparent duration-300 flex items-end p-6"
                                >
                                        
                                        <div className="mb-3 font-ps absolute top-[10%] text-3xl group-hover:opacity-100 opacity-0 duration-300 font-light text-transparent" style={{
                                            WebkitTextStroke: "1px #fff",
                                            fontFamily: "system-ui",
                                        }}>{service.id}</div>
                                    <div className="z-10 transition-all duration-300 relative group-hover:bottom-0 bottom-12">

                                        <div className="brightness-50 group-hover:brightness-200 duration-300">
                                            <div className="mb-3">{service.icon}</div>
                                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                                {service.title}
                                            </h3>
                                            <div className="opacity-0 group-hover:block hidden group-hover:opacity-100 transition-opacity duration-300 text-white text-sm" dangerouslySetInnerHTML={{ __html: service.items }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* optional nav buttons */}
                    <div className="absolute top-80 flex gap-4 justify-between z-20 w-full px-20">
                        <button
                            onClick={() =>
                                (document.querySelector(".scrollbar-hide").scrollLeft -= 400)
                            }
                            className="text-white px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            onClick={() =>
                                (document.querySelector(".scrollbar-hide").scrollLeft += 400)
                            }
                            className="text-white px-6 border border-neutral-400 py-2 rounded-full hover:bg-neutral-400 transition"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </section>
            </section>
            <section className="md:hidden z-50">
                <section ref={sliderRef} className=' bg-white min-h-screen'>
                    <ServicesSliderMobile services={services} />
                </section>
            </section>
        </>
    )
}