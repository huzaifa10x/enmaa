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
import { useSearchParams } from "next/navigation";

export default function GalleryPage() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // MAIN DATA
    const DATA = [
        { id: 1, src: img1, type: "MODERN", category: "Residential" },
        { id: 2, src: img2, type: "ISLAMIC", category: "Mosque" },
        { id: 3, src: img3, type: "MODERN", category: "Mixed-Use" },
        { id: 4, src: img4, type: "MODERN", category: "Institutional" },
        { id: 5, src: img5, type: "ISLAMIC", category: "Mosque" },
        { id: 6, src: img6, type: "MODERN", category: "Healthcare" },
        { id: 7, src: img7, type: "MODERN", category: "Residential" },
        { id: 8, src: img8, type: "ANDALUSL", category: "Villa" },
        { id: 9, src: img9, type: "BUILDINGS", category: "Educational" },
    ];

    // URL PARAMS
    const params = useSearchParams();
    const defaultType = (params.get("type") || "ALL PROJECTS").toUpperCase();
    const [selectedType, setSelectedType] = useState(defaultType);

    // SUB FILTER STATE
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    // FILTER OPTIONS (MAIN)
    const TYPES = [
        { label: "All Projects", value: "ALL PROJECTS" },
        { label: "Buildings", value: "BUILDINGS" },
        { label: "Commercial", value: "COMMERCIAL" },
        { label: "Villa", value: "VILLA" },

        // { label: "Andalusl Style", value: "ANDALUSL" },
        // { label: "Classic Style", value: "CLASSIC" },
        // { label: "Islamic Style", value: "ISLAMIC" },
        // { label: "Local Style", value: "LOCAL" },
        // { label: "Modern Style", value: "MODERN" },
    ];

    // SUB FILTER OPTIONS
    const BUILDING_CATEGORIES = [
        "Residential",
        "Mixed-Use",
        "Institutional",
        "Educational",
        "Healthcare",
    ];

    const COMMERCIAL_CATEGORIES = [
        "Offices",
        "Retail",
        "Hospitality",
        "Industrial",
        "Government",
    ];
    const VILLA_CATEGORIES = [
        "Andalusi Style",
        "Classic Style",
        "Islamic Style",
        "Local Style",
        "Modern Style",
    ];

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
        <div className="p-8">
            <div className="max-w-7xl mx-auto px-4 text-center">

                {/* MAIN FILTERS */}
                <div className="flex lg:justify-center overflow-x-auto gap-3 mb-6">
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
                </div>

                {/* SUB FILTERS DYNAMICALLY */}
                {selectedType === "BUILDINGS" && (
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
                )}

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