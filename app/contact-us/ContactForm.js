'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [responseMsg, setResponseMsg] = useState('');

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.service) newErrors.service = 'Service is required';
        if (!formData.subject) newErrors.subject = 'subject is required';
        if (!formData.getQuote) newErrors.getQuote = 'Quote is required';
        if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Valid phone number is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const validationErrors = validateForm();
    //     if (Object.keys(validationErrors).length > 0) {
    //         setErrors(validationErrors);
    //         return;
    //     }

    //     setSubmitting(true);
    //     setResponseMsg('');
    //     setErrors({});

    //     try {
    //         const response = await fetch('/api/contact', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         const result = await response.json();

    //         if (response.ok) {
    //             setResponseMsg('Form submitted successfully!');
    //             setFormData({ name: '', email: '', service: '', phone: '', message: '' });
    //         } else {
    //             setResponseMsg(result?.message || 'Something went wrong. Please try again.');
    //         }
    //     } catch (error) {
    //         setResponseMsg('Failed to submit form. Check your connection.');
    //     } finally {
    //         setSubmitting(false);
    //     }
    // };

    return (
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Enter your Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="w-full">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full">
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-300 text-neutral-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">

                        <option value="">Choose Subject</option>
                        <option>Inquire Now</option>
                        <option>Share Feedback</option>
                        <option>Get Quote</option>
                    </select>
                    {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div className="w-full">
                    <select
                        name="getQuote"
                        value={formData.getQuote}
                        onChange={handleChange}
                        className="w-full border border-gray-300 text-neutral-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">

                        <option value="">Get Quote</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                    {errors.getQuote && <p className="text-red-600 text-sm mt-1">{errors.getQuote}</p>}
                </div>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full">
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border border-gray-300 text-neutral-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
                </div>

                <div className="w-full">
                    <PhoneInput
                        country={'ae'}
                        value={formData.phone}
                        onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            className: 'w-full border border-gray-300 rounded px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500',
                        }}
                        inputClass="!w-full"
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>
            </div>

            <div className="w-full">
                <textarea
                    rows="4"
                    name="message"
                    placeholder="Your Query / Feedback *"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>

            {responseMsg && (
                <p className={`text-sm ${responseMsg.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                    {responseMsg}
                </p>
            )}

            <button
                type="submit"
                disabled={submitting}
                className="bg-primary hover:opacity-80 text-white px-6 py-3 rounded-md transition w-full"
            >
                {submitting ? 'Submitting...' : 'Send Message'}
            </button>
        </form>
    );
}
