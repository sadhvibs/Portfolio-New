


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Hero section animations
const heroTimeline = gsap.timeline();

heroTimeline
    .from('.hero h1', {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    })
    .from('.hero .subtitle', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    }, '-=0.8')
    .from('.hero .location', {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power2.out'
    }, '-=0.6')
    .from('.cta-buttons .btn', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    }, '-=0.4');

// Navigation entrance animation
gsap.from('.nav-links li', {
    duration: 0.8,
    y: -20,
    opacity: 0,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 1.5
});

gsap.to('.header-bg', {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
        trigger: 'header',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});


// Skill tags animation
gsap.from('.skill-category', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 80%'
    }
});




// Experience timeline animation
gsap.from('.experience-item', {
    duration: 1,
    opacity: 0,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.experience-timeline',
        start: 'top 80%'
    }
});

// Section titles animation
gsap.from('.section-title', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.section-title',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    }
});

// About text animation with typewriter effect
ScrollTrigger.create({
    trigger: '.about-text',
    start: 'top 80%',
    onEnter: () => {
        gsap.from('.about-text', {
            duration: 1.5,
            opacity: 0,
            y: 30,
            ease: 'power2.out'
        });
    }
});

// Button hover animations
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            duration: 0.2,
            scale: 1.05,
            ease: 'power2.out'
        });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            duration: 0.2,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// Parallax effect for header background
gsap.to('header::before', {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
        trigger: 'header',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: target,
                ease: 'power2.inOut'
            });
        }
    });
});

// Navigation scroll effect
ScrollTrigger.create({
    start: 100,
    end: 99999,
    toggleClass: {
        className: 'scrolled',
        targets: 'nav'
    }
});

// Add CSS for scrolled navigation
const style = document.createElement('style');
style.textContent = `
            nav.scrolled {
                background: rgba(255, 255, 255, 0.95) !important;
                backdrop-filter: blur(10px) !important;
            }
        `;
document.head.appendChild(style);

// Loading animation
window.addEventListener('load', () => {
    gsap.from('body', {
        duration: 0.5,
        opacity: 0,
        ease: 'power2.out'
    });
});

// Continuous floating animation for CTA buttons
gsap.to('.btn-primary', {
    duration: 2,
    y: -5,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
    delay: 3
});

gsap.to('.btn-secondary', {
    duration: 2,
    y: -5,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
    delay: 3.2
});