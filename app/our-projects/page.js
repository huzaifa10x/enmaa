import { Suspense } from "react"
import ProjectsPageContent from "./ProjectsPageContent"

const LOCATIONS = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman"
];

export default async function Page() {
    let data = await fetch('https://yellow-termite-327315.hostingersite.com/api/projects')
    let PROJECTS = await data.json()
    return (
        <Suspense fallback={<div>Loading projects...</div>}>
            <ProjectsPageContent PROJECTS={PROJECTS} LOCATIONS={LOCATIONS} />
        </Suspense>
    )
}