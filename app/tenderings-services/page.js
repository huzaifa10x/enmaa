import image1 from "@/public/images/projects/448...1.jpg"
import Image from 'next/image'
import ServicesBanner from "../components/services-banner"
import Testimonial from "../components/Testimonial"

export default function TenderingsServices() {
    return (
        <main className="">
            <ServicesBanner />

            {/* Top Heading */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-end">
                <h1 className="text-4xl font-bold text-foreground mb-2">خدمات المناقصات</h1>
                <p className="text-muted-foreground text-sm">الرئيسية / خدمات المناقصات</p>
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
                            className="w-full h-full"
                        />
                    </div>
                    <div className="h-64 md:h-80 rounded-xl overflow-hidden">
                        <Image
                            src={image1}
                            height={200}
                            width={200}
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-end">
                <h1 className="text-2xl font-semibold mb-5">
                    ضمان عمليات شراء شفافة وتنافسية
                </h1>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    يقدم مكتب إنماء للاستشارات الهندسية خدمات مناقصات عالية الكفاءة لضمان عمليات شراء شفافة، تنافسية ومتوافقة مع المعايير للمشاريع الإنشائية والهندسية في دولة الإمارات. تشمل خدماتنا الشاملة إعداد شروط العقد الخاصة بالمشروع، وإجراء عمليات التأهيل المسبق لفحص قدرات المقاولين، بالإضافة إلى تنظيم الدعوات الرسمية للمناقصات بهدف تعزيز مشاركة أكبر عدد من المقاولين في السوق. تعتمد تقييماتنا للمناقصات على معايير نوعية وكمية تهدف إلى تحقيق أفضل قيمة للعملاء، وليس مجرد أقل سعر.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    تشمل عمليات التأهيل المسبق مراجعة الخبرة الفنية، القدرات المالية، برامج الصحة والسلامة، والخبرة السابقة للمقاولين في المشاريع ذات الصلة. يساعد ذلك على ضمان مشاركة الشركات المؤهلة فقط في عملية تقديم العطاءات. نقوم بإعداد وثائق المناقصات التفصيلية، بما في ذلك الرسومات والمواصفات وجداول الكميات والعقود، بما يضمن توضيح المتطلبات وتوزيع المخاطر بشكل عادل.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6">
                    تعتمد عمليات التقييم الشاملة لدينا على مراجعة العروض التجارية والفنية وفق معايير محددة مسبقًا، مما يشمل تحليل الأسعار، الكشوفات، الجداول الزمنية والموارد. نحافظ دائمًا على الحياد والسرية لضمان أعلى مستويات العدالة. يتضمن تقريرنا النهائي توصية واضحة وموضوعية للعميل حول المقاول الأنسب للحصول على العقد، مع تبريرات مدعومة بالكامل.
                </p>
            </section>

            <Testimonial />
        </main>
    )
}
