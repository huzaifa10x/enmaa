import projects from "@/public/images/المشاريع.png"
import Image from "next/image"
import HeroSection from "@/app/components/Hero-section"
import GalleryPage from "@/app/project-map/Gallery"
import image3 from "@/public/images/projects/1438-17.jpg"

export default function ProjectMap() {


    return (
        <>
            <HeroSection
                bg={image3}
                title={'مشاريع <br/> مُلهمة'}
                desc={'عرض بصري لمفاهيم التصميم وأفكار المشاريع التي تؤثر على أعمالنا الهندسية والتطويرية.'}
            />
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
                                <span className="text-primary">مشاريع </span> <span className="text-foreground">مُلهمة</span>
                            </h1>
                        </div>
                    </div>
                    <GalleryPage />
                </div>
            </main>
        </>
    )
}