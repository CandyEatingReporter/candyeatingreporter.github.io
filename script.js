// Professional Portfolio JavaScript for Devin W. de Silva

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active navigation
                updateActiveNav(this);
            }
        });
    });
    
    // Initialize scroll spy
    initScrollSpy();
    
    // Initialize animations
    initAnimations();
});

// Update active navigation link
function updateActiveNav(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Scroll spy functionality
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -20% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                
                if (activeLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize animations
function initAnimations() {
    // Animate elements on scroll
    const animateOnScrollOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animateOnScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                animateOnScrollObserver.unobserve(entry.target);
            }
        });
    }, animateOnScrollOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.experience-item, .education-item, .skill-category, .achievement-item');
    animatedElements.forEach(element => {
        animateOnScrollObserver.observe(element);
    });
    
    // Add staggered animation for skills
    const skillItems = document.querySelectorAll('.skill-category li');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Smooth reveal animations for hero section
function initHeroAnimations() {
    const heroElements = document.querySelectorAll('.hero-content h1, .hero-content .subtitle, .hero-description');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Initialize hero animations when page loads
window.addEventListener('load', initHeroAnimations);

// Handle navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Typing animation for hero text
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        
        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }
}

// Glitch effect enhancement
function enhanceGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.animation = 'glitch 0.3s infinite';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.animation = 'glitch 2s infinite';
        });
    });
}

// Project card interactions
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Book card 3D effect
function initBookCards() {
    const bookCards = document.querySelectorAll('.book-card');
    
    bookCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Course card animations
function initCourseCards() {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach((card, index) => {
        // Staggered animation on load
        setTimeout(() => {
            card.classList.add('animate-in');
        }, index * 100);
        
        // Hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.01)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Cyber button effects
function initCyberButtons() {
    const cyberButtons = document.querySelectorAll('.cyber-btn');
    
    cyberButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple CSS
function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .cyber-btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Scroll-triggered animations
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.project-card, .book-card, .course-card, .cv-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Floating elements animation enhancement
function enhanceFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        // Add random movement
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            
            element.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 2000 + index * 500);
        
        // Click interaction
        element.addEventListener('click', () => {
            element.style.animation = 'none';
            element.style.transform = 'scale(1.2) rotate(360deg)';
            
            setTimeout(() => {
                element.style.animation = 'float 3s ease-in-out infinite var(--delay)';
                element.style.transform = 'scale(1) rotate(0deg)';
            }, 500);
        });
    });
}

// Keyboard navigation
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    scrollToSection('home');
                    break;
                case '2':
                    e.preventDefault();
                    scrollToSection('projects');
                    break;
                case '3':
                    e.preventDefault();
                    scrollToSection('cv');
                    break;
                case '4':
                    e.preventDefault();
                    scrollToSection('books');
                    break;
                case '5':
                    e.preventDefault();
                    scrollToSection('courses');
                    break;
            }
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileMenu();
    animateCounters();
    initTypingAnimation();
    enhanceGlitchEffect();
    initProjectCards();
    initBookCards();
    initCourseCards();
    initCyberButtons();
    addRippleStyles();
    initScrollAnimations();
    enhanceFloatingElements();
    initKeyboardNavigation();
    
    // Show home section by default
    showSection('home');
    
    console.log('🚀 Digital Humanities Portfolio initialized successfully!');
});

// Add some interactive easter eggs
function addEasterEggs() {
    let clickCount = 0;
    const logo = document.querySelector('.nav-logo h1');
    
    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            // Special animation
            document.body.style.animation = 'glitch 0.5s infinite';
            setTimeout(() => {
                document.body.style.animation = 'none';
                clickCount = 0;
            }, 2000);
        }
    });
}

// Performance optimization
function optimizePerformance() {
    // Lazy load images when they're implemented
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
});

// Export functions for global access
window.scrollToSection = scrollToSection;
window.showSection = showSection;

// Initialize easter eggs and performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    addEasterEggs();
    optimizePerformance();
});
