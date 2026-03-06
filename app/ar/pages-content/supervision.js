import ServicesBanner from "@/app/components/services-banner"
import Testimonial from '../ArComponents//ArHome/components/Testimonial'
import image1 from "@/public/images/projects/448...1.jpg"
import Image from 'next/image'

export default function Supervision() {

    return (
        <main className="">
            <ServicesBanner />

            {/* Heading */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-end">
                <h1 className="text-4xl font-bold text-foreground mb-2">الإشراف</h1>
                <p className="text-muted-foreground text-sm">الرئيسية / الإشراف</p>
            </section>

            {/* Images */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="h-64 md:h-80 rounded-xl overflow-hidden">
                        <Image
                            src={image1}
                            height={200}
                            width={200}
                            alt=""
                            className='w-full h-full'
                        />
                    </div>
                    <div className="h-64 md:h-80 rounded-xl overflow-hidden">
                        <Image
                            src={image1}
                            height={200}
                            width={200}
                            alt=""
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </section>

            {/* Arabic Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-end">
                <h1 className='text-2xl font-semibold mb-5'>
                    ضمان الجودة من خلال خدمات إدارة الإنشاءات الشاملة
                </h1>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    نقدم خدمات ضمان الجودة التي توفر إشرافًا مستمرًا على مراحل المشروع أثناء التنفيذ، مع التأكد من أن أعمال البناء تتم وفقًا للتصاميم المعتمدة، والمواصفات، وإجراءات ضبط الجودة. يشرف فريقنا الميداني ذو الخبرة على أنشطة البناء بشكل يومي، ويتأكد من أن جودة العمل مطابقة للمعايير التعاقدية. كما يتم فحص المواد المستخدمة لضمان توافقها مع الفحوصات المعتمدة. نطور بروتوكولات ضمان الجودة من خلال بروتوكولات فحص واختبار يتم تنفيذها بالتنسيق مع مختبرات معتمدة. ومن خلال إجراءاتنا الاستباقية لمراقبة الوقت والتكلفة، نتابع تقدم المشروع مقابل الجدول الزمني الأساسي المعتمد، مع تحديد أي انحرافات ومعالجتها مبكرًا للحفاظ على أهداف المشروع.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    سيقوم مهندسونا المشرفون بإجراء فحوصات دورية لموقع العمل، ومراجعة المخططات التنفيذية وتقارير الأساليب، وحضور الأنشطة الإنشائية الحرجة لضمان مطابقتها للتصميم. كما نحتفظ بسجلات شاملة للموقع تشمل التقارير اليومية والصور التوثيقية ونتائج جميع الفحوصات، مما يتيح تتبع جودة التنفيذ منذ بدء المشروع وحتى الحصول على شهادة الإنجاز.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    لا تقتصر طرق ضمان الجودة لدينا على مراقبة الجودة فقط، بل تشمل أيضًا عمليات التحكم بالجودة من خلال دمج خدمات الإشراف ضمن نظام إدارة الجودة لضمان حماية إضافية وتحقيق نتائج مستدامة وناجحة. كما تشمل خدماتنا إدارة المطالبات وعمليات التسليم، لضمان إغلاق المشروع بالشكل الصحيح. نعمل بإنصاف في إدارة العقود، وتطبيق إجراءات المطالبات، وتقييمها وفق الاستحقاقات التعاقدية، وتوثيق جميع اختبارات الأنظمة، وإعداد أدلة التشغيل، وتدريب فريق تشغيل المنشأة.
                </p>
            </section>

            <Testimonial />
        </main>
    )
}
