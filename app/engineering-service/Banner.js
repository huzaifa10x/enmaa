import React from 'react'
import Navbar from '../Navbar'

export default function Banner() {
    return (
        <>
            <Navbar />
            <section className='relative h-[100px]'>
                <div className='bg-black/40 w-full h-[100px] top-0 absolute '></div>
            </section>
        </>
    )
}
