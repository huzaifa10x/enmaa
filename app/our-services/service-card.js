import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function ServiceCard({ service }) {
    if (service.featured) {
        return (
            <Card className="relative overflow-hidden rounded-2xl  h-full min-h-80 md:min-h-full bg-slate-900 border-0">
                <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/20" />

                <div className="relative p-4 h-full flex flex-col justify-between text-white">
                    <div>
                        <div className="text-6xl font-light opacity-20 mb-4 text-end text-transparent font-ps" style={{
                            WebkitTextStroke: "2px #fff",
                            fontFamily: "system-ui",
                        }}>{service.id}</div>
                        <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                        <ul className="space-y-2 text-sm">
                            {service.items.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-3">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link href={service?.href} className="inline-flex items-center text-white hover:text-gray-300 transition-colors mt-6">
                        See Details
                        <span className="ml-2">→</span>
                    </Link>
                </div>
            </Card>
        )
    }

    return (
        <Card className="p-6 rounded-2xl border bg-neutral-100 hover:border-gray-300 transition-colors h-full flex flex-col justify-between">
            <div>
                <div className="text-6xl font-light opacity-20 mb-4 text-end text-transparent font-ps" style={{
                    WebkitTextStroke: "2px #565656",
                    fontFamily: "system-ui",
                }}>{service.id}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                    {service.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-3">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <Link href={service?.href} className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors mt-6">
                See Details
                <span className="ml-2">→</span>
            </Link>
        </Card>
    )
}
