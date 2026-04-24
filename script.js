// --- NAVBAR & MOBILE MENU LOGIC ---
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.header nav a');
const header = document.querySelector('.header');

window.onscroll = () => {
    // 1. Sticky Header
    header.classList.toggle('sticky', window.scrollY > 100);

    // 2. Active Section Highlighting
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector('.header nav a[href*="' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });

    // 3. Remove Mobile Menu when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// --- DARK MODE LOGIC ---
const darkModeIcon = document.querySelector('#darkMode-icon');
const body = document.body;

// Check LocalStorage for Dark Mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeIcon.classList.remove('bx-moon');
    darkModeIcon.classList.add('bx-sun');
}

darkModeIcon.onclick = () => {
    body.classList.toggle('dark-mode');

    // Toggle Icon
    if (body.classList.contains('dark-mode')) {
        darkModeIcon.classList.remove('bx-moon');
        darkModeIcon.classList.add('bx-sun');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        darkModeIcon.classList.remove('bx-sun');
        darkModeIcon.classList.add('bx-moon');
        localStorage.setItem('dark-mode', 'disabled');
    }
};


// --- SCROLL REVEAL ANIMATIONS ---
const sr = ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 2000,
    delay: 200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

// Home Section
sr.reveal('.home-content', { origin: 'left' });
sr.reveal('.home-image', { origin: 'right', delay: 400 });

// About Section
sr.reveal('.about-img-wrapper', { origin: 'left' });
sr.reveal('.about-content', { origin: 'right', delay: 400 });
sr.reveal('.stat-box', { origin: 'bottom', interval: 150 });

// Services & Projects
sr.reveal('.service-box, .project-module', { origin: 'bottom', interval: 200 });

// Tech Stack
sr.reveal('.tech-item', { origin: 'bottom', interval: 100, scale: 0.9 });

// Experience Timeline
sr.reveal('.timeline-item', { origin: 'bottom', interval: 200 });

// CTA & Contact
sr.reveal('.cta-box', { origin: 'bottom', scale: 0.9 });
sr.reveal('.contact-card', { origin: 'bottom', interval: 200 });

// Navigation Link Active State on Scroll (Refined)
const navLinksRef = document.querySelectorAll('.header nav a');
const sectionsRef = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sectionsRef.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinksRef.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
