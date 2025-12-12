"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScroll() {
    const boxRef = useRef(null);

    useEffect(() => {
        const el = boxRef.current;

        gsap.to(el, {
            // x: 600,
            rotation: 360,
            duration: 3,
            scrollTrigger: {
                trigger: el,
                pin: true,
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div className="h-[200vh] flex items-center justify-center">
            <div
                ref={boxRef}
                className="w-32 h-32 bg-blue-500 rounded-lg"
            ></div>
        </div>
    );
}