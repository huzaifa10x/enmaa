"use client";

import { useEffect } from "react";
import { initScrollAnimations } from "./scrollAnimation";

export default function ScrollAnimationProvider({ children }) {
    useEffect(() => {
        initScrollAnimations();
    }, []);

    return children;
}