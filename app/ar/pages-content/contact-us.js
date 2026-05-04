"use client";
import { usePathname } from 'next/navigation';
import React from 'react';
import image3 from "@/public/images/projects/1438-17.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTiktok, FaUser } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import ArContactForm from '@/app/contact-us/ArContactForm';
import ArProjectLocation from '@/app/contact-us/ArProjectLocation';
import HeroSection from '../ArComponents/ArHome/components/Hero-section';

export default function ContactUs() {
    const pathname = usePathname(); // gets current path
    const isArabic = pathname.startsWith('/ar/'); // if URL starts with /ar → Arabic

    const translations = {
        en: {
            hero: {
                title: "Contact Us",
                desc: "The stylish and organized interior represents the way to feel happy and complete. Design and comfort are primarily important for the success of a person’s life."
            },
            heading: "Get in Touch With Enmaa",
            phoneTitle: "Call Us",
            emailTitle: "Email Us",
            followTitle: "Follow Us On",
        },
        ar: {
            hero: {
                title: "تواصل معنا",
                desc: "للاستفسارات أو الاستشارات أو مناقشة المشاريع، يُرجى التواصل مع إنماء. سيقوم فريقنا بالرد بسرعة لمساعدتكم."
            },
            heading: "تواصل مع  إنماء",
            phoneTitle: "الهاتف ",
            emailTitle: "البريد الإلكتروني",
            followTitle: "تابعنا على",
        }
    };

    const t = isArabic ? translations.ar : translations.en;

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
                        <div><ArContactForm /></div>

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
                                            <a className='hover:text-primary duration-300' href="tel:+971506185529">
                                                +971 50 618 5529
                                            </a>
                                        </p>
                                    </div>
                                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                                        <FaPhone className='text-white' />
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="flex items-start justify-end gap-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold">{t.emailTitle}</h3>
                                        <p className="text-gray-600">
                                            <a className='hover:text-primary duration-300' href="mailto:marketing@enmaaengcon.com">
                                                marketing@enmaaengcon.com
                                            </a>
                                        </p>
                                        <p className="text-gray-600">
                                            <a className='hover:text-primary duration-300' href="mailto:marketing@enmaaengcon.com">
                                                marketing@enmaaengcon.com
                                            </a>
                                        </p>
                                    </div>
                                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                                        <IoMail className='text-white' />
                                    </div>
                                </div>
                                {/* Social */}
                                <div className="flex items-start justify-end gap-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold">{t.followTitle}</h3>
                                        <div className="flex items-center gap-4 mt-1 text-2xl">
                                            <a className='text-black bg-neutral-200 hover:bg-primary hover:text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors' href="https://www.instagram.com/enmaaengcon/">
                                                <FaInstagram className='duration-300' />
                                            </a>
                                            <a className='text-black bg-neutral-200 hover:bg-primary hover:text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors' href="https://www.facebook.com/enmaa.engcon/">
                                                <FaFacebook className='duration-300' />
                                            </a>
                                            <a className='text-black bg-neutral-200 hover:bg-primary hover:text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors' href="https://www.linkedin.com/company/73412794/admin/page-posts/published/">
                                                <FaLinkedin className='duration-300' />
                                            </a>
                                            <a className='text-black bg-neutral-200 hover:bg-primary hover:text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors' href="https://www.tiktok.com/@enmaaengcon">
                                                <FaTiktok className='duration-300' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                                        <FaUser className="text-white" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ArProjectLocation />
        </div>
    );
}