// Toggle menu for mobile view
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

// Toggle classes to show/hide the menu on mobile
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
};

// Smooth scrolling functionality for links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Scroll event for active navigation link and sticky header
window.onscroll = () => {
    let top = window.scrollY;

    // Highlight the active link in the navigation menu
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Offset for better alignment
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header on scroll
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Close the mobile menu when scrolling
    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
};

// Smooth scroll behavior for menu links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section with smooth behavior
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// ScrollReveal Animations (for scrolling effects)
ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true, // Reset the animation each time it's triggered
});

// Reveal specific elements with scroll effects
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });

// Typed.js Animation (for typing effect)
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Python Developer', 'Machine Learning Engineer', 'Data Scientist'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
});
