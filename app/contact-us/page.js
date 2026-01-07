import React from 'react'
import ContactForm from './ContactForm'
import ProjectLocation from './ProjectLocation'
import image3 from "@/public/images/projects/1438-17.jpg"
import HeroSection from '../components/Hero-section'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTiktok, FaUser } from 'react-icons/fa6'
import { IoMail } from "react-icons/io5";

export default function page() {
    return (
        <>
            <HeroSection
                bg={image3}
                title={'Contact Us'}
                desc={'For inquiries, consultations, or project discussions, please contact Enmaa. Our team will respond promptly to assist you.'}
            />
            <section className='py-16 bg-neutral-100'>
                <div className='max-w-7xl mx-auto px-6'>
                    <div className='grid md:grid-cols-2 gap-9'>
                        <div className=''>
                            <div className="space-y-10">
                                {/* Heading */}
                                <div>
                                    <h2 className="text-4xl font-bold mt-2">Get in Touch With Enmaa</h2>
                                </div>
                                {/* Call Us */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                        <FaPhone className='text-white' />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold">Call Us</h3>
                                        <p className="text-gray-600"><a className='hover:text-primary duration-300' href="tel:+971 50 618 5529">+971 50 618 5529</a></p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                        <IoMail className='text-white' />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold">Email Us</h3>
                                        <p className="text-gray-600"><a className='hover:text-primary duration-300' href="mailto:info@enmaaengcon.com">info@enmaaengcon.com</a></p>
                                        <p className="text-gray-600"><a className='hover:text-primary duration-300' href="mailto:marketing@enmaaengcon.com">marketing@enmaaengcon.com</a></p>
                                    </div>
                                </div>

                                {/* Social */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                        <FaUser className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold">Follow Us On</h3>
                                        <div className="flex items-center gap-1 mt-1 text-xl">
                                            <a className='text-black bg-neutral-200 hover:bg-primary hover:text-white! rounded-full w-8 h-8 flex items-center justify-center transition-colors' href="https://www.instagram.com/enmaaengcon/">
                                                <FaInstagram className='duration-300' />
                                            </a>
                                            <a className='text-black bg-neutral-200 hover:bg-primary hover:text-white! rounded-full w-8 h-8 flex items-center justify-center transition-colors' href="https://www.facebook.com/enmaa.engcon/">
                                                <FaFacebook className='duration-300' />
                                            </a>
                                            <a className='text-black bg-neutral-200 hover:bg-primary hover:text-white! rounded-full w-8 h-8 flex items-center justify-center transition-colors' href="https://www.linkedin.com/company/73412794/admin/page-posts/published/">
                                                <FaLinkedin className='duration-300' />
                                            </a>
                                            <a className='text-black bg-neutral-200 hover:bg-primary hover:text-white! rounded-full w-8 h-8 flex items-center justify-center transition-colors' href="https://www.youtube.com/channel/UCWBt-FaugRUuz_ENtJv7JrA/featured">
                                                <FaTiktok className='duration-300' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div><ContactForm /></div>
                    </div>
                </div>
            </section>
            <ProjectLocation />
        </>
    )
}