export const metadata = {
    title: "Civil Engineering Consultants in Sharjah | Architecture Companies & Firms",
    description: "Enmaa Engineering Consultants deliver high-quality, innovative designs, blending natural and modern styles for personalized home solutions.",
    alternates: {
        canonical: 'https://www.enmaaengcon.com/',
        languages: {
            "x-default": "https://www.enmaaengcon.com/ar/",
            en: "https://www.enmaaengcon.com/",
            ar: "https://www.enmaaengcon.com/ar/",
        },
    },
    openGraph: {
        title: "Civil Engineering Consultants in Sharjah | Architecture Companies & Firms",
        description: "Enmaa Engineering Consultants deliver high-quality, innovative designs, blending natural and modern styles for personalized home solutions.",
        type: "website",
        url: "https://www.enmaaengcon.com/"
    },
    twitter: {
        card: "summary_large_image",
        title: "Civil Engineering Consultants in Sharjah | Architecture Companies & Firms",
        description: "Enmaa Engineering Consultants deliver high-quality, innovative designs, blending natural and modern styles for personalized home solutions.",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
}

import React from 'react'
import DiscoverSlider from '../ArComponents/ArHome/components/discover-slider';
import WelcomeSection from '../ArComponents/ArHome/components/welcome-section';
import ServicesSection from '../ArComponents/ArHome/components/services-section';
import OurProcess from '../ArComponents/ArHome/components/our-process';
import OurProjects from '../ArComponents/ArHome/components/our-projects';
import LocationsSection from '../ArComponents/ArHome/components/Locations-section';
import DesignSolutions from '../ArComponents/ArHome/components/design-solutions';
import FAQ from '../ArComponents/ArHome/components/faq';
import TestimonialSlider from '../ArComponents/ArHome/components/testimonial-slider';
import ProjectsScroller from '../ArComponents/ArHome/components/projects-scroller';

export default function HomePage() {
    const faqData = [
        {
            id: 1,
            question: "ما هو خلفية ورؤية شركة إنماء للاستشارات الهندسية في الشارقة؟",
            answer: `
      تأسست شركة إنماء للاستشارات الهندسية في عام 2015 بواسطة مجموعة من مستشاري الهندسة المدنية ذوي الخبرة في الشارقة وأبوظبي، بهدف تقديم مساهمة قيمة في سوق العقارات من خلال توفير تصميمات قوية ومستدامة للمساحات السكنية والتجارية والهياكل العامة مثل المخازن والمدارس.
      <br><br>
      كواحدة من أبرز شركات الهندسة المعمارية في المنطقة، نسعى دائمًا لكسب ثقة عملائنا من خلال تقديم تصميمات عالمية المستوى للمباني والهياكل تلبي احتياجات ورغبات ومتطلبات العميل ضمن الجدول الزمني المتفق عليه. سيجتمع فريق مستشارينا الموهوبين في الشارقة معكم للتعاون وفهم أفكاركم ومتطلباتكم.`
        },
        {
            id: 2,
            question: "كيف تضمن شركة إنماء للاستشارات الهندسية عملية تصميم مبتكرة وتركز على العميل؟",
            answer: `
      بصفتنا شركة مقاولات هندسية رائدة في الإمارات، نضمن دائمًا تلبية احتياجات عملائنا بشكل كامل. تمكننا منهجيتنا التي تركز على العميل من تقديم حلول تصميم دقيقة تتجاوز توقعات عملائنا، من المخطط الرئيسي إلى أدق تفاصيل المساحة.
      <br><br>
      نستخدم العلم والاجتهاد لضمان أن تكون تصميماتنا متوافقة مع معايير الصناعة ومستدامة على المدى الطويل. كما نأخذ في الاعتبار وظيفة المساحة واحتياجات الأشخاص الذين سيستخدمونها.`
        },
        {
            id: 3,
            question: "ما هي نقاط القوة المهنية التي يجلبها فريق إنماء من مستشاري الهندسة المدنية لمشاريعهم؟",
            answer: `
      تتألف شركة إنماء من مهندسين ومعماريين موهوبين معروفين بمهاراتهم الهندسية والمعمارية. تضم محفظة أعمالهم تصميمات رائعة ومخططات هيكلية تحولت إلى تحف معمارية ومساحات يمكن مشاهدتها اليوم.
      <br><br>
      خبرة فريقنا العملية في مجال البناء والاستثمار تضمن تقديم أفضل الحلول الهندسية والمعمارية التي ترضي أي عميل أو مستثمر أو جهة معنية.
      <br><br>
      تصفح موقعنا للاطلاع على أحدث المشاريع والتصاميم. اتصل بنا على +971 50 618 5529 لتحديد موعد أو راسلنا على info@enmaaengcon.com
      <br><br>
      ما هي الحلول الهندسية والمعمارية المتخصصة التي تقدمها إنماء لبيئة الشارقة الفريدة؟
      <br><br>
      تعد إنماء شركة رائدة في الهندسة المدنية والمعمارية بالشارقة، تقدم حلولًا متكاملة تمزج بين الوظيفة والجمالية. هدفنا التأكد من أن مشاريعكم تلتزم بكافة اللوائح، وتتجاوز توقعات التصميم.
      <br><br>
      يمتلك فريقنا المتخصص معرفة عميقة بالتحديات الفريدة التي توفرها البيئة العمرانية في الشارقة، مما يتيح لنا تقديم حلول مخصصة تلبي احتياجات المنطقة بشكل مثالي.`
        },
        {
            id: 4,
            question: "كيف تحافظ إنماء على الجودة والاستدامة عبر مختلف المشاريع الهندسية والمعمارية؟",
            answer: `
      في إنماء، نفخر بقدرتنا على التكيف والابتكار لتلبية الاحتياجات الخاصة لكل مشروع. سواء كان مجمعًا سكنيًا، مشروعًا تجاريًا، أو مكتبًا، تستند تصميماتنا إلى ثلاثة مبادئ رئيسية: الوظيفة، الجمالية، والاستدامة، مما يعكس التزامنا الثابت بالجودة.
      <br><br>
      ما يميزنا عن شركات الهندسة المدنية الأخرى في الشارقة هو التزامنا الثابت بالتميز. نعمل عن قرب مع عملائنا لضمان تحقيق رؤيتهم ضمن الميزانية والمواعيد النهائية. باستخدام أحدث التقنيات ومعايير الصناعة، تقدم إنماء حلول هندسية فعالة ومستدامة.
      <br><br>
      اختيارنا كشريك هندسي يعني توظيف فريق متخصص ملتزم ببناء مستقبل مزدهر للشارقة على أسس قوية.
      <br><br>
      تواصل معنا اليوم لمناقشة متطلبات مشروعك ولنعرض لك لماذا نحن الخيار الموثوق بين شركات الهندسة المدنية في الشارقة.`
        },
        {
            id: 5,
            question: "ما الذي يجعل شركة إنماء للاستشارات الهندسية شركة استشارية موثوقة ومرموقة في الإمارات؟",
            answer: `
      تعتبر إنماء للاستشارات الهندسية من أفضل الشركات الاستشارية في الإمارات. نحن نقدم حلولًا كاملة وفق أعلى معايير الصناعة. نعمل بخبرة تمتد لعقود في الهندسة والمعمار. لقد بنت إنماء سمعة قوية في تقديم حلول متميزة في مختلف الصناعات.
      <br><br>
      حلولنا تلبي توقعات السوق الحالية وتتوقع أيضًا الاحتياجات المستقبلية. يمكنك الاعتماد على فريق إنماء لتجاوز توقعاتك. تقدم شركتنا مزيجًا من الابتكار، الكفاءة الهندسية، والمعرفة الصناعية الواسعة.`
        },
        {
            id: 6,
            question: "كيف تقدم إنماء حلول مشاريع شاملة كشركة مقاولات رائدة في الشارقة؟",
            answer: `
      يسعد إنماء أن تكون الشركة المثالية للمقاولات الهندسية في الشارقة، حيث تقدم حلولاً متخصصة تغطي كل مرحلة من المشروع، من البداية حتى الانتهاء. تشمل خدماتنا التصميمات التفصيلية، والمشتريات، وإدارة البناء.
      <br><br>
      يضمن فريق خبرائنا إدارة كل مشروع بمهنية عالية. نحن من أبرز شركات الهندسة المعمارية في الشارقة، ونقدم حلولًا مبتكرة لن تجدها في أي مكان آخر.
      <br><br>
      لدينا خبرة واسعة في تنفيذ مشاريع مدنية، هيكلية، وMEP (ميكانيكية، كهربائية، وسباكة) معقدة، مما يجعلنا شريكًا مفضلًا لكل من القطاعين الخاص والعام. نحن متخصصون في تصميم هياكل جذابة وفعالة.`
        },
        {
            id: 7,
            question: "كيف ساهمت خبرة إنماء الواسعة في تعزيز مكانتها كشركة مقاولات رائدة في الإمارات؟",
            answer: `
      خبرتنا الكبيرة في العديد من التخصصات التقنية تجعلنا شركة مقاولات هندسية رائدة في الإمارات. لقد أتممنا بنجاح العديد من المشاريع على مر السنين. محفظة أعمالنا تظهر قدرتنا على التكيف مع أحجام المشاريع المختلفة وتعقيدها واحتياجات العملاء.
      <br><br>
      تشمل خبرتنا بناء البنية التحتية، بالإضافة إلى خدمات هندسية متخصصة مثل التحليل الجيوتقني، التدعيم الهيكلي، ومشاريع الاستدامة. لدينا المعرفة والموارد لتنفيذ المشاريع بدقة بغض النظر عن حجمها.`
        },
    ];


    return (
        <main className="min-h-screen scroll-smooth">
            <DiscoverSlider />
            <WelcomeSection />
            <ServicesSection />
            <OurProcess />
            {/* <ProjectSlider /> */}
            <OurProjects />
            <LocationsSection />
            <DesignSolutions />
            <FAQ faqData={faqData} />
            <TestimonialSlider />
            <ProjectsScroller />
        </main>
    );
}