import React from 'react'
import Navbar from '../Navbar'
import Image from 'next/image'

export default function HeroSection({ title, desc, bg }) {
    return (
        <>
            <Navbar />
            <section className='relative h-[400px]'>
                <Image
                    src={bg}
                    width={800}
                    height={200}
                    priority
                    alt='image'
                    className='w-full h-[400px] object-cover brightness-[0.7] absolute'
                />

                <div className='relative z-10 flex flex-wrap items-center h-full text-white'>
                    <div className='max-w-7xl mx-auto flex flex-wrap px-4 items-center md:gap-10 gap-5'>
                        <div className='md:text-6xl text-5xl font-bold' dangerouslySetInnerHTML={{ __html: title }} />
                        
                        <div dir='rtl' className='max-w-xl font-sans! tracking-normal md:tracking-tight!'>{desc}</div>
                    </div>
                </div>
                <div className='bg-black/40 w-full h-[400px] top-0 absolute '></div>
            </section>
        </>
    )
}