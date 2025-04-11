

function safeQuerySelector(selector) {
    const element = document.querySelector(selector);
    return element || null;
}


function trackEvent(eventName, eventData) {
    
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log(`Event tracked: ${eventName}`, eventData);
    }
  
}


function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
  
            trackEvent('nav_link_clicked', { destination: targetId });
        });
    });
}


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

    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
    });
    
   
    revealSections();
    
 
    window.addEventListener('scroll', revealSections);
}


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
      
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
        });
    }
}

function animateLightsOut() {
    const container = document.createElement('div');
    container.className = 'lights-container';
    document.body.appendChild(container);
    

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const dot = document.createElement('div');
            dot.className = 'light-dot';
            
           
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            
            container.appendChild(dot);
            
            
            setTimeout(() => {
                dot.remove();
            }, 5000);
        }, i * 100);
    }
}


function celebrateAction() {
    animateLightsOut();
}


document.addEventListener('DOMContentLoaded', function() {
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeMobileMenu();
    lazyLoadImages();
    
    
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