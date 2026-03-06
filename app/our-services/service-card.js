import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function ServiceCard({ service  , isArabic}) {
    // if (service.featured) {
    return (
        <Card className="relative overflow-hidden group rounded-2xl h-full min-h-80 md:min-h-full p-0 bg-neutral-100 border border-black/40">
            <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-100 duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t duration-300 opacity-0 group-hover:opacity-100" />

            <div className="absolute w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full duration-300 bg-black/50"></div>
            
            <div className="relative p-8 h-full flex flex-col justify-between duration-300 group-hover:text-white">
                <div>
                    <div className="text-6xl font-light opacity-65 mb-4 text-end text-white font-sans!" style={{
                        WebkitTextStroke: "2px #000",
                        fontFamily: "system-ui",
                    }}> {isArabic ? service.num : service.id}</div>
                    <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                    <ul className="space-y-2 text-sm">
                        {service.items.map((item, index) => (
                            <li key={index} className="">
                                <div dangerouslySetInnerHTML={{ __html: item }}></div>
                            </li>
                        ))}
                    </ul>
                </div> 
                 {isArabic ?
                <Link href={service?.href} className="inline-flex items-center text-end duration-300 group-hover:text-white mt-6"> 
                <span className="ml-2">⟵</span>
                  انظر التفاصيل
                   
                </Link>
                : 
                 <Link href={service?.href} className="inline-flex items-center duration-300 group-hover:text-white mt-6">
                   See Details
                    <span className="ml-2">→</span>
                </Link>
}
            </div>
        </Card>
    )
    // }

    // return (
    //     <Card className="p-6 rounded-2xl border bg-neutral-100 hover:border-gray-300 transition-colors h-full flex flex-col justify-between">
    //         <div>
    //             <div className="text-6xl font-light opacity-20 mb-4 text-end text-transparent font-ps" style={{
    //                 WebkitTextStroke: "2px #565656",
    //                 fontFamily: "system-ui",
    //             }}>{service.id}</div>
    //             <h3 className="text-xl font-bold text-gray-900 mb-6">{service.title}</h3>
    //             <ul className="space-y-2 text-sm text-gray-700">
    //                 {service.items.map((item, index) => (
    //                     <li key={index} className="flex items-start">
    //                         <span className="mr-3">•</span>
    //                         <span>{item}</span>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //         <Link href={service?.href} className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors mt-6">
    //             See Details
    //             <span className="ml-2">→</span>
    //         </Link>
    //     </Card>
    // )
}
