'use client';

import React, { useState, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import QuoteModal from '../components/multi-step-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { captcha_site_key } from '@/lib/config';

export default function ArContactForm() {
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
  const recaptchaRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'الاسم مطلوب';
    if (!formData.email.trim()) newErrors.email = 'البريد الإلكتروني مطلوب';
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'رقم الهاتف غير صالح';
    if (!formData.services.length) newErrors.services = 'يرجى اختيار الخدمة';
    if (!formData.message.trim()) newErrors.message = 'الرسالة مطلوبة';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const token = recaptchaRef.current.getValue();

    if (!token) {
      setResponseMsg("يرجى التحقق من الكابتشا ⚠️");
      return;
    }

    setErrors({});
    setSubmitting(true);
    setResponseMsg('');

    try {
      const res = await fetch('https://yellow-termite-327315.hostingersite.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'حدث خطأ ما');

      setResponseMsg('تم إرسال الرسالة بنجاح ✅');
      setFormData({ name: '', email: '', services: [], phone: '', message: '' });
      recaptchaRef.current.reset();

    } catch (error) {
      setResponseMsg('فشل في إرسال الرسالة ❌');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className="space-y-4 bg-black/5 border p-6 rounded-2xl"
      onSubmit={handleSubmit}
      noValidate
      dir="rtl"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder=" * أدخل اسمك"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 border bg-white text-right"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            dir="ltr"
            placeholder=" * البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 border bg-white text-right placeholder:text-right"
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
            className="w-full rounded-md px-4 py-3 border bg-white appearance-none text-right"
          >
            <option value="">اختر الخدمة</option>
            <option value="Engineering Services">الخدمات الهندسية</option>
            <option value="Design Services">خدمات التصميم</option>
            <option value="Tendering Services">خدمات المناقصات</option>
            <option value="Supervision">الإشراف</option>
            <option value="Client Engineer Representative Role">دور ممثل مهندس العميل</option>
            <option value="Program Management Services">خدمات إدارة البرامج</option>
            <option value="Design & Build Project Participation">المشاركة في مشاريع التصميم والبناء</option>
            <option value="GIS Services">خدمات نظم المعلومات الجغرافية</option>
          </select>
          {errors.services && <p className="text-red-600 text-sm mt-1">{errors.services}</p>}
        </div>

        <div className="phone-input-rtl">
          <PhoneInput
            country={'ae'}
            value={formData.phone}
            onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
            inputStyle={{ width: '100%', height: '50px' }}
            containerStyle={{ direction: 'ltr' }}
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <textarea
          rows="4"
          name="message"
          placeholder=" * استفسارك / ملاحظاتك"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-md px-4 py-3 border bg-white text-right"
        />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Response Message */}
      {responseMsg && (
        <p className={`text-sm font-medium ${responseMsg.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
          {responseMsg}
        </p>
      )}

      <div className="flex justify-start">
        <ReCAPTCHA
          sitekey={captcha_site_key}
          ref={recaptchaRef}
          hl="ar"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="bg-[#00B3EC] hover:bg-[#00B3EC] transition-colors text-white px-6 py-3 rounded-md w-full font-bold"
      >
        {submitting ? "جاري الإرسال..." : "أرسل الرسالة"}
      </button>

      <div className="text-center text-primary font-semibold">
        أو اضغط أدناه
      </div>

      <div className="bg-[#284494] text-white px-6 py-1 flex justify-center rounded-md w-full">
        <QuoteModal isArabic={true} />
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