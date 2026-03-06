
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

export default function GisArabic() {
    const images = [image1, image2, image3, image4, image5, image12, image7, image8]

    return (
        <main className="">
            <ServicesBanner />
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-end">
                <h1 className="text-4xl font-bold text-foreground mb-2"> خدمات نظم المعلومات الجغرافية (GIS)
                </h1>
                <p className="text-muted-foreground text-sm">
                    الرئيسية / خدمات نظم المعلومات الجغرافية
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ServicesPageSlider images={images} />
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-end">
                <h1 className='text-2xl font-semibold mb-5'>
                    تسخير الذكاء المكاني لدعم القرارات الذكية
                </h1>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    تقدم إنماء للاستشارات الهندسية مجموعة متكاملة من خدمات نظم المعلومات الجغرافية (GIS). تُمكّن خدماتنا المؤسسات من الاستفادة من المعلومات المكانية، مما يؤدي إلى تحسين عملية اتخاذ القرارات، ورفع كفاءة الأداء التشغيلي، وتعزيز التخطيط الاستراتيجي.</p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    توفر حلولنا المؤسسية دمج تقنيات نظم المعلومات الجغرافية ضمن سير العمل الحالي للمؤسسات، مما يخلق منصة قوية لعرض البيانات وتحليلها وإدارتها. كما نقدم خدمات استشارية وتطوير خطط استراتيجية تضمن توافق تطبيقات GIS مع توجهات وأهداف المؤسسة، مما يحقق قيمة قابلة للقياس للاستثمارات التقنية. ويتيح تطويرنا لنماذج البيانات إنشاء قواعد بيانات مكانية قابلة للتوسع تقوم بتجميع المعلومات الجغرافية بشكل منهجي، بحيث يمكن الاستعلام عنها وتحليلها لدعم مجالات متعددة مثل تخطيط البنية التحتية، وإدارة الأصول، وتشغيل المرافق.

                    يعتمد خبراء GIS لدينا على أفضل الممارسات التحليلية، بما في ذلك التحليل المكاني، وتحليل الشبكات، والنمذجة التنبؤية، مما يوفر رؤى عميقة من قواعد البيانات الجغرافية. كما نقوم بإنشاء أدوات عرض مرئية سهلة الاستخدام، مثل الخرائط التفاعلية ولوحات المعلومات والتقارير، لتبسيط العلاقات المكانية المعقدة للمستخدمين التقنيين وغير التقنيين على حد سواء.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    وتضمن خدماتنا في التصميم والتطوير والتكامل دمج وظائف GIS بشكل طبيعي داخل سير العمل في مؤسسات عملائنا. كما تشمل خدماتنا بناء القدرات والتشغيل والدعم، لضمان قدرة عملائنا على الاستثمار المستدام في نظم المعلومات الجغرافية وتحقيق قيمة ملموسة على المدى الطويل. ونقوم كذلك بتطوير برامج تدريب مخصصة، بالإضافة إلى تقديم الدعم التشغيلي وخدمات الصيانة.</p>            </section>


            <Testimonial />
        </main>
    )
}