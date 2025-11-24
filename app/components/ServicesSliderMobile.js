"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import DOMPurify from "isomorphic-dompurify";

export default function ServicesSliderMobile({ services }) {
    return (
        <div className="w-full py-10">
            <Carousel
                opts={{
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {services.map((item) => (
                        <CarouselItem
                            key={item.id}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">

                                {/* Background Image */}
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

                                {/* Card Content */}
                                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                                    <div className="mb-4">{item.icon}</div>

                                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>

                                    <div
                                        className="text-sm opacity-90 leading-relaxed"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item.desc),
                                        }}
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Slider Buttons */}
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </div>
    );
}
