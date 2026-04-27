/**
 * Main JS for Portfolio - Redesign Edition
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header nav a');

    // Sticky Header & Active Link logic
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 100);

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // --- DARK MODE ---
    const darkModeIcon = document.querySelector('#darkMode-icon');
    const body = document.body;

    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
    }

    darkModeIcon.onclick = () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        darkModeIcon.classList.replace(isDark ? 'bx-moon' : 'bx-sun', isDark ? 'bx-sun' : 'bx-moon');
        localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
    };

    // --- PREMIUM SCROLL REVEAL ---
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            reset: false,
            distance: '40px',
            duration: 1200,
            delay: 100,
            easing: 'cubic-bezier(0.5, 0, 0, 1)'
        });

        sr.reveal('.home-content h1', { origin: 'bottom', delay: 200 });
        sr.reveal('.home-content p', { origin: 'bottom', delay: 300 });
        sr.reveal('.home-content .btn-group', { origin: 'bottom', delay: 400 });
        sr.reveal('.home-image', { origin: 'bottom', scale: 0.9, delay: 500 });
        
        sr.reveal('.about-img-wrapper', { origin: 'left' });
        sr.reveal('.about-content', { origin: 'right' });
        
        sr.reveal('.card-premium, .tech-item, .timeline-item', { 
            origin: 'bottom', 
            interval: 100 
        });
    }
});
