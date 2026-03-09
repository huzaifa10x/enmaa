import image1 from "@/public/images/Services-images/Program-Management-Services/34.jpg"
import image2 from "@/public/images/Services-images/Program-Management-Services/76.jpg"
import image3 from "@/public/images/Services-images/Program-Management-Services/87.jpg"
import image4 from "@/public/images/Services-images/Program-Management-Services/554.jpg"
import ServicesBanner from "@/app/components/services-banner"
import ServicesPageSlider from "@/app/ar/ArComponents/ArHome/components/services-page-slider"
import Testimonial from '../ArComponents/ArHome/components/Testimonial'

export default function ProgramManagementServices() {
    const images = [image1, image2, image3, image4]

    return (
        <main className="rtl text-end" dir="rtl">
            <ServicesBanner />

            {/* Header Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
                <h1 className="text-4xl font-bold text-foreground mb-2 text-right">
                    خدمات إدارة البرامج
                </h1>
                <p className="text-muted-foreground text-sm  text-right">
                    الرئيسية / خدمات إدارة البرامج
                </p>
            </section>

            {/* Slider */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ServicesPageSlider images={images} />
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <h1 className='text-2xl font-semibold mb-5  text-right'>
                    الإشراف على المشاريع المعقدة لتحقيق النجاح الاستراتيجي
                </h1>

                <p className="text-foreground text-base leading-relaxed mb-6 text-right">
                    تقدم شركة إنماء خدمات إدارة البرامج لضمان الإشراف والتنسيق الفعّال على المشاريع المعقدة
                    ومجموعات المشاريع المتعددة. نحن نضمن أن الأنشطة المرتبطة ببعضها البعض تسير في مسار
                    متوافق مع أهداف العميل. يقوم مديرو البرامج لدينا بإعداد جداول متكاملة لدورة حياة المشروع
                    تشمل التصميم، والمشتريات، والإنشاء، والتشغيل. كما نعتمد نظم إدارة تكلفة قوية لتتبع
                    المصروفات وتوقع التكلفة النهائية وتحديد فرص خفض التكلفة أثناء التنفيذ.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6 text-right">
                    إدارة أصحاب المصلحة هي محور عملنا، حيث نضمن فهم مختلف الاهتمامات وتلبية التوقعات
                    وتحقيق التواصل الفعّال بين جميع الأطراف.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6 text-right">
                    تشمل عمليات ضمان الجودة ومراقبة الجودة التي نقوم بها جميع مستويات المشروع. نقوم بتحديد
                    معايير الجودة ووضع أنظمة الفحص وتنفيذ عمليات التدقيق لضمان توافق الأعمال مع
                    المواصفات والمتطلبات التنظيمية. كما نعمل على إدارة الموارد من خلال تخصيص العمالة
                    والمعدات والمواد بشكل مثالي عبر مشاريع متعددة. ويضمن نظام التحكم المركزي بالوثائق
                    أن جميع المشاركين يستخدمون المعلومات الصحيحة والمحدّثة.
                </p>
            </section>

            <Testimonial />
        </main>
    )
}
