import { useEffect, useRef, useCallback } from 'react';

const easeOutExpo = (t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

/**
 * Custom hook to manage the counter animation effect with LCP/Mobile optimization.
 * @param {HTMLDivElement} counterRef - A ref to the counter element.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {boolean} isReady - Flag from parent component to delay until page is settled.
 */
const useCounterAnimation = (counterRef, duration = 1000, isReady = true) => {
    const observerRef = useRef(null);

    const animateCounter = useCallback((element, targetValue) => {
        const startTimestamp = performance.now();

        const step = (timestamp) => {
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutExpo(progress);

            const currentValue = Math.floor(easedProgress * targetValue);
            element.textContent = currentValue.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [duration]);

    useEffect(() => {
        const element = counterRef.current;
        if (!element) return;

        const targetValue = parseInt(element.getAttribute('data-value'), 10) || 0;

        // 🚀 CRITICAL MOBILE OPTIMIZATION:
        // Agar mobile screen hai ya component abhi ready nahi hai, toh animation bypass karo.
        // Direct final value HTML mein set kar do taake CPU block na ho.
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            element.textContent = targetValue.toLocaleString();
            return; // No heavy loops on mobile!
        }

        // Desktop par tab tak animation roko jab tak initial paint settled na ho jaye
        if (!isReady) {
            element.textContent = '0';
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animateCounter(element, targetValue);
                } else {
                    element.textContent = '0';
                }
            },
            {
                root: null,
                threshold: 0.01,
            }
        );

        observerRef.current = observer;
        observer.observe(element);

        return () => {
            if (observerRef.current) {
                observerRef.current.unobserve(element);
            }
        };
    }, [counterRef, animateCounter, isReady]);
};

export default useCounterAnimation;