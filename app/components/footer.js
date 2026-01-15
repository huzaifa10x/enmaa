"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MapPin, MessageCircle, Phone, User } from "lucide-react"
import { useState } from "react"
import bg from "@/public/images/image532.webp"
import footerLogo from "@/public/images/Enmaa-footer.webp"
import Image from "next/image"
import Link from "next/link"
import WPIcon from "@/public/images/WP-icon.png"

import { usePathname } from "next/navigation"

export default function Footer() {
    const branches = [
        { id: "dubai", name: "Dubai office" },
        { id: "abu-dhabi", name: "Abu Dhabi office" },
        { id: "sharjah", name: "Sharjah office" },
        { id: "ajman", name: "Ajman office" },
    ]

    const timeSlots = [
        "09:00 AM",
        "09:30 AM",
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "02:00 PM",
        "02:30 PM",
        "03:00 PM",
        "03:30 PM",
        "04:00 PM",
        "04:30 PM",
        "05:00 PM",
        "05:30 PM",
    ]

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        date: "",
        time: "",
        branch: "",
    })

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Booking submitted:", formData)
    }

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
        { name: "الرئيسية", href: "/ar/home" },
        { name: "أفكار المشاريع", href: "/ar/project-map" },
        { name: "مشاريعنا", href: "/ar/our-projects" },
        { name: "خدماتنا", href: "/ar/our-services" },
        { name: "تواصل معنا", href: "/ar/contact-us" },
    ];

    const footerItems = isArabic ? footerItemsAr : footerItemsEn;

    const isActive = (href) => {
        if (href === "/" || href === "/ar") return pathname === href;
        return pathname.startsWith(href);
    };

    return (
        <footer id="bookNow" className="bg-neutral-800 md:rounded-t-[50px] min-h-screen bottom-0 flex flex-col items-center justify-center !z-[100] text-white relative">

            <Link className="fixed right-0 bg-primary grid rounded-full p-4 m-8 bottom-0" target="_blank" href='https://api.whatsapp.com/send/?phone=%2B+971506185529&text=Hi Enmaa Engineering Consultancy, I’m checking in to request some details about your services.&type=phone_number&app_absent=0'>
                <button className="btn rounded btn-warning border-warning rounded-5 shadow">
                    <Image src={WPIcon} width={25} height={25} alt="WPICon" />

                </button>
            </Link>
            <Link className="fixed right-0 bg-primary grid rounded-full p-4 m-8 bottom-18" href='tel:+971505160610'>
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
                            ابدأ الآن
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

                <div>
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-gradient-to-r border rounded-2xl p-6 shadow-2xl">
                            <form onSubmit={handleSubmit}>
                                <div className="md:flex flex-wrap md:space-y-0 space-y-4 items-end gap-4">
                                    {/* Name Field */}
                                    <div className="flex-1 min-w-[200px]">
                                        <div className="relative">
                                            <div className="absolute left-3 top-3 z-10">
                                                <User className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <Input
                                                type="text"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange("name", e.target.value)}
                                                className="h-12 pl-11 bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:bg-white/20 focus:border-white/40 transition-all"
                                                required
                                            />
                                            <div className="hidden absolute -top-2 left-3 bg-slate-700 px-2 text-xs text-slate-300 font-medium">NAME</div>
                                        </div>
                                    </div>
                                    {/* Number Field */}
                                    <div className="flex-1 min-w-[200px]">
                                        <div className="relative">
                                            <div className="absolute left-3 top-3 z-10">
                                                <Phone className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <Input
                                                type="tel"
                                                placeholder="Phone number"
                                                value={formData.number}
                                                onChange={(e) => handleInputChange("number", e.target.value)}
                                                className="h-12 pl-11 bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:bg-white/20 focus:border-white/40 transition-all"
                                                required
                                            />
                                            <div className="hidden absolute -top-2 left-3 bg-slate-700 px-2 text-xs text-slate-300 font-medium">
                                                NUMBER
                                            </div>
                                        </div>
                                    </div>
                                    {/* Date Field */}
                                    <div className="flex-1 min-w-[180px]">
                                        <div className="relative">
                                            <div className="absolute left-3 top-3 z-10">
                                                <Calendar className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <Input
                                                type="date"
                                                value={formData.date}
                                                onChange={(e) => handleInputChange("date", e.target.value)}
                                                className="h-12 pl-11 bg-white/10 border-white/20 text-white focus:bg-white/20 focus:border-white/40 transition-all
                                                    appearance-none w-full [&::-webkit-calendar-picker-indicator]:invert"
                                                min={new Date().toISOString().split("T")[0]}
                                                required
                                            />

                                            <div className="hidden absolute -top-2 left-3 bg-slate-700 px-2 text-xs text-slate-300 font-medium">DATE</div>
                                        </div>
                                    </div>
                                    {/* Time Field */}
                                    <div className="flex-1 min-w-[160px]">
                                        <div className="relative">
                                            <div className="absolute left-3 top-3 z-10">
                                                <Clock className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <select
                                                value={formData.time}
                                                onChange={(e) => handleInputChange("time", e.target.value)}
                                                className="h-12 w-full pl-11 pr-4 bg-white/10 border border-white/20 text-white rounded-md appearance-none focus:bg-white/20 focus:border-white/40 transition-all cursor-pointer"
                                            >
                                                <option value="" disabled>Select time</option>
                                                {timeSlots.map((time) => (
                                                    <option className="bg-neutral-800" key={time} value={time}>
                                                        {time}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="hidden absolute -top-2 left-3 bg-slate-700 px-2 text-xs text-slate-300 font-medium">TIME</div>
                                        </div>
                                    </div>
                                    {/* Branch Field */}
                                    <div className="flex-1 min-w-[200px]">
                                        <div className="relative">
                                            <div className="absolute left-3 top-3 z-10">
                                                <MapPin className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <select
                                                value={formData.branch}
                                                onChange={(e) => handleInputChange("branch", e.target.value)}
                                                className="h-12 w-full pl-11 pr-4 bg-white/10 border border-white/20 text-white rounded-md appearance-none focus:bg-white/20 focus:border-white/40 transition-all cursor-pointer"
                                            >
                                                <option value="" disabled>Select Office</option>
                                                {branches.map((branch) => (
                                                    <option className="bg-neutral-800" key={branch.id} value={branch.id}>
                                                        {branch.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="hidden absolute -top-2 left-3 bg-slate-700 px-2 text-xs text-slate-300 font-medium">
                                                BRANCH
                                            </div>
                                        </div>
                                    </div>
                                    {/* Book Button */}
                                    <div className="flex-shrink-0">
                                        <Button
                                            type="submit"
                                            className="h-12 px-8 bg-gradient-to-r from-[#01b2eb] to-primary hover:bg-primary text-white text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                                        >
                                            BOOK
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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
                                        <b>اتصل بنا</b>: +971 50 618 5529
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Email Signup */}
                        <div className="space-y-4 flex md:justify-end justify-center">
                            <Image
                                src={footerLogo}
                                height={320}
                                width={320}
                                alt="image"
                                className="h-auto w-auto"
                            />
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
                        <div className="space-y-4 flex md:justify-end justify-center">
                            <Image
                                src={footerLogo}
                                height={320}
                                width={320}
                                alt="image"
                                className="h-auto w-auto object-center"
                            />
                        </div>
                    </div>}

            </div>
            {/* Bottom Footer */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    {isArabic ?
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4" dir="rtl">
                            <p className="text-gray-400 text-sm">
                                © حقوق الطبع والنشر 2025 - شركة إنما للاستشارات الهندسية المدنية في الشارقة. التصميم بواسطة 10X Digital
                            </p>
                            <div className="flex space-x-6 space-x-reverse">
                                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    سياسة الخصوصية
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    الشروط والأحكام
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    الدعم
                                </a>
                            </div>
                        </div>
                        :
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-400 text-sm">
                                © Copyright 2025 - Enmaa Civil Engineering Consultants In Sharjah. Design by 10X Digital
                            </p>
                            <div className="flex space-x-6">
                                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Terms and conditions
                                </a>
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