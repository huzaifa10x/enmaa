import React from 'react';
import { Facebook, Instagram, Mail, PhoneIncoming, Twitter, UserRoundPlus } from 'lucide-react';
import image3 from "@/public/images/projects/1438-17.jpg";
import ContactForm from '@/app/contact-us/ContactForm';
import ProjectLocation from '@/app/contact-us/ProjectLocation';
import HeroSection from '@/app/components/Hero-section';

export default function ContactUs({ lang = "ar" }) {
    const isArabic = lang === "ar";

    const translations = {
        en: {
            hero: {
                title: "Contact Us",
                desc: "The stylish and organized interior represents the way to feel happy and complete. Design and comfort are primarily important for the success of a person’s life."
            },
            heading: "Get in Touch With Enmaa",
            phoneTitle: "Landline",
            emailTitle: "Email Us",
            followTitle: "Follow Us On",
        },
        ar: {
            hero: {
                title: "تواصل معنا",
                desc: "يمثّل التصميم الداخلي الأنيق والمنظّم طريقًا للشعور بالسعادة والاكتفاء. يُعدّ التصميم والراحة عنصرين أساسيين لنجاح حياة الإنسان."
            },
            heading: "تواصل مع إنما",
            phoneTitle: "الهاتف الأرضي",
            emailTitle: "البريد الإلكتروني",
            followTitle: "تابعنا على",
        }
    };

    const t = translations[lang];

    return (
        <div className={isArabic ? "rtl" : "ltr"}>
            <HeroSection
                bg={image3}
                title={t.hero.title}
                desc={t.hero.desc}
            />

            <section className='py-16 bg-neutral-100'>
                <div className='max-w-7xl mx-auto px-6'>
                    <div className={`grid md:grid-cols-2 gap-9 ${isArabic ? "text-right" : "text-left"}`}>
                        {/* Contact Form */}
                        <div><ContactForm isArabic={isArabic} /></div>

                        {/* Contact Info */}
                        <div>
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-4xl font-bold mt-2">{t.heading}</h2>
                                </div>

                                {/* Call Us */}
                                <div className="flex items-start justify-end gap-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold">{t.phoneTitle}</h3>
                                        <p className="text-gray-600">
                                            <a className='hover:text-primary duration-300' href="tel:+971 6 52 38 228">
                                                +971 6 52 38 228
                                            </a>
                                        </p>
                                    </div>
                                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                                        <PhoneIncoming className='text-white' />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start justify-end gap-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold">{t.emailTitle}</h3>
                                        <p className="text-gray-600">
                                            <a className='hover:text-primary duration-300' href="mailto:info@enmaaengcon.com">
                                                info@enmaaengcon.com
                                            </a>
                                        </p>
                                        <p className="text-gray-600">
                                            <a className='hover:text-primary duration-300' href="mailto:marketing@enmaaengcon.com">
                                                marketing@enmaaengcon.com
                                            </a>
                                        </p>
                                    </div>
                                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                                        <Mail className='text-white' />
                                    </div>
                                </div>

                                {/* Social */}
                                <div className="flex items-start justify-end gap-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold">{t.followTitle}</h3>
                                        <div className="flex items-center gap-4 mt-1 text-2xl">
                                            <Facebook className='hover:text-primary duration-300' />
                                            <Instagram className='hover:text-primary duration-300' />
                                            <Twitter className='hover:text-primary duration-300' />
                                        </div>
                                    </div>
                                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                                        <UserRoundPlus className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProjectLocation isArabic={isArabic} />
        </div>
    );
}
