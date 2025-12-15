"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { useAnimationFrame } from "framer-motion";

export default function SmoothScroll({ children }) {
    const lenisRef = new Lenis({
        duration: 1.1,        // yahi magic number hai 😎
        smoothWheel: true,
        smoothTouch: false,
        easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    useAnimationFrame((time) => {
        lenisRef.raf(time);
    });

    useEffect(() => {
        return () => {
            lenisRef.destroy();
        };
    }, []);

    return children;
}