
import image1 from "@/public/images/projects/448...1.jpg"
import image2 from "@/public/images/projects/1438-07.jpg"
import image3 from "@/public/images/projects/1438-17.jpg"
import image4 from "@/public/images/projects/1438-19.jpg"
import image5 from "@/public/images/projects/1841-01.jpg"
import image7 from "@/public/images/projects/1841-02.jpg"
import image8 from "@/public/images/projects/1855-01.jpg"
import image12 from "@/public/images/projects/1902.jpg"
import ServicesBanner from "@/app/components/services-banner"
import ServicesPageSlider from "@/app/components/services-page-slider"
import Testimonial from '../ArComponents//ArHome/components/Testimonial'

export default function EngineeringService() {
    const images = [image1, image2, image3, image4, image5, image12, image7, image8]

    return (
        <main className="">
            <ServicesBanner />
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-end">
                <h1 className="text-4xl font-bold text-foreground mb-2">الخدمة الهندسية</h1>
                <p className="text-muted-foreground text-sm">الرئيسية / الخدمة الهندسية</p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ServicesPageSlider images={images} />
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-end">
                <h1 className='text-2xl font-semibold mb-5'>تحقيق النجاح من خلال استراتيجية هندسية وامتياز</h1>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    تعمل شركة إنما للاستشارات الهندسية في جميع أنحاء الإمارات لتقديم خدمات هندسية متنوعة لتحقيق رؤيتك للمشروع. نقدم خبرتنا في الهندسة والتخطيط بمنظور متعدد التخصصات للخدمات. تمتد خبرتنا من دراسات الجدوى، التخطيط الاستراتيجي، والبرمجة. نضمن أن يعتمد كل مشروع على أساس تقني متين. نستخدم مبادئ الهندسة القيمية لتحسين تكاليف المشروع. عادةً، نقدم قيمة المنتج بنسبة توفير تتراوح بين 10-15٪.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    الفواتير والكميات والمواصفات الفنية التي نطورها تحل الغموض. نحن نقدم وضوحًا حول طريقة الانتقال من مرحلة الشراء إلى مرحلة تنفيذ المشروع. يقوم فريقنا من المهندسين المحترفين ذوي الخبرة بإجراء تقييمات شاملة.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    نقوم بتقييم الجدوى من خلال عمليات التخطيط لتحديد عوامل المخاطرة والتأثيرات المحتملة. يطور فريقنا استراتيجيات للتخفيف تحمي الجدول الزمني والميزانية للمشروع. الوثائق الفنية التي ننتجها تتوافق مع المعايير الوطنية مع تسهيل دمج اللوائح المحلية في الشارقة وجميع أنحاء الإمارات. توفر العملية الرسمية للهندسة النظامية للأعمال معلومات واسعة لاتخاذ قرارات واثقة ومستنيرة. نحن هنا لنأخذ مشروعك من البداية حتى الاكتمال.
                </p>
            </section>


            <Testimonial />
        </main>
    )
}