'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import QuoteModal from '../components/multi-step-form';

export default function ContactForm() {
  const pathname = usePathname();
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    // Detect language based on URL
    setIsArabic(pathname.startsWith('/ar/'));
  }, [pathname]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: [],
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  // Regex to allow: Arabic letters, spaces, and Arabic punctuation
  const ARABIC_ONLY_REGEX = /^[\u0600-\u06FF\s!@#$%^&*()_+={}\[\]:;"'<>,.?/-]*$/;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = isArabic ? 'الاسم مطلوب' : 'Name is required';
    if (!formData.email.trim()) newErrors.email = isArabic ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = isArabic ? 'رقم الهاتف غير صالح' : 'Valid phone number is required';
    if (!formData.services.length) newErrors.services = isArabic ? 'يرجى اختيار الخدمة' : 'Please select a service';
    if (!formData.message.trim()) newErrors.message = isArabic ? 'الرسالة مطلوبة' : 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // RESTRICTION LOGIC: 
    // If in Arabic mode, block typing English letters in Name and Message
    if (isArabic && (name === 'name' || name === 'message')) {
      if (value !== "" && !ARABIC_ONLY_REGEX.test(value)) {
        return; // Prevent state update if character is not Arabic
      }
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
      const res = await fetch('https://yellow-termite-327315.hostingersite.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');

      setResponseMsg(isArabic ? 'تم إرسال الرسالة بنجاح ✅' : 'Message sent successfully ✅');
      setFormData({ name: '', email: '', services: [], phone: '', message: '' });
    } catch (error) {
      setResponseMsg(error.message || (isArabic ? 'فشل في إرسال الرسالة ❌' : 'Failed to send message ❌'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form 
      className="space-y-4 bg-black/5 border p-6 rounded-2xl" 
      onSubmit={handleSubmit} 
      noValidate 
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder={isArabic ? " * أدخل اسمك (بالعربية)" : "Enter Your Name *"}
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-md px-4 py-3 border bg-white ${isArabic ? "text-right" : "text-left"}`}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            dir="ltr" // Emails are always LTR
            placeholder={isArabic ? " * البريد الإلكتروني" : "Enter Your Email Address *"}
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-md px-4 py-3 border bg-white ${isArabic ? "text-right placeholder:text-right" : "text-left"}`}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Service + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <select
            value={formData.services[0] || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, services: [e.target.value] }))}
            className={`w-full rounded-md px-4 py-3 border bg-white appearance-none ${isArabic ? "text-right" : "text-left"}`}
          >
            {[
              { en: "Choose Service", ar: "اختر الخدمة", value: "" },
              { en: "Engineering Services", ar: "الخدمات الهندسية" },
              { en: "Design Services", ar: "خدمات التصميم" },
              { en: "Tendering Services", ar: "خدمات المناقصات" },
              { en: "Supervision", ar: "الإشراف" },
              { en: "Client Engineer Representative Role", ar: "دور ممثل مهندس العميل" },
              { en: "Program Management Services", ar: "خدمات إدارة البرامج" },
              { en: "Design & Build Project Participation", ar: "المشاركة في مشاريع التصميم والبناء" },
              { en: "GIS Services", ar: "خدمات نظم المعلومات الجغرافية" },
            ].map((service, index) => (
              <option key={index} value={service.value || service.en}>
                {isArabic ? service.ar : service.en}
              </option>
            ))}
          </select>
          {errors.services && <p className="text-red-600 text-sm mt-1">{errors.services}</p>}
        </div>

        <div className={isArabic ? "phone-input-rtl" : ""}>
          <PhoneInput
            country={'ae'}
            value={formData.phone}
            onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
            inputStyle={{ width: '100%', height: '50px' }}
            containerStyle={{ direction: 'ltr' }} // Phone numbers are always LTR
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <textarea
          rows="4"
          name="message"
          placeholder={isArabic ? " * استفسارك / ملاحظاتك (بالعربية)" : "Your Query / Feedback *"}
          value={formData.message}
          onChange={handleChange}
          className={`w-full rounded-md px-4 py-3 border bg-white ${isArabic ? "text-right" : "text-left"}`}
        />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Response Message */}
      {responseMsg && (
        <p className={`text-sm font-medium ${responseMsg.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
          {responseMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="bg-[#00B3EC] hover:bg-[#00B3EC] transition-colors text-white px-6 py-3 rounded-md w-full font-bold"
      >
        {isArabic ? (submitting ? "جاري الإرسال..." : "أرسل الرسالة") : (submitting ? "Submitting..." : "Send Message")}
      </button>

      <div className="text-center text-primary font-semibold">
        {isArabic ? "أو اضغط أدناه" : "or click below"}
      </div>

      <div className="bg-[#284494] text-white px-6 py-1 flex justify-center rounded-md w-full">
        <QuoteModal isArabic={isArabic}/>
      </div>

      <style jsx global>{`
        /* Fix for Phone Input in Arabic Layout */
        .phone-input-rtl .react-tel-input .form-control {
          text-align: left;
          direction: ltr;
        }
      `}</style>
    </form>
  );
}