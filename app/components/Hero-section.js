'use client'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Image from 'next/image'

export default function HeroSection({ title, desc, bg }) {
    const pathname = usePathname();
    const [isArabic, setIsArabic] = useState(false);

    useEffect(() => {
        setIsArabic(pathname.startsWith('/ar/'));
    }, [pathname]);

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
                        {isArabic ?

                            <div className='max-w-xl' dir='rtl'>{desc}</div>
                            :
                            <div className='max-w-xl'>{desc}</div>
                        }
                    </div>
                </div>
                <div className='bg-black/40 w-full h-[400px] top-0 absolute '></div>
            </section>
        </>
    )
}