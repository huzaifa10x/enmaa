import ProjectsPageContent from "@/app/our-projects/ProjectsPageContent";
import { Suspense } from "react"

const LOCATIONS = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman"
];

export default async function OurProject() {
    let data = await fetch('https://yellow-termite-327315.hostingersite.com/api/projects')
    let PROJECTS = await data.json()
    return (
        <Suspense fallback={<div>Loading projects...</div>}>
            <ProjectsPageContent isArabic PROJECTS={PROJECTS} LOCATIONS={LOCATIONS} />
        </Suspense>
    )
}