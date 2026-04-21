"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useAnimationFrame } from "framer-motion";

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.1,
            smoothWheel: true,
            smoothTouch: false,
            easing: (t) => 1 - Math.pow(1 - t, 3),
        });

        return () => {
            lenisRef.current?.destroy();
            lenisRef.current = null;
        };
    }, []);

    useAnimationFrame((time) => {
        lenisRef.current?.raf(time);
    });

    return children;
}