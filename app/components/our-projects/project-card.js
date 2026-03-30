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
             {isArabic ?
                <div className="absolute top-4 right-3 flex justify-between items-start">
                    <div>
                      
                            <div>
                                <p className="text-white/80 text-md text-right">{project.location_ar}</p>
                                <p className="text-white/70 text-sm mt-1 text-right">{project.style_ar}</p>
                            </div>
                         
                    </div>
                </div>
                   :
                 <div className="absolute top-4 left-3 flex justify-between items-start">
                    <div>
                       
                            <div>
                                <p className="text-white/80 text-md">{project.location}</p>
                                <p className="text-white/70 text-sm mt-1">{project.style}</p>
                            </div>
                        
                    </div>
                </div>
}
                <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full group-hover:bg-white/30 transition-colors">
                        <Play className="w-5 h-5 text-white fill-white" />
                    </div>
        </div>
    )
}