"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // smooth follow for outer circle
    const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveMouse);
        return () => window.removeEventListener("mousemove", moveMouse);
    }, []);

    return (
        <>
            {/* CENTER DOT */}
            <motion.div
                className="md:block hidden fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-white mix-blend-difference pointer-events-none"
                style={{
                    translateX: mouseX,
                    translateY: mouseY,
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* OUTER CIRCLE */}
            <motion.div
                className="md:block hidden fixed -top-4 -left-4 z-[9998] h-10 w-10 rounded-full border-2 border-white mix-blend-difference pointer-events-none"
                style={{
                    translateX: smoothX,
                    translateY: smoothY,
                    transform: "translate(-50%, -50%)",
                }}
            />
        </>
    );
}