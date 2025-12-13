import { useEffect, useRef, useCallback } from 'react';

const easeOutExpo = (t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};


/**
 * Custom hook to manage the counter animation effect.
 * @param {HTMLDivElement} counterRef - A ref to the counter element.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
const useCounterAnimation = (counterRef, duration = 2000) => {
    const observerRef = useRef(null);
    const hasBeenVisibleRef = useRef(false);

    const animateCounter = useCallback((element, targetValue) => {
        const startTimestamp = performance.now();
        const startValue = 0; 

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

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const targetValue = parseInt(
                        element.getAttribute('data-value'),
                        10
                    );
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
    }, [counterRef, animateCounter]);
};

export default useCounterAnimation;