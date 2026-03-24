"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import ProjectGrid from "../components/our-projects/project-grid"
import ProjectModal from "../components/our-projects/project-modal"
import projects from "@/public/images/projects.webp"
import projectsarabic from "@/public/images/المشاريع.png"
import Image from "next/image"
import image3 from "@/public/images/projects/1438-17.jpg"
import HeroSection from "../components/Hero-section"
import ProjectModalAr from "./project-modal-ar"

export default function ProjectsPageContent({ PROJECTS, LOCATIONS, TYPES, isArabic }) {
    const params = useSearchParams()
    const defaultLocation = (params.get("location") || "Dubai")
    const [selectedLocation, setSelectedLocation] = useState(defaultLocation)

    useEffect(() => {
        setSelectedLocation(defaultLocation)
    }, [defaultLocation])

    const [selectedProject, setSelectedProject] = useState(null)
    const filteredProjects = PROJECTS?.data.filter((project) => project.location_city === selectedLocation)

    console.log(PROJECTS)
    return (
        <>
            {isArabic ?
                <HeroSection
                    bg={image3}
                    title={' مواقع لمشاريع'}
                    desc={'تشمل مشاريعنا الفلل والمباني السكنية والتطويرات التجارية المصممة لتجمع بين العملية والراحة والتصميم الراقي'}
                /> :
                <HeroSection
                    bg={image3}
                    title={'Our <br> Projects'}
                    desc={'Our projects include villas, residential buildings, and commercial developments designed to combine practicality, comfort, and refined design.'}
                />
            }
            <main className="bg-background relative">
                <div className="max-w-7xl mx-auto px-4 py-16 ">
                    <div className="text-center relative">
                          {isArabic ?
                                    <Image
                                      src={projectsarabic}
                                      width={800}
                                      height={300}
                                      alt="services"
                                      className="w-auto h-auto mx-auto"
                                    />
                                    :
                                  <Image
                            src={projects}
                            width={800}
                            height={100}
                            alt="projects"
                            className="w-auto h-auto mx-auto"
                        />
                        }
                        
                        <div className="text-center mb-12 absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <h1 className="text-4xl md:text-5xl text-nowrap font-bold mb-2">
                                {isArabic ? <><span className="text-primary">مواقع</span> <span className="text-foreground">المشاريع</span></> :
                                    <><span className="text-primary">Project</span> <span className="text-foreground">Locations.</span></>
                                }
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center md:gap-3 mb-12">
                        {LOCATIONS.map((location, i) => (
                            <button key={i} onClick={() => setSelectedLocation(location.value)}
                                className={`px-2 py-2 font-bold border border-transparent uppercase transition-all ${selectedLocation === location.value
                                    ? "!border-primary"
                                    : "text-muted-foreground hover:border-primary"
                                    }`}>
                                {location.label}
                            </button>
                        ))}
                    </div>
                    <ProjectGrid projects={filteredProjects} isArabic={isArabic} onProjectClick={setSelectedProject} />
                </div>
                {isArabic ?
                    <div>
                        {selectedProject && (
                            <ProjectModalAr
                                project={selectedProject}
                                onClose={() => setSelectedProject(null)}
                                allProjects={filteredProjects}
                                onProjectChange={setSelectedProject}
                            />
                        )}
                    </div>
                    :
                    <div>
                        {selectedProject && (
                            <ProjectModal
                                project={selectedProject}
                                onClose={() => setSelectedProject(null)}
                                allProjects={filteredProjects}
                                onProjectChange={setSelectedProject}
                            />
                        )}
                    </div>
                }
            </main>
        </>
    )
}