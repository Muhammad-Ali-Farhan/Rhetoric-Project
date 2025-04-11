document.addEventListener('DOMContentLoaded', function() {
   
    createNightSky();
    
   
    initializeTiltEffect();
    
   
    initializeScrollAnimations();
    
   
    initializeParticles();
});


function createNightSky() {
    const nightSky = document.createElement('div');
    nightSky.className = 'night-sky';
    document.body.appendChild(nightSky);
    
    
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
       
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
       
        const size = 1 + Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
       
        star.style.setProperty('--duration', `${3 + Math.random() * 7}s`);
        star.style.setProperty('--delay', `${Math.random() * 5}s`);
        
        nightSky.appendChild(star);
    }
}


function initializeTiltEffect() {
    const cards = document.querySelectorAll('.image-card, .resource-box');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top; 
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            
            
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}


function initializeScrollAnimations() {
    const sections = document.querySelectorAll('.content-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}


function initializeParticles() {
    const heroSection = document.querySelector('.hero');
    
    if (!heroSection) return;
    
 
    const canvas = document.createElement('canvas');
    canvas.className = 'particles-canvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    heroSection.insertBefore(canvas, heroSection.firstChild);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
    }
    
    function createParticles() {
        particles = [];
        const particleCount = Math.floor(canvas.width * canvas.height / 15000);
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                color: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25
            });
        }
    }
    
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
        
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
          
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.speedX = -particle.speedX;
            }
            
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.speedY = -particle.speedY;
            }
        });
        
        requestAnimationFrame(drawParticles);
    }
    

    window.addEventListener('resize', function() {
        resizeCanvas();
        createParticles();
    });
    
    resizeCanvas();
    createParticles();
    drawParticles();
} 