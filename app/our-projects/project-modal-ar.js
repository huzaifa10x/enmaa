"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, Link, X } from "lucide-react";

export default function ProjectModalAr({
    project,
    onClose,
    allProjects,
    onProjectChange,
}) {
    const [zoomImage, setZoomImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrevProject = () => {
        const currentIndex = allProjects.findIndex((p) => p.id === project.id);
        const prevIndex =
            currentIndex === 0 ? allProjects.length - 1 : currentIndex - 1;
        onProjectChange(allProjects[prevIndex]);
        setCurrentImageIndex(0);
    };

    const handleNextProject = () => {
        const currentIndex = allProjects.findIndex((p) => p.id === project.id);
        const nextIndex =
            currentIndex === allProjects.length - 1 ? 0 : currentIndex + 1;
        onProjectChange(allProjects[nextIndex]);
        setCurrentImageIndex(0);
    };
    console.log(project)
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm !z-[110] flex items-center justify-center p-2">
            <div className="bg-card rounded-2xl overflow-hidden max-w-5xl w-full overflow-y-auto md:h-auto h-[98vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
                    <div className="relative bg-black md:min-h-96 min-h-52">
                        <div className="group">
                            <Image
                                src={
                                    `https://yellow-termite-327315.hostingersite.com/storage/app/public/projects/${project?.images[currentImageIndex]?.filename}` ||
                                    "/placeholder.svg"
                                }
                                alt={`${project.name_ar} - Image ${currentImageIndex + 1}`}
                                fill
                                className="object-cover"
                            />
                            <Expand
                                className="lg:w-12 lg:h-12 w-9 h-9 absolute duration-200 lg:opacity-0 lg:invisible group-hover:visible group-hover:opacity-100 lg:top-1/2 lg:left-1/2 lg:-translate-1/2 right-3 bottom-3 rounded-xl text-white bg-black/50 hover:bg-white/40 backdrop-blur-sm transition-colors p-2 cursor-pointer"
                                onClick={() =>
                                    setZoomImage(
                                        `https://yellow-termite-327315.hostingersite.com/storage/app/public/projects/${project?.images[currentImageIndex]?.filename}`
                                    )
                                }
                                strokeWidth={1.25}
                            />
                        </div>

                        {zoomImage && (
                            <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[200] p-4">
                                <button
                                    onClick={() => setZoomImage(null)}
                                    className="absolute top-6 right-6 text-white bg-white/40 hover:bg-white/20 p-3 rounded-full"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="relative w-full max-w-5xl h-[80vh]">
                                    <Image
                                        src={`https://yellow-termite-327315.hostingersite.com/storage/app/public/projects/${project?.images[currentImageIndex]?.filename}`}
                                        alt="Zoomed image"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        )}

                        {project?.images.length > 1 && (
                            <>
                                {/* PREV BUTTON */}
                                <button
                                    onClick={handlePrevImage}
                                    className={`${zoomImage
                                        ? "fixed left-[30px] top-1/2 z-[999] bg-white/40 hover:bg-white/20"
                                        : "absolute left-4 drop-shadow-2xl top-1/2 bg-black/40 hover:bg-white/20"
                                        } -translate-y-1/2 backdrop-blur-sm p-2 rounded-full transition-all duration-300`}
                                >
                                    <ChevronLeft className="w-6 h-6 text-white" />
                                </button>

                                {/* NEXT BUTTON */}
                                <button
                                    onClick={handleNextImage}
                                    className={`${zoomImage
                                        ? "fixed right-[30px] top-1/2 z-[999] bg-white/40 hover:bg-white/20"
                                        : "absolute right-4 drop-shadow-2xl top-1/2 bg-black/40 hover:bg-white/20"
                                        } -translate-y-1/2 backdrop-blur-sm p-2 rounded-full transition-all duration-300`}
                                >
                                    <ChevronRight className="w-6 h-6 text-white" />
                                </button>
                            </>
                        )}

                        <div
                            className={`${zoomImage
                                ? "fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] bg-white/40"
                                : "absolute bottom-4 left-4 bg-black/50"
                                }  backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm transition-all duration-300`}
                        >
                            {currentImageIndex + 1} / {project?.images.length}
                        </div>
                    </div>

                    {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                        <button onClick={handlePrevProject}
                            className="bg-primary hover:bg-primary/80 text-sm text-white min-w-[140px] text-center backdrop-blur-sm text-nowrap p-2 rounded-md gap-2 transition-colors">
                            Previous Project
                        </button>

                        <button onClick={handleNextProject}
                            className="bg-primary hover:bg-primary/80 text-sm text-white min-w-[140px] text-center backdrop-blur-sm text-nowrap p-2 rounded-md gap-2 transition-colors">
                            Next Project
                        </button>
                    </div> */}

                    <div className="bg-slate-900 text-white p-4 md:p-8 flex flex-col justify-between" dir="rtl">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>
                        <div>
                            <p className="text-blue-400 text-sm font-medium mb-2">
                                {project.location_ar}
                            </p>
                            {/* <h2 className="text-3xl md:text-4xl font-bold md:mb-6 mb-2">
                                {project.name}
                            </h2> */}
                            <div className="md:mb-8 mb-4">
                                <h3 className="text-white font-semibold mb-4">
                                    معلومات عن المشروع
                                </h3>
                                <div className="grid grid-cols-2 md:gap-6 gap-4">
                                    <div>
                                        <p className="text-white/60 text-sm mb-1">:نوع المشروع</p>
                                        <p className="text-white font-semibold">{project.type_ar}</p>
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm mb-1">الموقع</p>
                                        <p className="text-white font-semibold">
                                            {project.location_ar}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm mb-1">حجم المبنى</p>
                                        <p className="text-white font-semibold">{project.size_ar}</p>
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm mb-1">:غرفة</p>
                                        <p className="text-white font-semibold">{project.rooms_ar}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-2">الوصف</h3>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    {project.description_ar}
                                </p>
                                <a href={project.project_location} target="_black">
                                    <button className="bg-primary cursor-pointer hover:bg-primary/80 text-white mt-5 backdrop-blur-sm text-nowrap px-4 py-2 text-sm rounded-md gap-2 transition-colors">
                                        موقع المشروع
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="md:pt-6 pt-4 border-t border-white/10">
                       
                            <p className="text-white/60 text-xs">انماء</p>
                            <p className="text-white/40 text-xs">استشارات هندسية</p>
                        </div>
                        <div className="relative flex items-center gap-3 mt-5">
                            <button
                                onClick={handlePrevProject}
                                className="bg-primary hover:bg-primary/80 text-sm text-white min-w-[140px] text-center backdrop-blur-sm text-nowrap p-2 rounded-md gap-2 transition-colors"
                            >
                                المشروع السابق
                            </button>
                            <button
                                onClick={handleNextProject}
                                className="bg-primary hover:bg-primary/80 text-sm text-white min-w-[140px] text-center backdrop-blur-sm text-nowrap p-2 rounded-md gap-2 transition-colors"
                            >
                                المشروع التالي
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
