import React from 'react'
import ContactForm from './ContactForm'
import ProjectLocation from './ProjectLocation'
import { Facebook, Instagram, Mail, PhoneIncoming, Twitter, UserRoundPlus, Youtube } from 'lucide-react'
import image3 from "@/public/images/projects/1438-17.jpg"
import HeroSection from '../components/Hero-section'


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
                                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                                        <PhoneIncoming className='text-white' />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold">Call Us</h3>
                                        <p className="text-gray-600"><a className='hover:text-primary duration-300' href="tel:+971 50 618 5529">+971 50 618 5529</a></p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                                        <Mail className='text-white' />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold">Email Us</h3>
                                        <p className="text-gray-600"><a className='hover:text-primary duration-300' href="mailto:info@enmaaengcon.com">info@enmaaengcon.com</a></p>
                                        <p className="text-gray-600"><a className='hover:text-primary duration-300' href="mailto:marketing@enmaaengcon.com">marketing@enmaaengcon.com</a></p>
                                    </div>
                                </div>

                                {/* Social */}
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                                        <UserRoundPlus className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold">Follow Us On</h3>
                                        {/* <div className="flex items-center gap-4 mt-1 text-2xl">
                                            <Facebook className='hover:text-primary duration-300' />
                                            <Instagram className='hover:text-primary duration-300' />
                                            <Twitter className='hover:text-primary duration-300' />
                                        </div> */}
                                        <div className="flex items-center gap-4 mt-1 text-2xl">
                                            <a href="https://www.facebook.com/enmaa.engcon/">
                                                <Facebook className='hover:text-primary duration-300' />
                                            </a>
                                            <a href="https://www.instagram.com/enmaaengcon/">
                                                <Instagram className='hover:text-primary duration-300' />
                                            </a>
                                            <a href="https://www.youtube.com/channel/UCWBt-FaugRUuz_ENtJv7JrA/featured">
                                                <Youtube size={30} className='hover:text-primary duration-300' />
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