import React from 'react'
import Banner from './Banner'
import ContactForm from './ContactForm'
import LocationsSection from '../components/Locations-section'
import Image from 'next/image'
import img from '@/public/images/image23245.webp'

export default function page() {
    return (
        <>
            <Banner />

            <section className='py-16 bg-neutral-100'>
                <div className='max-w-7xl mx-auto px-6'>
                    <div className='grid md:grid-cols-2 gap-9'>
                        <div>
                            <Image
                                src={img}
                                alt="Dr. Luis Gavin"
                                width={500}
                                height={600}
                                className="rounded-xl w-full h-full object-cover mx-auto"
                            />
                        </div>
                        <div><ContactForm /></div>
                    </div>
                </div>
            </section>
            <LocationsSection />

        </>
    )
}