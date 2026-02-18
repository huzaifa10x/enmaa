"use client"

import ProjectCard from "./project-card"

export default function ProjectGrid({ projects, onProjectClick, isArabic }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} isArabic={isArabic} onClick={() => onProjectClick(project)} />
            ))}
        </div>
    )
}
