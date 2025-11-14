import React from 'react'
import Navbar from '../Navbar'
import Image from 'next/image'
import image3 from "@/public/images/projects/1438-17.jpg"

export default function Banner() {
    return (
        <>
            <Navbar />
            <section className='relative h-[400px]'>
                <Image
                    src={image3}
                    width={200}
                    height={200}
                    alt='image'
                    className='w-full h-[400px] object-cover absolute'
                />

                <div className='relative z-10 flex flex-wrap items-center h-full text-white'>
                    <div className='max-w-7xl mx-auto flex flex-wrap px-4 items-center gap-10'>
                        <div className='text-6xl font-bold'>
                            Our <br /> Services
                        </div>
                        <div className='max-w-xl'>
                            The stylish and organized interior represents the way to feel happy and complete. Design and comfort are primarily important for the success of a person’s life.
                        </div>
                    </div>
                </div>

                <div className='bg-black/40 w-full h-[400px] top-0 absolute '></div>
            </section>
        </>
    )
}
