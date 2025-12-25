"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import img1 from "@/public/images/inspiration/56.png";
import img2 from "@/public/images/inspiration/457.png";
import img3 from "@/public/images/inspiration/1754.png";
import img4 from "@/public/images/inspiration/11.jpg";
import img5 from "@/public/images/inspiration/56.jpg";
import img6 from "@/public/images/inspiration/457.jpg";
import img7 from "@/public/images/inspiration/1754.jpg";
import img8 from "@/public/images/inspiration/1.jpg";
import img9 from "@/public/images/inspiration/2.jpg";
import img10 from "@/public/images/inspiration/3.jpg";
import img11 from "@/public/images/inspiration/4.jpg";
import img12 from "@/public/images/inspiration/5.jpg";
import img13 from "@/public/images/inspiration/7.jpg";
import img14 from "@/public/images/inspiration/8.jpg";
import img15 from "@/public/images/inspiration/9.jpg";
import img16 from "@/public/images/inspiration/10.jpg";
import img17 from "@/public/images/inspiration/FRONT VIEW 02.jpg";
import img18 from "@/public/images/inspiration/575.jpg";
import img19 from "@/public/images/inspiration/02855.jpg";
import img20 from "@/public/images/inspiration/4477.jpg";
import img21 from "@/public/images/inspiration/47417.jpg";
import img22 from "@/public/images/inspiration/75845.jpg";
import img23 from "@/public/images/inspiration/755754.jpg";
import img24 from "@/public/images/inspiration/6.jpg";
import img25 from "@/public/images/inspiration/1869-03.jpg";
import img26 from "@/public/images/inspiration/02.jpg";
import img27 from "@/public/images/inspiration/PERSPECTIVE 02 (2).jpg";
import img28 from "@/public/images/inspiration/01.jpg";
import img29 from "@/public/images/inspiration/PERSPECTIVE 01 (2).jpg";
import img30 from "@/public/images/inspiration/PERSPECTIVE 02 (3).jpg";
import img31 from "@/public/images/inspiration/PERSPECTIVE 01 (3).jpg";
import img32 from "@/public/images/inspiration/REAR SIDE VIEW   01.jpg";
import img33 from "@/public/images/inspiration/PERSPECTIVE 04 (1).jpg";
import img34 from "@/public/images/inspiration/PERSPECTIVE 02 (4).jpg";
import img35 from "@/public/images/inspiration/PERSPECTIVE 03 (2).jpg";
import img36 from "@/public/images/inspiration/OPTION 3 -FRONT VIEW 02.jpg";
import img37 from "@/public/images/inspiration/PERSPECTIVE 01 (4).jpg";
import img38 from "@/public/images/inspiration/18.jpg";
import img39 from "@/public/images/inspiration/2ni108.jpg";
import img40 from "@/public/images/inspiration/REAR SIDE VIEW 01 (1).jpg";
import img41 from "@/public/images/inspiration/ENTRANCE 02.jpg";
import img42 from "@/public/images/inspiration/RIGHT SIDE VIEW 01.jpg";
import img43 from "@/public/images/inspiration/19.jpg";
import img44 from "@/public/images/inspiration/1926.jpg";
import img45 from "@/public/images/inspiration/187.jpg";
import img46 from "@/public/images/inspiration/2 (1).jpg";
import img47 from "@/public/images/inspiration/PERSPECTIVE 04.jpg";
import img48 from "@/public/images/inspiration/8145.jpg";
import img49 from "@/public/images/inspiration/558.jpg";
import img50 from "@/public/images/inspiration/1.png";
import img51 from "@/public/images/inspiration/2.png";
import img52 from "@/public/images/inspiration/3.png";
import img53 from "@/public/images/inspiration/4.png";
import img54 from "@/public/images/inspiration/5.png";
import img55 from "@/public/images/inspiration/6.png";
import img56 from "@/public/images/inspiration/7.png";
import img57 from "@/public/images/inspiration/8.png";
import img58 from "@/public/images/inspiration/9.png";
import img59 from "@/public/images/inspiration/10.png";
import img60 from "@/public/images/inspiration/11.png";

import { useSearchParams } from "next/navigation";

