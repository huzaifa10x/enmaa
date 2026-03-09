import image1 from "@/public/images/Services-images/Design-Build-Project/345.jpg"
import image2 from "@/public/images/Services-images/Design-Build-Project/534.jpg"
import image3 from "@/public/images/Services-images/Design-Build-Project/3456.jpg"
import image4 from "@/public/images/Services-images/Design-Build-Project/46445.jpg"
import ServicesBanner from "@/app/components/services-banner"
import ServicesPageSlider from "@/app/components/services-page-slider"
import Testimonial from '../ArComponents//ArHome/components/Testimonial'

export default function DesignBuildProjectParticipationArabic() {
    const images = [image1, image2, image3, image4]

    return (
        <main className="">
            <ServicesBanner />
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-end">
                <h1 className="text-4xl font-bold text-foreground mb-2">المشاركة في مشاريع التصميم والبناء</h1>
                <p className="text-muted-foreground text-sm">
                الرئيسية / المشاركة في مشاريع التصميم والبناء
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ServicesPageSlider images={images} />
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-end">
                <h1 className='text-2xl font-semibold mb-5'>
                تسريع تنفيذ المشاريع من خلال الابتكار التعاوني 

                </h1>

                <p className="text-foreground text-base leading-relaxed mb-6">
تقدم إنماء للاستشارات الهندسية خبرات متميزة في مشاريع التصميم والبناء (Design-Build). نحن نتعاون مع المقاولين لتطوير أفكار فعّالة للهندسة القيمية وتقديم حلول تصميم مبتكرة، تهدف إلى تحسين النتائج النهائية للمشروع. وعند العمل ضمن نموذج التصميم والبناء، نوظف قدراتنا الفنية وخبرتنا في مجال الإنشاءات لتحسين التصاميم من حيث قابلية التنفيذ والتكلفة والجدول الزمني. كما نقوم بوضع جداول زمنية لدورة حياة المشروع تأخذ في الاعتبار مراحل التصميم والتوريد والتنفيذ، مع التركيز المستمر على إدارة التكاليف ضمن الإطار الزمني المحدد.                </p>

                <p className="text-foreground text-base leading-relaxed mb-6">
تعتمد منهجية تنفيذ مشاريع التصميم والبناء على العمل الجماعي المنظم بين المصممين والمقاولين منذ اليوم الأول للمشروع. ويساعد ذلك في خلق فرص للابتكار يصعب تحقيقها بالطرق التقليدية. حيث يعمل مهندسو التصميم جنبًا إلى جنب مع فريق المقاول للوصول إلى أفضل البدائل التصميمية وأساليب العمل، مع تقييم كيفية تنفيذ الأعمال على أرض الواقع وخلق فرص لتحسين القيمة.

وكجزء من هذه العملية، نقوم بإجراء مراجعة لقابلية التنفيذ (Constructability Review)، مما يتيح لنا تحديد التحديات المرتبطة بتنفيذ التصميم في مرحلة مبكرة، عندما تكون تكلفة إجراء التعديلات أقل مقارنة بمرحلة التنفيذ في الموقع. كما يساهم أسلوب التصميم والبناء في تقليل التعديلات المكلفة أثناء البناء من خلال تشجيع تنفيذ أعمال التصميم والبناء بشكل متزامن.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6">
وبفضل خبرتنا في الهندسة القيمية (Value Engineering)، نحرص دائمًا على إيجاد طرق لتقليل التكاليف وتحسين الجداول الزمنية، مع تعزيز الأداء دون المساس بالجودة. ومن خلال متابعة التكاليف ومراقبة الجداول الزمنية، نوفر تنبيهات مبكرة بشأن المشكلات المحتملة، مما يتيح اتخاذ قرارات سريعة تعزز تحقيق القيمة للمشروع.                </p>
            </section>


            <Testimonial />
        </main>
    )
}