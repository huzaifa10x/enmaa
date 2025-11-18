import React from 'react'
import Navbar from '../Navbar'

export default function ServicesBanner({ title }) {
    return (
        <>
            <Navbar />
            <section className='relative h-[100px]'>
                <div className='bg-black/90 w-full h-[100px] top-0 absolute'>{title}</div>
            </section>
        </>
    )
}
