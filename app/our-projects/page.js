import { Suspense } from "react"
import ProjectsPageContent from "./ProjectsPageContent"

const LOCATIONS = [
    "Abudhabi",
    "Dubai",
    "Sharjah",
    "Ajman"
];

// const PROJECTS = [
//     {
//         id: "1851",
//         name: "1851",
//         location: "RAQIBAH-6",
//         style: "Modern",
//         type: "Modern",
//         size: "6891 sq ft",
//         rooms: "05 ROOMS",
//         images: [image11851, image21851, image31851],
//         description:
//             "Prestigious residential tower on Saadiyat Island with world-class amenities. Featuring luxury finishes, smart home technology, and exclusive services.",
//         locationCity: "SHARJAH",
//     },
//     {
//         id: "1924",
//         name: "1924",
//         location: "AL MOURADAH 3",
//         style: "Modern",
//         type: "Modern",
//         size: "8528 sq ft",
//         rooms: "05 ROOMS",
//         images: [image4, image5, image6],
//         description:
//             "Prestigious residential tower on Saadiyat Island with world-class amenities. Featuring luxury finishes, smart home technology, and exclusive services.",
//         locationCity: "SHARJAH",
//     },
//     {
//         id: "2000",
//         name: "2000",
//         location: "HOUSHI",
//         style: "Modern",
//         type: "Modern",
//         size: "9128 sq ft",
//         rooms: "08 ROOMS",
//         images: [image4, image5, image6],
//         description:
//             "Prestigious residential tower on Saadiyat Island with world-class amenities. Featuring luxury finishes, smart home technology, and exclusive services.",
//         locationCity: "SHARJAH",
//     },

//     // -------- CLASSIC --------
//     {
//         id: "1946",
//         name: "1946",
//         location: "HOSHI NEIGHBOR",
//         style: "Classic",
//         type: "Classic",
//         size: "4711 sq ft",
//         rooms: "05 ROOMS",
//         images: [image4, image5, image6],
//         description:
//             "Prestigious residential tower on Saadiyat Island with world-class amenities. Featuring luxury finishes, smart home technology, and exclusive services.",
//         locationCity: "SHARJAH",
//     },
//     {
//         id: "958",
//         name: "958",
//         location: "AL RAKEEBAH-05",
//         style: "Classic",
//         type: "Classic",
//         size: "5112 sq ft",
//         rooms: "04 ROOMS",
//         images: [image4, image5, image6],
//         description:
//             "Prestigious residential tower on Saadiyat Island with world-class amenities. Featuring luxury finishes, smart home technology, and exclusive services.",
//         locationCity: "SHARJAH",
//     },
//     {
//         id: "1587",
//         name: "1587",
//         location: "HAY HOSHI",
//         style: "Classic",
//         type: "Classic",
//         size: "7808 sq ft",
//         rooms: "05 ROOMS",
//         images: [image4, image5, image6],
//         description:
//             "Prestigious residential tower on Saadiyat Island with world-class amenities. Featuring luxury finishes, smart home technology, and exclusive services.",
//         locationCity: "SHARJAH",
//     },

//     // -------- COMMERCIAL --------
//     {
//         id: "1988",
//         name: "1988",
//         location: "AL TAIWEST.AL SUYOH",
//         style: "Commercial",
//         type: "Commercial",
//         size: "11148 sq ft",
//         rooms: "7 ROOMS",
//         images: [image4, image5, image6],
//         description:
//             "Prestigious residential tower on Saadiyat Island with world-class amenities. Featuring luxury finishes, smart home technology, and exclusive services.",
//         locationCity: "SHARJAH",
//     },
//     {
//         id: "1912",
//         name: "1912",
//         location: "SUBUR OF RUWAIDA",
//         style: "Commercial",
//         type: "Commercial",
//         size: "10592 sq ft",
//         rooms: "12 ROOMS",
//         images: [image4, image5, image6],
//         description:
//             "Prestigious residential tower on Saadiyat Island with world-class amenities. Featuring luxury finishes, smart home technology, and exclusive services.",
//         locationCity: "SHARJAH",
//     },
//     {
//         id: "1950",
//         name: "1950",
//         location: "MUWAILAH COMMERCIAL",
//         style: "Commercial",
//         type: "Commercial",
//         size: "23245.80 sq ft",
//         rooms: "30 ROOMS",
//         images: [image4, image5, image6],
//         description:
//             "Prestigious residential tower on Saadiyat Island with world-class amenities. Featuring luxury finishes, smart home technology, and exclusive services.",
//         locationCity: "SHARJAH",
//     },





