"use client"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import bg from "@/public/images/image532.webp"
import footerLogoarabic from "@/public/images/image10.png"
import Image from "next/image"
import Link from "next/link"
import WPIcon from "@/public/images/WP-icon.png"
import { usePathname } from "next/navigation"
import FooterForm from "./footerForm"

export default function ArFooter() {
    const pathname = usePathname();

    const footerItemsAr = [
        { name: "الرئيسية", href: "/ar/home" },
        { name: "أفكار المشاريع", href: "/ar/project-map" },
        { name: "مشاريعنا", href: "/ar/our-projects" },
        { name: "خدماتنا", href: "/ar/our-services" },
        { name: "تواصل معنا", href: "/ar/contact-us" },
    ];

    const isActive = (href) => {
        return pathname === href || pathname.startsWith(href);
    };

    return (
        <footer id="bookNow" dir="rtl" className="bg-neutral-800 md:rounded-t-[50px] min-h-screen bottom-0 flex flex-col items-center justify-center !z-[100] text-white relative">

            {/* WhatsApp Floating Button */}
            <Link className="fixed left-0 bg-primary grid rounded-full p-2 md:p-4 m-8 bottom-0" target="_blank" href='https://api.whatsapp.com/send/?phone=%2B+971506185529&text=مرحباً شركة إنما للاستشارات الهندسية، أتواصل معكم للاستفسار عن بعض التفاصيل المتعلقة بخدماتكم.&type=phone_number&app_absent=0'>
                <button className="btn rounded btn-warning border-warning rounded-5 shadow">
                    <Image src={WPIcon} width={25} height={25} alt="WhatsApp" />
                </button>
            </Link>

            {/* Phone Floating Button */}
            <Link className="fixed left-0 bg-primary grid rounded-full p-2 md:p-4 m-8 bottom-20" href='tel:+971 50 618 5529'>
                <button className="btn rounded btn-warning border-warning rounded-5">
                    <Phone size={26} />
                </button>
            </Link>

            <Image
                src={bg}
                height={300}
                width={300}
                alt="background"
                className="absolute w-full h-full opacity-5 -z-10"
            />

            {/* Navigation */}
            <div className="border-gray-700 w-full">
                <div className="max-w-7xl mx-auto px-6 pt-10 py-4">
                    <nav className="flex flex-wrap gap-5 text-center justify-center items-center">
                        {footerItemsAr.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <Button
                                    variant="ghost"
                                    className={`text-white hover:text-[#01b2eb] hover:bg-white/10 px-4 py-2 transition ${isActive(item.href) ? "text-[#01b2eb]" : ""}`}
                                >
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 md:py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-8xl font-semibold mb-6 text-balance">
                        احجز الآن
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto text-balance">
                        إذا كنت ترغب في العمل معنا أو التواصل معنا، يسعدنا سماعك!
                    </p>
                </div>

                <FooterForm isArabic={true} />

                {/* Contact Info and Logo */}
                <div className="grid md:grid-cols-2 gap-12 items-center border-t border-gray-700 pt-12">
                    <div className="space-y-4 text-right">
                        <div className="text-gray-300">
                            <p className="leading-relaxed">
                                <b>المكتب الرئيسي</b>: مبنى ASAS - المكتب 667 - شارع مليحة -<br />
                                أراضي المستودعات - الشارقة - الإمارات العربية المتحدة
                            </p>
                        </div>
                        <div className="text-gray-300">
                            <p className="text-lg">
                                <a href="tel:+971506185529">
                                    <b>اتصل بنا</b> : 5529 618 50 971+
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4 flex md:justify-end justify-center">
                        <Image
                            src={footerLogoarabic}
                            height={320}
                            width={320}
                            alt="إنما للاستشارات الهندسية"
                            className="h-auto w-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 w-full">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © حقوق الطبع والنشر 2025 - شركة إنما للاستشارات الهندسية المدنية في الشارقة
                        </p>
                        <div className="flex space-x-6 space-x-reverse">
                            <p className="text-gray-400 text-sm transition-colors">
                                تصميم بواسطة <a href="https://10xdigital.ae/" className="hover:text-primary">10X Digital</a>
                            </p>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                الدعم
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}