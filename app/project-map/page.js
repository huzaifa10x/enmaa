import projects from "@/public/images/projects.webp"
import Image from "next/image"
import Banner from "./Banner"
import GalleryPage from "./Gallery"

export default function page() {

    return (
        <>
            <Banner />
            <main className="bg-background relative">
                <div className="max-w-7xl mx-auto px-4 py-16 ">
                    {/* Header */}
                    <div className="text-center relative">
                        <Image
                            src={projects}
                            width={800}
                            height={100}
                            alt="projects"
                            className="w-auto h-auto mx-auto"
                        />
                        <div className="text-center mb-12 absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <h1 className="text-4xl md:text-5xl text-nowrap font-bold mb-2">
                                <span className="text-primary">Project </span> <span className="text-foreground">Inspirations</span>
                            </h1>
                        </div>
                    </div>
                    <GalleryPage />
                </div>
            </main>
        </>
    )
}