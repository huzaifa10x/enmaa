'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React, { useState, useEffect } from 'react'
import image1 from "@/public/images/person/professional-man-with-glasses-in-pink-shirt-smilin.jpg"
import image2 from "@/public/images/person/professional-man-in-pink-shirt-smiling - Copy.jpg"
import image3 from "@/public/images/person/smiling-curly-woman.png"
import image4 from "@/public/images/person/smiling-professional-woman.png"
import Image from 'next/image'
import male from "@/public/images/male-placeholder.webp"
import female from "@/public/images/female-placeholder.webp"


export default function Testimonial() {

    // const testimonials = [
    //     {
    //         id: 1,
    //         text: "From townhouse to luxury villa, from small building to high rise, Ermaa engineering consultants are available to cater all your design layout needs. One of the most professional team with humble attitude.",
    //         author: "Mirza Maaz",
    //         image: image1,
    //     },
    //     {
    //         id: 2,
    //         text: "Exceptional service and attention to detail. The team went above and beyond to ensure our project was completed on time and within budget.",
    //         author: "Sarah Johnson",
    //         image: image2,
    //     },
    //     {
    //         id: 3,
    //         text: "Outstanding architectural solutions. Their innovative approach transformed our vision into reality with remarkable precision.",
    //         author: "Ahmed Hassan",
    //         image: image3,
    //     },
    //     {
    //         id: 4,
    //         text: "Professional, reliable, and creative. Ermaa has been our trusted partner for multiple projects over the years.",
    //         author: "Emma Wilson",
    //         image: image4,
    //     },
    // ]


    const testimonials = [
        // 🔹 Previous Reviews (UNCHANGED)
        {
            id: 1,
            text: "From townhouse to luxury villa, from small building to high rise, Ermaa engineering consultants are available to cater all your design layout needs. One of the most professional team with humble attitude.",
            author: "Mirza Maaz",
            image: male,
        },
        {
            id: 2,
            text: "Exceptional service and attention to detail. The team went above and beyond to ensure our project was completed on time and within budget.",
            author: "Sarah Johnson",
            image: female,
        },
        {
            id: 3,
            text: "Outstanding architectural solutions. Their innovative approach transformed our vision into reality with remarkable precision.",
            author: "Ahmed Hassan",
            image: male,
        },
        {
            id: 4,
            text: "Professional, reliable, and creative. Ermaa has been our trusted partner for multiple projects over the years.",
            author: "Emma Wilson",
            image: female,
        },

        // 🔹 New Reviews (ADDED)
        {
            id: 5,
            text: "The engineers are cooperative and well aware of work procedures. Special thanks to Eng. Islam for his experience and professionalism in the Siyokh area. Much appreciation to Enma and Eng. Islam.",
            author: "Albaida UAE",
            image: male,
        },
        {
            id: 6,
            text: "The best consulting company. Very cooperative from the beginning, especially Eng. Shatha and the entire engineering team. Thank you all for the great support.",
            author: "Fatima Al Zarouni",
            image: female,
        },
        {
            id: 7,
            text: "One of the best engineering consulting offices in Sharjah. Highly recommended to work with.",
            author: "Omer Alamin",
            image: male,
        },
        {
            id: 8,
            text: "A great team with close coordination and strong attention to detail throughout the project.",
            author: "Anwar Omar",
            image: male,
        },
        {
            id: 9,
            text: "One of the best design and engineering consultancy firms. Truly professional work.",
            author: "Deewan Javed",
            image: male,
        },
        {
            id: 10,
            text: "Anmaa Engineering Consultancy is a well-established office with a respectful team. They manage multiple projects across Sharjah and other Emirates with excellent expertise.",
            author: "Omar Aljallaf",
            image: male,
        },
        {
            id: 11,
            text: "Based on my experience designing and supervising two projects in Al-Hawshi, Anmaa is highly organized with excellent customer service. Special thanks to Eng. Shatha and accounts manager Abu Khalid.",
            author: "Fatima Mohammed",
            image: female,
        },
        {
            id: 12,
            text: "A strong and professional consultancy. Management is respectful and responsive, and customer service is outstanding. Any issue is resolved immediately.",
            author: "Ammar Malas",
            image: male,
        },
    ];

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
                <CarouselPrevious className={'md:flex hidden!'} />
                <CarouselNext className={'md:flex hidden!'} />
            </Carousel>
        </section>
    )
}