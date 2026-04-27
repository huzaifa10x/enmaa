"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MapPin, MessageCircle, Phone, User } from "lucide-react"
import { useState } from "react"
import bg from "@/public/images/image532.webp"
import footerLogoengish from "@/public/images/Enmaa-footer.webp"
import footerLogoarabic from "@/public/images/image10.png"
import Image from "next/image"
import Link from "next/link"
import WPIcon from "@/public/images/WP-icon.png"
import { usePathname } from "next/navigation"
import FooterForm from "./footerForm"

export default function Footer() {
    const pathname = usePathname();
    const isArabic = pathname.startsWith("/ar");
    const footerItemsEn = [
        { name: "Home", href: "/" },
        { name: "Project Inspirations", href: "/project-map" },
        { name: "Our Projects", href: "/our-projects" },
        { name: "Our Services", href: "/our-services" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    const footerItemsAr = [
        { name: "تواصل معنا", href: "/ar/contact-us" },
        { name: "خدماتنا", href: "/ar/our-services" },
        { name: "مشاريعنا", href: "/ar/our-projects" },
        { name: "أفكار المشاريع", href: "/ar/project-map" },
        { name: "الرئيسية", href: "/ar/home" },
    ];

    const footerItems = isArabic ? footerItemsAr : footerItemsEn;

    const isActive = (href) => {
        if (href === "/" || href === "/ar") return pathname === href;
        return pathname.startsWith(href);
    };

    return (
        <footer id="bookNow" className="bg-neutral-800 md:rounded-t-[50px] min-h-screen bottom-0 flex flex-col items-center justify-center !z-[100] text-white relative">

            {isArabic ?

                <Link className="fixed right-0 bg-primary grid rounded-full p-2 md:p-4 m-8 bottom-0" target="_blank" href='https://api.whatsapp.com/send/?phone=%2B+971506185529&text=مرحباً شركة إنما للاستشارات الهندسية، أتواصل معكم للاستفسار عن بعض التفاصيل المتعلقة بخدماتكم.&type=phone_number&app_absent=0'>
                    <button className="btn rounded btn-warning border-warning rounded-5 shadow">
                        <Image src={WPIcon} width={25} height={25} alt="WPICon" />

                    </button>
                </Link>
                :
                <Link className="fixed right-0 bg-primary grid rounded-full p-2 md:p-4 m-8 bottom-0" target="_blank" href='https://api.whatsapp.com/send/?phone=%2B+971506185529&text=Hi Enmaa Engineering Consultancy, I’m checking in to request some details about your services.&type=phone_number&app_absent=0'>
                    <button className="btn rounded btn-warning border-warning rounded-5 shadow">
                        <Image src={WPIcon} width={25} height={25} alt="WPICon" />

                    </button>
                </Link>
            }
            <Link className="fixed right-0 bg-primary grid rounded-full p-2 md:p-4 m-8 bottom-18" href='tel:+971 50 618 5529'>
                <button className="btn rounded btn-warning border-warning rounded-5">
                    <Phone size={26} />
                </button>
            </Link>

            <Image
                src={bg}
                height={300}
                width={300}
                alt="image"
                className="absolute w-full h-full opacity-5 -z-10"
            />

            {/* Navigation */}
            <div className="border-gray-700">
                <div className="max-w-7xl mx-auto px-6 pt-10 py-4">
                    {/* <nav className="md:flex grid gap-5 flex-wrap text-center md:space-x-20 justify-center items-center">
                        <Link href={'/'} className="text-white hover:text-gray-300 transition-colors">
                            Home
                        </Link>
                        <Link href={'project-map'} className="text-gray-400 hover:text-gray-300 transition-colors">
                            Project inspirations
                        </Link>
                        <Link href={'/our-projects'} className="text-gray-400 hover:text-gray-300 transition-colors">
                            Our Projects
                        </Link>
                        <Link href={'/our-services'} className="text-gray-400 hover:text-gray-300 transition-colors">
                            Our Services
                        </Link>
                        <Link href={'/contact-us'} className="text-gray-400 hover:text-gray-300 transition-colors">
                            Contact Us
                        </Link>
                    </nav> */}

                    <nav className="md:flex grid gap-5 flex-wrap text-center md:space-x-20 justify-center items-center">
                        {footerItems.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <Button
                                    variant="ghost"
                                    className={`text-white hover:text-[#01b2eb] hover:bg-white/10 px-4 py-2 transition ${isActive(item.href) ? "text-[#01b2eb]" : ""
                                        }`}
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
                {/* Get Started Section */}

                {isArabic ?
                    <div className="text-center mb-16" dir="rtl">
                        <h2 className="text-4xl md:text-8xl font-semibold mb-6 text-balance">
                            احجز الآن
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto text-balance">
                            إذا كنت ترغب في العمل معنا أو التواصل معنا، يسعدنا سماعك!
                        </p>
                    </div>
                    :
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-8xl font-semibold mb-6 text-balance">Get Started Now</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto text-balance">
                            If you would like to work with us or just want to get in touch, we&apos;d love to hear from you!
                        </p>
                    </div>
                }

                <FooterForm isArabic={isArabic} />
                {/* Contact Info and Email Signup */}

                {isArabic ?
                    <div dir="rtl" className="grid md:grid-cols-2 gap-12 items-center border-t border-gray-700 pt-12">
                        <div className="space-y-4" dir="rtl">
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

                        {/* Email Signup */}
                        <div className="space-y-4 flex md:justify-end justify-center">
                            {isArabic ?
                                <Image
                                    src={footerLogoarabic}
                                    height={320}
                                    width={320}
                                    alt="image"
                                    className=""
                                />
                                :
                                <Image
                                    src={footerLogoengish}
                                    height={320}
                                    width={320}
                                    alt="image"
                                    className="h-auto w-auto"
                                />
                            }
                        </div>
                    </div>
                    :
                    <div className="grid md:grid-cols-2 gap-12 items-center border-t border-gray-700 pt-12">
                        <div className="space-y-4">
                            <div className="text-gray-300">
                                <p className="leading-relaxed">
                                    <b>Head Office</b>: ASAS Building - Office 667 - Maleha St -<br />
                                    Warehouses Land - Sharjah - United Arab Emirates
                                </p>
                            </div>
                            <div className="text-gray-300">
                                <p className="text-lg"><a href="tel:+971 50 618 5529"><b>Call Us</b>: +971 50 618 5529</a></p>
                            </div>
                        </div>

                        {/* Email Signup */}
                        {isArabic ?
                            <div className="space-y-4 flex md:justify-end justify-center">
                                <Image
                                    src={footerLogoarabic}
                                    height={320}
                                    width={320}
                                    alt="image"
                                    className="h-auto w-auto object-center"
                                />
                            </div>
                            :
                            <div className="space-y-4 flex md:justify-end justify-center">
                                <Image
                                    src={footerLogoengish}
                                    height={320}
                                    width={320}
                                    alt="image"
                                    className=" object-center"
                                />
                            </div>
                        }
                    </div>}

            </div>
            {/* Bottom Footer */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    {isArabic ?
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4" dir="rtl">
                            <p className="text-gray-400 text-sm">
                                © حقوق الطبع والنشر 2025 - شركة إنما للاستشارات الهندسية المدنية في الشارقة
                            </p>
                            <div className="flex space-x-6 space-x-reverse">
                                <p className="text-gray-400 text-sm transition-colors">
                                    Design by <a href="https://10xdigital.ae/" className="hover:text-primary">10X Digital</a>
                                </p>
                                {/* <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    سياسة الخصوصية
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    الشروط والأحكام
                                </a> */}
                                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    الدعم
                                </a>
                            </div>
                        </div>
                        :
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-400 text-sm">
                                © Copyright 2025 - Enmaa Civil Engineering Consultants In Sharjah.
                            </p>
                            <div className="flex space-x-6">
                                <p className="text-gray-400 text-sm transition-colors">
                                    Design by <a href="https://10xdigital.ae/" className="hover:text-primary">10X Digital</a>
                                </p>
                                {/* <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Terms and conditions
                                </a> */}
                                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Support
                                </a>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </footer>
    )
}