//     {
//         id: "401",
//         name: "401",
//         location: "Umm Al Sheif",
//         style: "Modern",
//         type: "Modern",
//         size: "30900 sq ft",
//         rooms: "08 rooms",
//         images: [image4, image5, image6],
//         description: "",
//         locationCity: "DUBAI",
//     },
//     {
//         id: "265",
//         name: "265",
//         location: "Dubai Hills",
//         style: "Modern",
//         type: "Modern",
//         size: "9700 sq ft",
//         rooms: "06 rooms",
//         images: [image4, image5, image6],
//         description: "",
//         locationCity: "DUBAI",
//     },
//     {
//         id: "235",
//         name: "235",
//         location: "Al Barsha South 1st",
//         style: "Modern",
//         type: "Modern",
//         size: "992.2 sq m",
//         rooms: "05 rooms",
//         images: [image4, image5, image6],
//         description: "",
//         locationCity: "DUBAI",
//     },

//     // -------- CLASSIC --------
//     {
//         id: "413",
//         name: "413",
//         location: "Al Khwaneej First",
//         style: "Classic",
//         type: "Classic",
//         size: "1466.4 sq m",
//         rooms: "17 rooms",
//         images: [image4, image5, image6],
//         description: "",
//         locationCity: "DUBAI",
//     },
//     {
//         id: "428",
//         name: "428",
//         location: "Al Awir",
//         style: "Classic",
//         type: "Classic",
//         size: "707.01 sq m",
//         rooms: "06 rooms",
//         images: [image4, image5, image6],
//         description: "",
//         locationCity: "DUBAI",
//     },
//     {
//         id: "233",
//         name: "233",
//         location: "Al Mamzar",
//         style: "Classic",
//         type: "Classic",
//         size: "1220.01 sq m",
//         rooms: "09 rooms",
//         images: [image4, image5, image6],
//         description: "",
//         locationCity: "DUBAI",
//     },

//     // -------- COMMERCIAL --------
//     {
//         id: "431",
//         name: "431",
//         location: "Warsan Fourth",
//         style: "Commercial",
//         type: "Commercial",
//         size: "8634.0 sq m",
//         rooms: "",
//         images: [image4, image5, image6],
//         description: "",
//         locationCity: "DUBAI",
//     },
//     {
//         id: "317",
//         name: "317",
//         location: "Al Ras",
//         style: "Commercial",
//         type: "Commercial",
//         size: "2697.0 sq m",
//         rooms: "",
//         images: [image4, image5, image6],
//         description: "",
//         locationCity: "DUBAI",
//     },
//     {
//         id: "220",
//         name: "220",
//         location: "Al Ras",
//         style: "Commercial",
//         type: "Commercial",
//         size: "2061.10 sq m",
//         rooms: "",
//         images: [image4, image5, image6],
//         description: "",
//         locationCity: "DUBAI",
//     },
//     {
//         id: "220",
//         name: "220",
//         location: "Al Ras",
//         style: "Commercial",
//         type: "Commercial",
//         size: "2061.10 sq m",
//         rooms: "",
//         images: [image4, image5, image6],
//         description: "",
//         locationCity: "ABUDHABI",
//     },
//     {
//         id: "220",
//         name: "220",
//         location: "Al Ras",
//         style: "Commercial",
//         type: "Commercial",
//         size: "2061.10 sq m",
//         rooms: "",
//         images: [image4, image5, image6],
//         description: "",
//         locationCity: "AJMAN",
//     },

// ]

export default async function Page() {
    let data = await fetch('https://yellow-termite-327315.hostingersite.com/api/projects')
    let PROJECTS = await data.json()
    return (
        <Suspense fallback={<div>Loading projects...</div>}>
            <ProjectsPageContent PROJECTS={PROJECTS} LOCATIONS={LOCATIONS} />
        </Suspense>
    )
}