export default function GalleryPage() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // MAIN DATA
    const DATA = [
        { id: 1, src: img1, type: "MODERN", category: "Residential" },
        { id: 2, src: img2, type: "MODERN", category: "Residential" },
        { id: 3, src: img3, type: "MODERN", category: "Residential" },
        { id: 4, src: img4, type: "MODERN", category: "Residential" },
        { id: 5, src: img5, type: "MODERN", category: "Residential" },
        { id: 6, src: img6, type: "MODERN", category: "Residential" },
        { id: 7, src: img7, type: "MODERN", category: "Residential" },
        { id: 8, src: img8, type: "MODERN", category: "Residential" },
        { id: 9, src: img9, type: "MODERN", category: "Residential" },
        { id: 10, src: img10, type: "MODERN", category: "Residential" },
        { id: 11, src: img11, type: "MODERN", category: "Residential" },
        { id: 12, src: img12, type: "MODERN", category: "Residential" },
        { id: 13, src: img13, type: "MODERN", category: "Residential" },
        { id: 14, src: img14, type: "MODERN", category: "Residential" },
        { id: 15, src: img15, type: "MODERN", category: "Residential" },
        { id: 16, src: img16, type: "MODERN", category: "Residential" },
        { id: 17, src: img17, type: "MODERN", category: "Residential" },
        { id: 18, src: img18, type: "MODERN", category: "Residential" },
        { id: 19, src: img19, type: "MODERN", category: "Residential" },
        { id: 20, src: img20, type: "MODERN", category: "Residential" },
        { id: 21, src: img21, type: "MODERN", category: "Residential" },
        { id: 22, src: img22, type: "MODERN", category: "Residential" },
        { id: 23, src: img23, type: "MODERN", category: "Residential" },
        { id: 24, src: img24, type: "MODERN", category: "Residential" },
        { id: 25, src: img25, type: "MODERN", category: "Residential" },
        { id: 26, src: img26, type: "MODERN", category: "Residential" },
        { id: 27, src: img27, type: "MODERN", category: "Residential" },
        { id: 28, src: img28, type: "MODERN", category: "Residential" },
        { id: 29, src: img29, type: "MODERN", category: "Residential" },
        { id: 30, src: img30, type: "MODERN", category: "Residential" },
        { id: 31, src: img31, type: "MODERN", category: "Residential" },
        { id: 32, src: img32, type: "MODERN", category: "Residential" },
        { id: 33, src: img33, type: "MODERN", category: "Residential" },
        { id: 34, src: img34, type: "MODERN", category: "Residential" },
        { id: 35, src: img35, type: "MODERN", category: "Residential" },
        { id: 36, src: img36, type: "MODERN", category: "Residential" },
        { id: 37, src: img37, type: "MODERN", category: "Residential" },
        { id: 38, src: img38, type: "MODERN", category: "Residential" },
        { id: 39, src: img39, type: "MODERN", category: "Residential" },
        { id: 40, src: img40, type: "MODERN", category: "Residential" },
        { id: 41, src: img41, type: "MODERN", category: "Residential" },
        { id: 42, src: img42, type: "MODERN", category: "Residential" },
        { id: 43, src: img43, type: "MODERN", category: "Residential" },
        { id: 44, src: img44, type: "MODERN", category: "Residential" },
        { id: 45, src: img45, type: "MODERN", category: "Residential" },
        { id: 46, src: img46, type: "MODERN", category: "Residential" },
        { id: 47, src: img47, type: "MODERN", category: "Residential" },
        { id: 48, src: img48, type: "MODERN", category: "Residential" },
        { id: 49, src: img49, type: "MODERN", category: "Residential" },
        { id: 50, src: img50, type: "MODERN", category: "Residential" },
        { id: 51, src: img51, type: "MODERN", category: "Residential" },
        { id: 52, src: img52, type: "MODERN", category: "Residential" },
        { id: 53, src: img53, type: "MODERN", category: "Residential" },
        { id: 54, src: img54, type: "MODERN", category: "Residential" },
        { id: 55, src: img55, type: "MODERN", category: "Residential" },
        { id: 56, src: img56, type: "MODERN", category: "Residential" },
        { id: 57, src: img57, type: "MODERN", category: "Residential" },
        { id: 58, src: img58, type: "MODERN", category: "Residential" },
        { id: 59, src: img59, type: "MODERN", category: "Residential" },
        { id: 60, src: img60, type: "MODERN", category: "Residential" },
    ];


    // URL PARAMS
    const params = useSearchParams();
    const defaultType = (params.get("type") || "ALL PROJECTS").toUpperCase();
    const [selectedType, setSelectedType] = useState(defaultType);

    // SUB FILTER STATE
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    // FILTER OPTIONS (MAIN)
    // const TYPES = [
    //     { label: "All Projects", value: "ALL PROJECTS" },
    //     { label: "Buildings", value: "BUILDINGS" },
    //     { label: "Commercial", value: "COMMERCIAL" },
    //     { label: "Villa", value: "VILLA" },
    //     { label: "Andalusl Style", value: "ANDALUSL" },
    //     { label: "Classic Style", value: "CLASSIC" },
    //     { label: "Islamic Style", value: "ISLAMIC" },
    //     { label: "Local Style", value: "LOCAL" },
    //     { label: "Modern Style", value: "MODERN" },
    // ];

    // SUB FILTER OPTIONS
    // const BUILDING_CATEGORIES = [
    //     "Residential",
    //     "Mixed-Use",
    //     "Institutional",
    //     "Educational",
    //     "Healthcare",
    // ];

    // const COMMERCIAL_CATEGORIES = [
    //     "Offices",
    //     "Retail",
    //     "Hospitality",
    //     "Industrial",
    //     "Government",
    // ];
    // const VILLA_CATEGORIES = [
    //     "Andalusi Style",
    //     "Classic Style",
    //     "Islamic Style",
    //     "Local Style",
    //     "Modern Style",
    // ];

    // MAIN TYPE FILTER
    const filteredData =
        selectedType === "ALL PROJECTS"
            ? DATA
            : DATA.filter((item) => item.type.toUpperCase() === selectedType);

    // APPLY SUB CATEGORY (ONLY WHEN AVAILABLE)
    const finalData =
        selectedCategory !== "ALL" &&
            (selectedType === "BUILDINGS" || selectedType === "COMMERCIAL")
            ? filteredData.filter((item) => item.category === selectedCategory)
            : filteredData;

    return (
        <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">

                {/* MAIN FILTERS */}
                {/* <div className="flex lg:justify-center overflow-x-auto gap-3 mb-6">
                    {TYPES.map((t) => (
                        <button
                            key={t.value}
                            onClick={() => {
                                setSelectedType(t.value);
                                setSelectedCategory("ALL");
                            }}
                            className={`px-2 py-1 font-bold border text-nowrap border-transparent transition-all ${selectedType === t.value
                                ? "!border-primary"
                                : "text-muted-foreground hover:border-primary"
                                }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div> */}

                {/* SUB FILTERS DYNAMICALLY */}
                {/* {selectedType === "BUILDINGS" && (
                    <div className="flex lg:justify-center overflow-x-auto gap-3 mb-8">
                        {BUILDING_CATEGORIES.map((c) => (
                            <button
                                key={c}
                                onClick={() => setSelectedCategory(c)}
                                className={`px-2 py-1 border font-semibold transition-all ${selectedCategory === c
                                    ? "!border-primary"
                                    : "text-muted-foreground hover:border-primary"
                                    }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                )}

                {selectedType === "COMMERCIAL" && (
                    <div className="flex lg:justify-center overflow-x-auto gap-3 mb-8">
                        {COMMERCIAL_CATEGORIES.map((c) => (
                            <button
                                key={c}
                                onClick={() => setSelectedCategory(c)}
                                className={`px-2 py-1 border font-semibold transition-all ${selectedCategory === c
                                    ? "!border-primary"
                                    : "text-muted-foreground hover:border-primary"
                                    }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                )}
                {selectedType === "VILLA" && (
                    <div className="flex lg:justify-center overflow-x-auto gap-3 mb-8">
                        {VILLA_CATEGORIES.map((c) => (
                            <button
                                key={c}
                                onClick={() => setSelectedCategory(c)}
                                className={`px-2 py-1 border font-semibold transition-all ${selectedCategory === c
                                    ? "!border-primary"
                                    : "text-muted-foreground hover:border-primary"
                                    }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                )} */}

                {/* GALLERY GRID */}
                {finalData.length === 0 ? (
                    <div className="text-lg font-semibold text-muted-foreground">
                        No project found
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {finalData.map((img, i) => (
                            <div
                                key={img.id}
                                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                                onClick={() => {
                                    setIndex(i);
                                    setOpen(true);
                                }}
                            >
                                <Image
                                    src={img.src.src}
                                    height={300}
                                    width={300}
                                    alt="images"
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            </div>
                        ))}
                    </div>
                )}

                {/* LIGHTBOX */}
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={finalData.map((img) => ({ src: img.src.src }))}
                />
            </div>
        </div>
    );
}