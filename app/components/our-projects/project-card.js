"use client"

import Image from "next/image"
import { Play } from "lucide-react"

export default function ProjectCard({ project, onClick, isArabic }) {
    return (
        <div onClick={onClick} className="group relative overflow-hidden rounded-lg cursor-pointer h-64 md:h-72">
            <Image
                src={`https://yellow-termite-327315.hostingersite.com/storage/app/public/projects/${project.images[0]?.filename}`}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex justify-between items-start" dir={`${isArabic ? 'rtl' : 'ltr'}`}>
                    <div>
                        {isArabic ?
                            <div>
                                <p className="text-white/80 text-sm">{project.location_ar}</p>
                                <p className="text-white/70 text-xs mt-1">{project.style_ar}</p>
                            </div>
                            :
                            <div>
                                <p className="text-white/80 text-sm">{project.location}</p>
                                <p className="text-white/70 text-xs mt-1">{project.style}</p>
                            </div>
                        }
                    </div>
                </div>

                {/* Play Icon */}
                <div className="flex justify-end">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full group-hover:bg-white/30 transition-colors">
                        <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}