"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function ProjectModal({ project, onClose, allProjects, onProjectChange }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
    }

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
    }

    const handlePrevProject = () => {
        const currentIndex = allProjects.findIndex((p) => p.id === project.id)
        const prevIndex = currentIndex === 0 ? allProjects.length - 1 : currentIndex - 1
        onProjectChange(allProjects[prevIndex])
        setCurrentImageIndex(0)
    }

    const handleNextProject = () => {
        const currentIndex = allProjects.findIndex((p) => p.id === project.id)
        const nextIndex = currentIndex === allProjects.length - 1 ? 0 : currentIndex + 1
        onProjectChange(allProjects[nextIndex])
        setCurrentImageIndex(0)
    }

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm !z-[90] flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="relative bg-black h-96 md:h-full min-h-96">
                        <Image
                            src={project.images[currentImageIndex] || "/placeholder.svg"}
                            alt={`${project.name} - Image ${currentImageIndex + 1}`}
                            fill
                            className="object-cover"
                        />
                        <button
                            onClick={handlePrevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-colors z-10"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-colors z-10"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                            {currentImageIndex + 1} / {project.images.length}
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                        <button onClick={handlePrevProject}
                            className="bg-primary hover:bg-primary/80 text-white backdrop-blur-sm text-nowrap p-2 rounded-md flex items-center gap-2 transition-colors">
                            <ChevronLeft className="w-6 h-6 text-white" />
                            Previous Project
                        </button>

                        <button onClick={handleNextProject}
                            className="bg-primary hover:bg-primary/80 text-white backdrop-blur-sm text-nowrap p-2 rounded-md flex items-center gap-2 transition-colors">
                            Next Project
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>

                    <div className="bg-slate-900 text-white p-6 md:p-8 flex flex-col justify-between">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>
                        <div>
                            <p className="text-blue-400 text-sm font-medium mb-2">{project.location}</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">{project.name}</h2>
                            <div className="mb-8">
                                <h3 className="text-white font-semibold mb-4">Project information</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-white/60 text-sm mb-1">Project Type:</p>
                                        <p className="text-white font-semibold">{project.type}</p>
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm mb-1">Location</p>
                                        <p className="text-white font-semibold">{project.location}</p>
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm mb-1">Size building</p>
                                        <p className="text-white font-semibold">{project.size}</p>
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm mb-1">Room:</p>
                                        <p className="text-white font-semibold">{project.rooms}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-2">Description</h3>
                                <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-white/60 text-xs">ENMAA</p>
                            <p className="text-white/40 text-xs">Engineering Consultants</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}