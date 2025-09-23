"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import bg from "@/public/images/image452423.webp"

export default function Footer() {
    return (
        <footer className="bg-[#264395] rounded-t-[50px] h-screen !z-[80] text-white relative">

            {/* <Image
                src={bg}
                height={300}
                width={300}
                alt="image"
                className="absolute w-full h-full opacity-5 -z-10"
            /> */}

            {/* Navigation */}
            <div className="border-gray-700">
                <div className="max-w-7xl mx-auto px-6 pt-10 py-4">
                    <nav className="flex justify-center space-x-24">
                        <a href="#" className="text-white hover:text-gray-300 transition-colors">
                            Home
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                            Project Map
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                            Projects
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                            Our Services
                        </a>
                    </nav>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Get Started Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-8xl font-semibold mb-6 text-balance">Get Started Now</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto text-balance">
                        If you would like to work with us or just want to get in touch, we&apos;d love to hear from you!
                    </p>
                </div>

                {/* Contact Info and Email Signup */}
                <div className="grid md:grid-cols-2 gap-12 items-start border-t border-gray-700 pt-12">
                    {/* Contact Information */}
                    <div className="space-y-4">
                        <div className="text-gray-300">
                            <p className="leading-relaxed">
                                ASAS Building - Office 667 - Maleha St -<br />
                                Warehouses Land - Sharjah - United Arab Emirates
                            </p>
                        </div>
                        <div className="text-gray-300">
                            <p className="text-lg">+971 56 230 9897</p>
                        </div>
                    </div>

                    {/* Email Signup */}
                    <div className="space-y-4">
                        <div className="text-sm text-gray-400 uppercase tracking-wider">GET QUOTATION</div>
                        <div className="flex border-transparent border border-b-gray-400">
                            <Input
                                type="email"
                                placeholder="Enter your Email"
                                className="bg-transparent rounded-0 border-transparent text-white placeholder:text-gray-400 focus:border-white"
                            />
                            <Button size="icon" className="bg-transparent text-white">
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © Copyright 2019 - Enmaa Civil Engineering Consultants In Sharjah. Design by 10X Digital
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
                </div>
            </div>
        </footer>
    )
}