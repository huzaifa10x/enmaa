'use client'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function FooterForm() {
    const pathname = usePathname();
    const [isArabic, setIsArabic] = useState(false);

    useEffect(() => {
        setIsArabic(pathname.startsWith('/ar/'));
    }, [pathname]);

    const branches = [
        { id: "Dubai office", en: "Dubai office", ar: "مكتب دبي" },
        { id: "Abu Dhabi office", en: "Abu Dhabi office", ar: "مكتب أبوظبي" },
        { id: "Sharjah office", en: "Sharjah office", ar: "مكتب الشارقة" },
        { id: "Ajman office", en: "Ajman office", ar: "مكتب عجمان" },
    ]

    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
        "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
        "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
    ]

    const formatTimeSlot = (slot) => {
        if (!isArabic) return slot;
        return slot.replace("AM", "صباحاً").replace("PM", "مساءً");
    }

    const [formData, setFormData] = useState({
        name: "",
        phone: "", // changed from number to match your state logic
        date: "",
        time: "",
        branch: "",
    })

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    // Regex: Blocks English letters in Arabic mode
    const ARABIC_REGEX = /^[\u0600-\u06FF\s]*$/;

    const handleInputChange = (field, value) => {
        if (isArabic && field === "name") {
            if (value !== "" && !ARABIC_REGEX.test(value)) return;
        }
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        try {
            const res = await fetch(
                "https://yellow-termite-327315.hostingersite.com/api/appointments",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        phone: formData.phone,
                        date: formData.date,
                        time: formData.time,
                        location: formData.branch,
                    }),
                }
            )

            const data = await res.json()
            if (!res.ok) throw new Error(data.message || (isArabic ? "حدث خطأ ما" : "Something went wrong"))

            setMessage(isArabic ? "✅ تم حجز الموعد بنجاح!" : "✅ Appointment booked successfully!")
            setFormData({ name: "", phone: "", date: "", time: "", branch: "" })

        } catch (error) {
            setMessage("❌ " + error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-7xl mx-auto" dir={isArabic ? "rtl" : "ltr"}>
            <div className="bg-gradient-to-r border rounded-2xl p-6 shadow-2xl">
                <form onSubmit={handleSubmit}>
                    <div className="md:flex md:space-y-0 space-y-4 items-center gap-4">

                        {/* Name */}
                        <div className="flex items-center gap-3 px-4 h-11 border rounded-md bg-white/10 border-white/20 text-white flex-1 min-w-[200px]">
                            <User className="text-white/40 shrink-0" />
                            <input
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                placeholder={isArabic ? "الاسم الكامل" : "Enter your name"}
                                className="bg-transparent outline-none w-full placeholder:text-white/40"
                                required
                            />
                        </div>

                        {/* Phone - Using your requested method */}
                        <div className={`flex-1 min-w-[200px] text-black ${isArabic ? "phone-input-rtl" : ""}`}>
                            <PhoneInput
                                country={'ae'}
                                value={formData.phone}
                                onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                                inputStyle={{
                                    width: '100%',
                                    height: '44px',
                                    background: 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}
                                containerStyle={{ direction: 'ltr' }}
                                buttonStyle={{
                                    background: 'rgba(255,255,255,0.1)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderRadius: isArabic ? '0 6px 6px 0' : '6px 0 0 6px'
                                }}
                            />
                        </div>

                        {/* Date */}
                        {/* <div className="flex items-center gap-3 px-4 h-11 border rounded-md bg-white/10 border-white/20 text-white flex-1 min-w-[150px]">
                            <Calendar className="text-white/40 shrink-0" />
                            <input
                            type="date" lang="ar-u-ca-gregory"
                                // type="date"
                                // lang={isArabic ? "ar" : "en"}
                                value={formData.date}
                                onChange={(e) => handleInputChange("date", e.target.value)}
                                className={`bg-transparent outline-none w-full text-white [&::-webkit-calendar-picker-indicator]:invert ${isArabic ? "text-right" : ""}`}
                                required
                            />
                        </div> */}
                        <div className={`flex items-center gap-3 px-4 h-11 border rounded-md bg-white/10 border-white/20 text-white flex-1 min-w-[150px]`}>
                            <Calendar className="text-white/40 shrink-0" />
                            <input
                                type="date"
                                /* Forces Arabic language with Gregorian calendar */
                                lang="ar-u-ca-gregory"
                                value={formData.date}
                                onChange={(e) => handleInputChange("date", e.target.value)}
                                className={`bg-transparent outline-none w-full text-white 
      [&::-webkit-calendar-picker-indicator]:invert 
      ${isArabic ? "text-right [direction:rtl]" : "text-left"}`}
                                required
                            />
                        </div>

                        {/* Time */}
                        <div className="flex items-center gap-3 px-4 h-11 border rounded-md bg-white/10 border-white/20 text-white flex-1 min-w-[150px]">
                            <Clock className="text-white/40 shrink-0" />
                            <select
                                value={formData.time}
                                onChange={(e) => handleInputChange("time", e.target.value)}
                                className="bg-transparent outline-none w-full cursor-pointer appearance-none"
                                required
                            >
                                <option value="" disabled className="bg-neutral-800">
                                    {isArabic ? "اختر الوقت" : "Select time"}
                                </option>
                                {timeSlots.map((time) => (
                                    <option key={time} value={time} className="bg-neutral-800">
                                        {formatTimeSlot(time)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Branch */}
                        <div className="flex items-center gap-3 px-4 h-11 border rounded-md bg-white/10 border-white/20 text-white flex-1 min-w-[150px]">
                            <MapPin className="text-white/40 shrink-0" />
                            <select
                                value={formData.branch}
                                onChange={(e) => handleInputChange("branch", e.target.value)}
                                className="bg-transparent outline-none w-full cursor-pointer appearance-none"
                                required
                            >
                                <option value="" disabled className="bg-neutral-800">
                                    {isArabic ? "اختر المكتب" : "Select Office"}
                                </option>
                                {branches.map((branch) => (
                                    <option key={branch.id} value={branch.id} className="bg-neutral-800">
                                        {isArabic ? branch.ar : branch.en}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Submit */}
                        <Button className="h-11 px-8 font-bold" type="submit" disabled={loading}>
                            {isArabic
                                ? (loading ? "جاري..." : "حجز")
                                : (loading ? "BOOKING..." : "BOOK")}
                        </Button>

                    </div>

                    {message && (
                        <p className={`mt-4 text-sm font-medium ${message.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
                            {message}
                        </p>
                    )}
                </form>
            </div>

            <style jsx global>{`
                .phone-input-rtl .react-tel-input .form-control {
                    text-align: left !important;
                    direction: ltr !important;
                    padding-left: 48px !important;
                }
                /* Hide default arrow for cleaner selects in RTL */
                select {
                    background-image: none;
                }
                /* Ensure date picker text aligns right in Arabic */
                input[type="date"]::-webkit-datetime-edit {
                    text-align: ${isArabic ? 'right' : 'left'};
                }
            `}</style>
        </div>
    )
}