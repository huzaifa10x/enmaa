"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Calendar, Clock, MapPin, Phone, User } from "lucide-react"
import { useState } from "react"



export default function Footer() {
    const branches = [
        { id: "dubai-mainland", name: "Dubai Mainland" },
        { id: "abu-dhabi", name: "Abu Dhabi Branch" },
        { id: "sharjah", name: "Sharjah Office" },
        { id: "ajman", name: "Ajman Branch" },
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

    return (
        <footer id="bookNow" className="bg-[#264395] rounded-t-[50px]  !z-[80] text-white relative">
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
                    <nav className="md:flex justify-center space-x-24">
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


                <div>
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-gradient-to-r border rounded-2xl p-6 shadow-2xl">
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-wrap lg:flex-nowrap items-end gap-4">
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
                                                className="h-12 pl-11 bg-white/10 border-white/20 text-white focus:bg-white/20 focus:border-white/40 transition-all [&::-webkit-calendar-picker-indicator]:invert"
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
                                            <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                                                <SelectTrigger className="h-12 pl-11 bg-white/10 border-white/20 text-white focus:bg-white/20 focus:border-white/40 transition-all">
                                                    <SelectValue placeholder="Select time" />
                                                </SelectTrigger>
                                                <SelectContent position="popper" sideOffset={5} className="z-30 bg-slate-800 border border-slate-600">
                                                    {timeSlots.map((time) => (
                                                        <SelectItem key={time} value={time}>
                                                            {time}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <div className="hidden absolute -top-2 left-3 bg-slate-700 px-2 text-xs text-slate-300 font-medium">TIME</div>
                                        </div>
                                    </div>

                                    {/* Branch Field */}
                                    <div className="flex-1 min-w-[200px]">
                                        <div className="relative">
                                            <div className="absolute left-3 top-3 z-10">
                                                <MapPin className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <Select value={formData.branch} onValueChange={(value) => handleInputChange("branch", value)}>
                                                <SelectTrigger className="h-12 pl-11 bg-white/10 border-white/20 text-white focus:bg-white/20 focus:border-white/40 transition-all">
                                                    <SelectValue placeholder="Select branch" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {branches.map((branch) => (
                                                        <SelectItem key={branch.id} value={branch.id}>
                                                            {branch.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <div className="hidden absolute -top-2 left-3 bg-slate-700 px-2 text-xs text-slate-300 font-medium">
                                                BRANCH
                                            </div>
                                        </div>
                                    </div>

                                    {/* Book Button */}
                                    <div className="flex-shrink-0">
                                        <Button
                                            type="submit"
                                            className="h-12 px-8 bg-gradient-to-r from-[#01b2eb] to-[#264395] hover:bg-[#264395] text-white text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
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