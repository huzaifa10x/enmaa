import Testimonial from '../ArComponents//ArHome/components/Testimonial'
import ServicesBanner from '@/app/components/services-banner'
import image1 from "@/public/images/Services-images/Design Services/565.jpg"
import image2 from "@/public/images/Services-images/Design Services/876.jpg"
import image3 from "@/public/images/Services-images/Design Services/9878.jpg"
import ServicesPageSlider from '@/app/ar/ArComponents/ArHome/components/services-page-slider'

export default function DesignServices() {
    const images = [image1, image2, image3]

    return (
        <main className="">
            <ServicesBanner />

            {/* Top Heading */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-end">
                <h1 className="text-4xl font-bold text-foreground mb-2">خدمات التصميم</h1>
                <p className="text-muted-foreground text-sm">الرئيسية / خدمات التصميم</p>
            </section>

            {/* Slider */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ServicesPageSlider images={images} />
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-end">
                <h1 className='text-2xl font-semibold mb-5'>
                    تحويل الرؤية إلى حلول في مجال البناء
                </h1>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    تشمل خدمات إنماء العملية الكاملة للتصميم، بدءًا من جمع البيانات
                    الأساسية وصولًا إلى استكمال مستندات البناء. نضمن أن يستفيد كل مشروع
                    من منهجيتنا التي توازن بين النظامية والإبداع. تبدأ عمليتنا خلال
                    زيارات الموقع ومناقشات أصحاب المصلحة، حيث نستخدم البيانات والمشاركة
                    الفعّالة لاتخاذ قرارات تصميم ذكية. نطور مفاهيم إبداعية تتوافق مع
                    الرغبات الجمالية لأصحاب المصلحة ومع وظائف المبنى.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    نركز على المتطلبات التنظيمية وميزانية المشروع. خلال مراحل التصميم
                    الأولي والتصميم التفصيلي، نقوم بصقل المفاهيم بشكل مستمر لتصبح وثائق
                    جاهزة للتنفيذ، مما يساعد على ترسيخ رؤية يمكن تنفيذها على أرض
                    الواقع.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    ينسّق نهج التصميم المتكامل لدينا بين تخصصات العمارة والإنشاء وأنظمة
                    الميكانيكا والكهرباء والسباكة (MEP) منذ المراحل المبكرة، مما يزيل
                    أي تعارضات محتملة ويعزز أداء المبنى. نستخدم أحدث أدوات التصميم مثل
                    نمذجة معلومات البناء (BIM)، والتي تساعد في تسهيل التكامل بين
                    التخصصات واكتشاف مشكلات التصميم قبل بدء التنفيذ. يركز التصميم
                    التفصيلي على تطوير وتوثيق الرسومات والمواصفات والحسابات لتلبية
                    متطلبات جميع الجهات التنظيمية المختصة في دولة الإمارات.
                </p>
            </section>

            <Testimonial />
        </main>
    )
}
