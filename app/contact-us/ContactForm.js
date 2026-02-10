'use client'

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import QuoteModal from '../components/multi-step-form';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        services: [], // 👈 backend expects array
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [responseMsg, setResponseMsg] = useState('');

    // ✅ Validation
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Valid phone number is required';
        if (!formData.services.length) newErrors.services = 'Please select a service';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    // ✅ Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // ✅ Submit to API
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setSubmitting(true);
        setResponseMsg('');

        try {
            const res = await fetch(
                'https://yellow-termite-327315.hostingersite.com/api/contact',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            setResponseMsg('Message sent successfully ✅');
            setFormData({
                name: '',
                email: '',
                services: [],
                phone: '',
                message: '',
            });

        } catch (error) {
            setResponseMsg(error.message || 'Failed to send message ❌');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form className="space-y-4 bg-black/5 border p-6 rounded-2xl" onSubmit={handleSubmit} noValidate>

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md px-4 py-3 border bg-white"
                    />
                    {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md px-4 py-3 border bg-white"
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>
            </div>

            {/* Service + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <select
                        value={formData.services[0] || ''}
                        onChange={(e) =>
                            setFormData(prev => ({
                                ...prev,
                                services: [e.target.value],
                            }))
                        }
                        className="w-full rounded-md px-4 py-3 border bg-white"
                    >
                        <option value="">Choose Service</option>
                        <option>Engineering Services</option>
                        <option>Design Services</option>
                        <option>Tendering Services</option>
                        <option>Supervision</option>
                        <option>Client Engineer Representative Role</option>
                        <option>Program Management Services</option>
                        <option>Design & Build Project Participation</option>
                        <option>GIS Services</option>
                    </select>
                    {errors.services && <p className="text-red-600 text-sm">{errors.services}</p>}
                </div>

                <div>
                    <PhoneInput
                        className="h-full! "
                        country={'ae'}
                        value={formData.phone}
                        onChange={(value) =>
                            setFormData(prev => ({ ...prev, phone: value }))
                        }
                        inputClass="!w-full h-full! rounded-md"
                    />
                    {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                </div>
            </div>

            {/* Message */}
            <div>
                <textarea
                    rows="4"
                    name="message"
                    placeholder="Your Query / Feedback *"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md px-4 py-3 border bg-white"
                />
                {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
            </div>

            {/* Response */}
            {responseMsg && (
                <p className={`text-sm ${responseMsg.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                    {responseMsg}
                </p>
            )}

            {/* Submit */}
            <button
                type="submit"
                disabled={submitting}
                className="bg-primary text-white px-6 py-3 rounded-md w-full"
            >
                {submitting ? 'Submitting...' : 'Send Message'}
            </button>

            <div className="text-center text-primary font-semibold">or click below</div>

            <div className="bg-[#284494] text-white px-6 py-1 flex justify-center rounded-md w-full">
                <QuoteModal />
            </div>

        </form>
    );
}
