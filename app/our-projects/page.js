// /Users/macbook/Documents/Next Projects/enmaa/app/our-projects/page.js
import { Suspense } from "react";
import ProjectsPageContent from "./ProjectsPageContent";
import Footer from "../components/footer";

export const metadata = {
    title: "Our Projects | Enma Engineering Companies",
    description: "Explore Enma Engineering Companies’ portfolio of projects, showcasing innovative architectural designs, civil engineering solutions, and successful construction ventures.",

    alternates: {
        canonical: "https://www.enmaaengcon.com/our-projects/",
        languages: {
            "x-default": "https://www.enmaaengcon.com/our-projects/",
            en: "https://www.enmaaengcon.com/our-projects/",
            ar: "https://www.enmaaengcon.com/ar/our-projects/",
        },
    },

    openGraph: {
        title: "Our Projects | Enma Engineering Companies",
        description: "Explore Enma Engineering Companies’ portfolio of projects, showcasing innovative architectural designs, civil engineering solutions, and successful construction ventures.",
        type: "website",
        url: "https://www.enmaaengcon.com/our-projects/",
    },

    twitter: {
        card: "summary_large_image",
        title: "Our Projects | Enma Engineering Companies",
        description: "Explore Enma Engineering Companies’ portfolio of projects, showcasing innovative architectural designs, civil engineering solutions, and successful construction ventures.",
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
};

const LOCATIONS = [
    { label: "Abu Dhabi", value: "Abu Dhabi" },
    { label: "Dubai", value: "Dubai" },
    { label: "Sharjah", value: "Sharjah" },
    { label: "Ajman", value: "Ajman" },
];

export default async function Page() {
    let data = await fetch('https://yellow-termite-327315.hostingersite.com/api/projects');
    let PROJECTS = await data.json();
    return (
        <>
            <Suspense fallback={<div>Loading projects...</div>}>
                <ProjectsPageContent PROJECTS={PROJECTS} LOCATIONS={LOCATIONS} />
            </Suspense>
            <Footer />
        </>
    );
}