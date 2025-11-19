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
            text: "From townhouse to luxury villa, from small building to high rise, Ermaa engineering consultants are available to cater all your design layout needs. One of the most professional team with humble attitude.",
            author: "Mirza Maaz",
            image: image1,
        },
        {
            id: 2,
            text: "Exceptional service and attention to detail. The team went above and beyond to ensure our project was completed on time and within budget.",
            author: "Sarah Johnson",
            image: image2,
        },
        {
            id: 3,
            text: "Outstanding architectural solutions. Their innovative approach transformed our vision into reality with remarkable precision.",
            author: "Ahmed Hassan",
            image: image3,
        },
        {
            id: 4,
            text: "Professional, reliable, and creative. Ermaa has been our trusted partner for multiple projects over the years.",
            author: "Emma Wilson",
            image: image4,
        },
    ]

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-4xl mb-12">What People Say</h2>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-7xl">
                <CarouselContent>
                    {testimonials.map((content, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="relative">
                                <span className="absolute -top-[90px] -left-3 text-[200px] font-black text-black/80 z-40">
                                    &quot;
                                </span>
                                <Card className="border border-gray-300 p-10 pt-16 min-h-[300px]">
                                    <div className="border-t border-gray-300 pt-6">
                                        <p className="text-gray-700 leading-relaxed">
                                            {content.text}
                                        </p>
                                    </div>
                                </Card>
                                <div className="flex items-center gap-4 mt-6">
                                    <div className="w-16 overflow-hidden h-16 rounded-full bg-gray-300">
                                        <Image
                                            src={content.image || "/placeholder.svg"}
                                            alt={content.author}
                                        />
                                    </div>
                                    <p className="font-semibold text-lg">{content.author}</p>
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