export function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                entry.target.classList.add('opacity-100', 'translate-y-0');

                // optional: animate only once
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
}