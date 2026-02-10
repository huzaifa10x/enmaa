'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar, Clock, MapPin, Phone, User } from 'lucide-react'
import React, { useState } from 'react'

export default function FooterForm() {

    const branches = [
        { id: "Dubai office", name: "Dubai office" },
        { id: "Abu Dhabi office", name: "Abu Dhabi office" },
        { id: "Sharjah office", name: "Sharjah office" },
        { id: "Ajman office", name: "Ajman office" },
    ]

    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
        "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
        "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
    ]

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        date: "",
        time: "",
        branch: "",
    })

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const handleInputChange = (field, value) => {
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
                        phone: formData.number,      // 👈 mapping
                        date: formData.date,
                        time: formData.time,
                        location: formData.branch,  // 👈 mapping
                    }),
                }
            )

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong")
            }

            setMessage("✅ Appointment booked successfully!")

            // reset form
            setFormData({
                name: "",
                number: "",
                date: "",
                time: "",
                branch: "",
            })

        } catch (error) {
            setMessage("❌ " + error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r border rounded-2xl p-6 shadow-2xl">
                <form onSubmit={handleSubmit}>
                    <div className="md:flex md:space-y-0 space-y-4 items-center gap-4">

                        {/* Name */}
                        <div className="flex items-center gap-3 px-4 h-11 border rounded-md bg-white/10 border-white/20 text-white">
                            <User className="text-white/40" />
                            <input
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                placeholder="Enter your name"
                                className="bg-transparent outline-none w-full placeholder:text-white/40"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3 px-4 h-11 border rounded-md bg-white/10 border-white/20 text-white">
                            <Phone className="text-white/40" />
                            <input
                                value={formData.number}
                                onChange={(e) => handleInputChange("number", e.target.value)}
                                placeholder="Phone number"
                                className="bg-transparent outline-none w-full placeholder:text-white/40"
                                required
                            />
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-3 px-4 h-11 border rounded-md bg-white/10 border-white/20 text-white">
                            <Calendar className="text-white/40" />
                            <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => handleInputChange("date", e.target.value)}
                                className="bg-transparent outline-none w-full text-white 
                   [&::-webkit-calendar-picker-indicator]:invert"
                                required
                            />
                        </div>

                        {/* Time */}
                        <div className="flex items-center gap-3 px-4 h-11 border rounded-md bg-white/10 border-white/20 text-white">
                            <Clock className="text-white/40" />
                            <select
                                value={formData.time}
                                onChange={(e) => handleInputChange("time", e.target.value)}
                                className="bg-transparent outline-none w-full cursor-pointer"
                                required
                            >
                                <option value="" disabled className="bg-neutral-800">
                                    Select time
                                </option>
                                {timeSlots.map((time) => (
                                    <option key={time} value={time} className="bg-neutral-800">
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Branch */}
                        <div className="flex items-center gap-3 px-4 h-11 border rounded-md bg-white/10 border-white/20 text-white">
                            <MapPin className="text-white/40" />
                            <select
                                value={formData.branch}
                                onChange={(e) => handleInputChange("branch", e.target.value)}
                                className="bg-transparent outline-none w-full cursor-pointer"
                                required
                            >
                                <option value="" disabled className="bg-neutral-800">
                                    Select Office
                                </option>
                                {branches.map((branch) => (
                                    <option key={branch.id} value={branch.id} className="bg-neutral-800">
                                        {branch.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Submit */}
                        <Button className="h-11 px-6" type="submit" disabled={loading}>
                            {loading ? "BOOKING..." : "BOOK"}
                        </Button>

                    </div>

                    {message && (
                        <p className="mt-4 text-sm text-white">{message}</p>
                    )}
                </form>

            </div>
        </div>
    )
}
