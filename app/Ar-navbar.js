"use client";

import { Button } from "@/components/ui/button";
import Logoengish from "@/public/images/Enmaa-footer.webp"
import Logoarabic from "@/public/images/image10.png"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import QuoteModal from "./components/multi-step-form";
import { Menu } from "lucide-react";
import LanguageSwitcher from "@/components/ui/language-switcher";

export default function ArNavbar() {
    const pathname = usePathname();
    const [openSidebar, setOpenSidebar] = useState(false);
    // const isArabic = pathname.startsWith("/ar");

    const navItemsAr = [
        { name: "الرئيسية", href: "/ar/" },
        { name: "أفكار المشاريع", href: "/ar/project-map" },
        { name: "مشاريعنا", href: "/ar/our-projects" },
        { name: "خدماتنا", href: "/ar/our-services" },
        { name: "تواصل معنا", href: "/ar/contact-us" },
    ];

    const navItems = navItemsAr;

    // const isActive = (href) => {
    //     if (href === "/" || href === "/ar") return pathname === href;
    //     return pathname.startsWith(href);
    // };

    const isActive = (href) => {
        if (href === "/" || href === "/ar" || href === "/ar/") {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    return (
        <div className="absolute w-full top-0 left-0 z-50 flex lg:justify-center" dir={"rtl"}>
            <nav className="max-w-7xl w-full min-w-[360px] flex items-center justify-between px-4 py-6">
                {/* Logo */}
                <Link href={"/ar"}>
                    <Image src={Logoarabic} height={180} width={190} className="w- h-" alt="Logo" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-4">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href}>
                            <Button
                                variant="ghost"
                                className={`text-white hover:text-[#01b2eb] hover:bg-white/10 px-2 py-2 transition ${isActive(item.href) ? "text-[#01b2eb]" : ""
                                    }`}
                            >
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                    <QuoteModal isArabic />
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <LanguageSwitcher />
                </div>

                {/* CTA */}
                <a className="lg:block hidden" href="#bookNow">
                    <Button className="bg-gradient-to-r from-[#01b2eb] to-primary text-white px-8 py-3 rounded-full">
                        احجز الآن
                    </Button>
                </a>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    {/* <Button
                        variant="ghost"
                        size="icon"
                        className="text-white"
                        
                    >
                        ☰
                    </Button> */}
                    <Menu className="text-white" onClick={() => setOpenSidebar(true)} />
                </div>
            </nav>
            {/* Backdrop */}
            <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm duration-300 ${openSidebar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setOpenSidebar(false)}
            />
            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-black/95 p-6 border-white/10 duration-300 ${openSidebar ? " translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-between items-center mb-8">
                    <Image src={Logoarabic} width={50} height={50} alt="Logo" className="w-auto h-auto" />
                    <Button
                        variant="ghost"
                        onClick={() => setOpenSidebar(false)}
                        className={`text-white ${openSidebar ? 'block' : 'hidden'}`}
                    >
                        ✕
                    </Button>
                </div>

                <div className="flex flex-col space-y-6 text-white">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpenSidebar(false)}
                            className={`tracking-wide ${isActive(item.href) ? "text-[#01b2eb]" : ""
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}


                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                    </div>


                    <QuoteModal text={'Request a Quote Now'} isArabic />

                    <a href="#bookNow" onClick={() => setOpenSidebar(false)}>
                        <Button className="w-full bg-gradient-to-r from-[#01b2eb] to-primary text-white py-3 rounded-full">
                            احجز الآن
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}