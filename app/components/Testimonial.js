'use client'
import { Card } from '@/components/ui/card'
import React, { useState, useEffect } from 'react'

export default function Testimonial() {

    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [fade, setFade] = useState(true)

    const testimonials = [
        {
            id: 1,
            text: '"You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed."',
            author: 'Mirza Maaz',
        },
        {
            id: 2,
            text: '"You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed."',
            author: 'Mirza Maaz',
        },
        {
            id: 3,
            text: '"You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed."',
            author: 'Mirza Maaz',
        },
        {
            id: 4,
            text: '"You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed."',
            author: 'Mirza Maaz',
        }
    ]

    // Smooth fading animation
    useEffect(() => {
        setFade(false)
        const timeout = setTimeout(() => setFade(true), 50)
        return () => clearTimeout(timeout)
    }, [currentTestimonial])

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-4xl mb-12">What People Say</h2>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                {testimonials.slice(currentTestimonial, currentTestimonial + 2).map((t, idx) => (
                    <div key={idx} className="relative">
                        
                        {/* Quote Mark */}
                        <span className="absolute -top-6 -left-3 text-7xl font-black text-black/80">
                            &quot;
                        </span>

                        {/* Main Card */}
                        <Card className="border border-gray-300 p-10 pt-16">
                            <div className="border-t border-gray-300 pt-6">
                                <p className="text-gray-700 leading-relaxed">
                                    {t.text}
                                </p>
                            </div>
                        </Card>

                        {/* Name + Avatar */}
                        <div className="flex items-center gap-4 mt-6">
                            <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                            <p className="font-semibold text-lg">{t.author}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            currentTestimonial === index
                                ? 'bg-blue-500 w-6'
                                : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </section>
    )
}
