import ProjectsPageContent from "@/app/our-projects/ProjectsPageContent";
// import { headers } from "next/headers";
import { Suspense } from "react";

export default async function OurProject({ params }) {
    // const headersList = await headers();
    // const pathname = headersList.get("x-current-path") || "";
    // const isArabic = pathname.startsWith("/ar/");

    const isArabic = true; // since this is /ar route
    // const isArabic = params?.lang === "ar";

    const LOCATIONS = [
        { label: isArabic ? "أبوظبي" : "Abu Dhabi", value: "Abu Dhabi" },
        { label: isArabic ? "دبي" : "Dubai", value: "Dubai" },
        { label: isArabic ? "الشارقة" : "Sharjah", value: "Sharjah" },
        { label: isArabic ? "عجمان" : "Ajman", value: "Ajman" },
    ];

    const res = await fetch('https://yellow-termite-327315.hostingersite.com/api/projects');
    const PROJECTS = await res.json();

    return (
        <Suspense fallback={<div>Loading projects...</div>}>
            <ProjectsPageContent
                isArabic={isArabic}
                PROJECTS={PROJECTS}
                LOCATIONS={LOCATIONS}
            />
        </Suspense>
    );
}