import React from 'react'
import Banner from './Banner'
import ContactForm from './ContactForm'
import Image from 'next/image'
import img from '@/public/images/image2324.webp'
import ProjectLocation from './ProjectLocation'
import { Facebook, Instagram, Mail, PhoneIncoming, Twitter, UserRoundPlus } from 'lucide-react'

export default function page() {
    return (
        <>
            <Banner />
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
                                        <h3 className="text-2xl font-semibold">Landline</h3>
                                        <p className="text-gray-600"><a className='hover:text-primary duration-300' href="tel:+971 6 52 38 228">+971 6 52 38 228</a></p>
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
                                        <div className="flex items-center gap-4 mt-1 text-2xl">
                                            <Facebook className='hover:text-primary duration-300' />
                                            <Instagram className='hover:text-primary duration-300' />
                                            <Twitter className='hover:text-primary duration-300' />
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