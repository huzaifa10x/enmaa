import image1 from "@/public/images/Services-images/Client-Engineer-Representative/23.jpg"
import image2 from "@/public/images/Services-images/Client-Engineer-Representative/25.jpg"
import image3 from "@/public/images/Services-images/Client-Engineer-Representative/26.jpg"
import image4 from "@/public/images/Services-images/Client-Engineer-Representative/27.jpg"
import Image from 'next/image'
import Testimonial from '../ArComponents//ArHome/components/Testimonial'
import ServicesBanner from "@/app/components/services-banner"
import ServicesPageSlider from "@/app/ar/ArComponents/ArHome/components/services-page-slider"

export default function ClientEngineerRepresentativeRole() {
     const images = [image1, image2, image3, image4]
    return (
        <main className="rtl text-end" dir="rtl">
            <ServicesBanner />

            <section className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl font-bold text-right text-foreground mb-2">
                    دور ممثل المهندس لدى العميل
                </h1>
                <p className="text-muted-foreground text-sm text-right">
                    الرئيسية / دور ممثل المهندس لدى العميل
                </p>
            </section>

            {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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
            </section> */}
               <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <ServicesPageSlider images={images} />
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 ">
                <h1 className='text-2xl font-semibold mb-5 text-right'>
                    ممثلك التقني الملتزم لضمان نجاح المشروع
                </h1>

                <p className="text-foreground text-base leading-relaxed mb-6 text-right">
                    تقدم شركة إنماء للاستشارات الهندسية خدمة ممثل المهندس لدى العميل من خلال
                    تعيين مهندسينا المحترفين داخل مؤسسات العملاء للعمل كمستشارين تقنيين ومدافعين
                    عن مصلحة المشروع. يعتمد نهجنا على فهم كامل لأهداف العميل ونطاق المشروع،
                    مما يضمن مواءمة إجراءات المشروع مع أولويات المؤسسة. ومن خلال تواجد
                    ممثلينا ضمن فريق العميل، نتجاوز الحواجز التقليدية بين العميل والمستشار،
                    مما يعزز التواصل الفعّال وتسريع عملية اتخاذ القرار. كما يتولى ممثلونا
                    إدارة العلاقات مع المصممين والمقاولين والجهات التنظيمية وأصحاب المصلحة
                    للحفاظ على تقدم المشاريع بشكل سلس.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6 text-right">
                    يتطلب تمثيل مهندس العميل قدرة تقنية عالية وإدراكًا تجاريًا ودبلوماسية في
                    التعامل مع المصالح المتعددة والمتضاربة أحيانًا. يشارك ممثلونا في التخطيط
                    وإعداد الميزانيات والمشتريات لضمان أخذ الجوانب الفنية في القرارات التجارية.
                    كما يقومون بمتابعة أداء المقاولين وتقييم أوامر التغيير وتقديم الاستشارات
                    الفنية لحماية مصالح العميل. وتتمتع شركة إنماء بسجل حافل في إنجاز المشاريع
                    ضمن أو قبل المواعيد المحددة.
                </p>

                <p className="text-foreground text-base leading-relaxed mb-6 text-right">
                    يحرص ممثلونا على المتابعة المستمرة—سواء في الموقع أو خارجه—للجدول الزمني
                    وتكاليف المشروع ومعايير الجودة، بهدف تحديد الفرص لتحسين الوقت والتكلفة
                    ومعالجة المشكلات قبل تفاقمها. ويمنح هذا التمثيل عملاءنا الثقة بأن مشاريعهم
                    تُدار من قبل فريق محترف يفهم أهدافهم ويضمن تحقيق نتائج ناجحة ومستدامة.
                </p>
            </section>

            <Testimonial />
        </main>
    )
}