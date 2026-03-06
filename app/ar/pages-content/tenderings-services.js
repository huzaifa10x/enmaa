import ServicesBanner from '@/app/components/services-banner'
import image1 from "@/public/images/Services-images/GIS-Services/43.jpg"
import image2 from "@/public/images/Services-images/GIS-Services/54.jpg"
import image3 from "@/public/images/Services-images/GIS-Services/65.jpg"
import image4 from "@/public/images/Services-images/GIS-Services/76.jpg"
import ServicesPageSlider from '@/app/components/services-page-slider'
import Testimonial from '../ArComponents//ArHome/components/Testimonial'

export default function TenderingServicesArabic() {
    const images = [image1, image2, image3, image4]
    return (
        <main className="">
            <ServicesBanner />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-end">
                <h1 className="text-4xl font-bold text-foreground mb-2">خدمات طرح المناقصات</h1>
                <p className="text-muted-foreground text-sm">ضمان عمليات شراء شفافة وتنافسية</p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ServicesPageSlider images={images} />
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-end">
                <h1 className='text-2xl font-semibold mb-5'>ضمان عمليات شراء شفافة وتنافسية</h1>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    تقدم إنماء للاستشارات الهندسية خدمات مناقصات عالية الكفاءة والاحترافية.
نوفر عمليات شراء شفافة وتنافسية ومتوافقة مع الأنظمة لمشاريع البناء والهندسة في دولة الإمارات العربية المتحدة.

تشمل خدماتنا المتكاملة إعداد شروط تعاقد خاصة بكل مشروع، وتنفيذ عمليات تأهيل مسبق شاملة لتقييم قدرات المقاولين، إضافةً إلى إدارة إجراءات الدعوة الرسمية لتقديم العطاءات بما يضمن أكبر قدر من المشاركة من قبل المقاولين في السوق.

كما تتضمن تقييمات المناقصات لدينا أساليب تقييم نوعية وكمية، مما يحقق قيمة مضافة للعملاء من خلال ترسية العقود بناءً على أفضل قيمة، وليس فقط أقل سعر.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
تشمل عمليات التأهيل المسبق مراجعة الخبرات الفنية، والقدرة المالية، وبرامج الصحة والسلامة، والخبرة السابقة ذات الصلة لدى المقاولين. ويضمن ذلك مشاركة الشركات التي تثبت كفاءتها فقط في عملية تقديم العطاءات.

نقوم بإعداد مستندات مناقصة تفصيلية تشمل الرسومات، والمواصفات، وجداول الكميات، والعقود، بما يلبي احتياجات العميل من حيث توضيح المتطلبات بشكل دقيق وتوزيع المخاطر بصورة واضحة.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-6">
                    تتضمن عملية التقييم الشاملة لدينا مراجعة العروض التجارية والفنية وفقًا لمعايير محددة. وبذلك نقوم بتقييم جميع المستندات المقدمة، بما في ذلك عروض الأسعار، والبيانات، والجداول الزمنية للبرامج، والموارد.

نلتزم بالحياد والسرية التامة طوال جميع مراحل العملية، مع ضمان تحقيق أعلى مستويات العدالة والشفافية.

ويتضمن تقريرنا النهائي عرضًا لتوصيتنا للعميل بشأن الجهة التي يُوصى بإسناد العقد إليها، مع تقديم مبررات واضحة وقابلة للدفاع تدعم هذا القرار.

                </p>
            </section>

            <Testimonial />
        </main>
    )
}