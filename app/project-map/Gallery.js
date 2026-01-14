"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { InspiratoinGallaryData } from "./InspiratoinGallaryData";
export default function GalleryPage() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const DATA = InspiratoinGallaryData;

    return (
        <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {DATA.map((img, i) => (
                        <div key={i}
                            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                            onClick={() => {
                                setIndex(i);
                                setOpen(true);
                            }}
                        >
                            <Image
                                src={img}
                                height={300}
                                width={300}
                                alt="images"
                                loading="lazy"
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                        </div>
                    ))}
                </div>
                {/* LIGHTBOX */}
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={DATA.map((img) => ({ src: img.src }))}
                />
            </div>
        </div>
    );
}