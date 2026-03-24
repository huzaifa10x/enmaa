'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React, { useState, useEffect } from 'react'
import image1 from "@/public/images/person/professional-man-with-glasses-in-pink-shirt-smilin.jpg"
import image2 from "@/public/images/person/professional-man-in-pink-shirt-smiling - Copy.jpg"
import image3 from "@/public/images/person/smiling-curly-woman.png"
import image4 from "@/public/images/person/smiling-professional-woman.png"
import Image from 'next/image'


export default function Testimonial() {
    const testimonials = [
        {
            id: 1,
            text: "من المنازل المتلاصقة إلى الفلل الفاخرة، ومن المباني الصغيرة إلى الأبراج الشاهقة، يتوفر مستشارو إرما الهندسيون لتلبية جميع احتياجاتكم في تصميم المخططات. فريق محترف للغاية يتميز بالتواضع",
            author: "ميرزا معاذ",
            image: image1
        },
        {
            id: 2,
            text: "خدمة استثنائية واهتمام دقيق بالتفاصيل. بذل الفريق جهداً يفوق التوقعات لضمان إنجاز مشروعنا في الوقت المحدد وضمن الميزانية",
            author: "سارة جونسون",
            image: image2
        },
        {
            id: 3,
            text: "حلول معمارية متميزة. نهجهم الابتكاري حوّل رؤيتنا إلى واقع بدقة لافتة",
            author: "أحمد حسن",
            image: image3
        },
        {
            id: 4,
            text: "احترافيون، موثوقون، ومبدعون. كانت إرما شريكنا الموثوق في عدة مشاريع على مرّ السنوات",
            author: "إيما ويلسون",
            image: image4
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-4xl mb-12 text-right">ما يقوله الناس</h2>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-7xl">
                <CarouselContent>
                    {testimonials.map((content, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="relative">
                                <span className="absolute -top-[90px] -right-1 text-[200px] font-black text-black/80 z-40">
                                    &quot;
                                </span>
                                <Card className="border border-gray-300 p-10 pt-16 min-h-[300px]">
                                    <div className="border-t border-gray-300 pt-6">
                                        <p className="text-gray-700 leading-relaxed text-right">
                                            {content.text}
                                        </p>
                                    </div>
                                </Card>
                                <div className="flex items-center justify-end gap-4 mt-6">

                                    <p className="font-semibold text-lg">{content.author}</p>
                                    <div className="w-16 overflow-hidden h-16 rounded-full bg-gray-300">
                                        <Image
                                            src={content.image || "/placeholder.svg"}
                                            alt={content.author}
                                        />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className={'md:flex hidden'} />
                <CarouselNext className={'md:flex hidden'} />
            </Carousel>
        </section>
    )
}