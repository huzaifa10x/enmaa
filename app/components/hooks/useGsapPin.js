"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function useGsapPin(ref, options = {}) {
    useEffect(() => {
        if (typeof window === "undefined") return
        const section = ref.current
        const isDesktop = window.innerWidth >= 180
        if (!section) return
        if (isDesktop) {
            const trigger = ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                ...options, // allow customization per component
            })
            return () => trigger.kill()
        } else {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [ref])
}