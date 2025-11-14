"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import img1 from "@/public/images/projects/2105.jpg";
import img2 from "@/public/images/projects/448...1.jpg";
import img3 from "@/public/images/projects/1438-07.jpg";
import img4 from "@/public/images/projects/1929.jpg";
import img5 from "@/public/images/projects/1855-01.jpg";
import img6 from "@/public/images/projects/ETHINIJI (1).jpg";
import img7 from "@/public/images/projects/ETHINIJI (2).jpg";
import img8 from "@/public/images/projects/LEFT SIDE VIEW 1.jpg";
import img9 from "@/public/images/projects/OPTION  4 -CORNER VIEW 1.jpg";


export default function GalleryPage() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { id: 1, url: img1 },
        { id: 2, url: img2 },
        { id: 3, url: img3 },
        { id: 4, url: img4 },
        { id: 5, url: img5 },
        { id: 6, url: img6 },
        { id: 7, url: img7 },
        { id: 8, url: img8 },
        { id: 9, url: img9 },
    ];


    return (
        <div className="p-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                            onClick={() => { setIndex(i); setOpen(true); }}
                        >
                            <Image
                                src={img.url.src}
                                height={300}
                                width={300}
                                alt={'images'}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                        </div>
                    ))}
                </div>
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={images.map((img) => ({ src: img.url.src }))}
                />
            </div>
        </div>
    );
}