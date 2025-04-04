/**
 * Core.js - Contains core functionality and utilities
 * DarkSky Initiative Project
 */

// Utility function to safely query selector with fallback
function safeQuerySelector(selector) {
    const element = document.querySelector(selector);
    return element || null;
}

// Event tracking function
function trackEvent(eventName, eventData) {
    // Only log in development mode, not in production
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log(`Event tracked: ${eventName}`, eventData);
    }
    // In a real implementation, this would connect to Google Analytics, Mixpanel, etc.
}

// Initialize smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
            
            // Track the navigation event
            trackEvent('nav_link_clicked', { destination: targetId });
        });
    });
}

// Reveal sections as they scroll into view
function initializeScrollAnimations() {
    const revealSections = () => {
        const sections = document.querySelectorAll('.content-section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize section animations
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
    });
    
    // Initial check
    revealSections();
    
    // Add scroll event
    window.addEventListener('scroll', revealSections);
}

// Add mobile menu toggle functionality
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!menuToggle || !mobileMenu) return;
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        trackEvent('mobile_menu_toggled', { state: mobileMenu.classList.contains('active') ? 'open' : 'closed' });
    });
}

// Add lazy loading functionality for images
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
        });
    }
}

// Animate lights out effect for dark sky demonstration
function animateLightsOut() {
    const container = document.createElement('div');
    container.className = 'lights-container';
    document.body.appendChild(container);
    
    // Create light dots
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const dot = document.createElement('div');
            dot.className = 'light-dot';
            
            // Random position
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            
            container.appendChild(dot);
            
            // Remove dot after animation completes
            setTimeout(() => {
                dot.remove();
            }, 5000);
        }, i * 100);
    }
}

// Celebrate action effect for interactive elements
function celebrateAction() {
    animateLightsOut();
}

// Initialize all core components
document.addEventListener('DOMContentLoaded', function() {
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeMobileMenu();
    lazyLoadImages();
    
    // Add hover effect to the CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.background = `radial-gradient(circle at ${x}px ${y}px, #f1c40f, var(--accent-color))`;
        });

        ctaButton.addEventListener('mouseleave', function() {
            this.style.background = '';
        });
    }
    
    console.log('DarkSky Initiative website core functions loaded');
}); 