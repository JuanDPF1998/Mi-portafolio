/**
 * PORTFOLIO WEBSITE - INTERACTIVE JAVASCRIPT
 * Features: Dark Mode, Form Validation, Animations, Project Filtering
 */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initThemeToggle();
    initMobileNavigation();
    initScrollAnimations();
    initProjectFiltering();
    initFormValidation();
    initCounterAnimations();
    initSmoothScrolling();
    initBackToTop();
    initTypewriterEffect();
    initParallaxEffect();
});

// ===========================================
// THEME TOGGLE (DARK MODE)
// ===========================================
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Apply saved theme
    if (currentTheme !== savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    // Theme toggle event
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add smooth transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// ===========================================
// MOBILE NAVIGATION
// ===========================================
function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on nav links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===========================================
// SCROLL ANIMATIONS
// ===========================================
function initScrollAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Special handling for different elements
                if (entry.target.classList.contains('project-card')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    entry.target.style.transitionDelay = delay + 'ms';
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-category, .feature-item, .faq-item, .contact-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
        });
    }
}

// ===========================================
// PROJECT FILTERING
// ===========================================
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length === 0 || projectCards.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects with animation
            projectCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                const shouldShow = filter === 'all' || category === filter;
                
                setTimeout(() => {
                    if (shouldShow) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }, index * 50);
            });
        });
    });

    // Initialize project cards with transition
    projectCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
}

// ===========================================
// FORM VALIDATION
// ===========================================
function initFormValidation() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const formInputs = form.querySelectorAll('input, textarea');
    const submitButton = form.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('success-message');

    // Real-time validation
    formInputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            submitForm(form, submitButton, successMessage);
        }
    });

    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        const errorElement = field.parentNode.querySelector('.error-message');
        
        let errorMessage = '';

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            errorMessage = `El campo ${getFieldLabel(fieldName)} es obligatorio`;
        }
        // Email validation
        else if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = 'Por favor, introduce un email válido';
            }
        }
        // Message length validation
        else if (fieldName === 'message' && value && value.length < 10) {
            errorMessage = 'El mensaje debe tener al menos 10 caracteres';
        }

        // Show/hide error
        if (errorMessage) {
            showFieldError(field, errorElement, errorMessage);
            return false;
        } else {
            clearFieldError(field);
            return true;
        }
    }

    function showFieldError(field, errorElement, message) {
        field.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
    }

    function clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.classList.remove('show');
        }
    }

    function getFieldLabel(fieldName) {
        const labels = {
            'name': 'nombre',
            'email': 'email',
            'subject': 'asunto',
            'message': 'mensaje'
        };
        return labels[fieldName] || fieldName;
    }

    function submitForm(form, button, successMessage) {
        // Show loading state
        button.classList.add('btn-loading');
        button.disabled = true;

        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Hide form and show success message
            form.style.display = 'none';
            successMessage.classList.add('show');
            
            // Reset button state
            button.classList.remove('btn-loading');
            button.disabled = false;
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Reset form after delay
            setTimeout(() => {
                form.reset();
                form.style.display = 'flex';
                successMessage.classList.remove('show');
                formInputs.forEach(input => clearFieldError(input));
            }, 5000);
        }, 1500);
    }
}

// ===========================================
// COUNTER ANIMATIONS
// ===========================================
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-target]');
    if (counters.length === 0) return;

    const observerOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const stepTime = 50;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }
}

// ===========================================
// SMOOTH SCROLLING
// ===========================================
function initSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===========================================
// BACK TO TOP BUTTON
// ===========================================
function initBackToTop() {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Volver arriba');
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 1.2rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .back-to-top:hover {
            background-color: var(--primary-dark);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }
        
        .back-to-top.show {
            opacity: 1;
            visibility: visible;
        }
        
        @media (max-width: 768px) {
            .back-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(backToTop);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Scroll to top functionality
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================================
// TYPEWRITER EFFECT
// ===========================================
function initTypewriterEffect() {
    const typewriterElement = document.querySelector('.hero-subtitle');
    if (!typewriterElement) return;

    // Get texts based on current language
    const getTypewriterTexts = () => {
        const lang = window.languageSystem ? window.languageSystem.getCurrentLanguage() : 'es';
        return {
            es: [
                'Desarrollador Web especializado en JavaScript y Python',
                'Experto en HTML5 y CSS3',
                'Creador de Experiencias Web Interactivas',
                'Apasionado por el Código Limpio'
            ],
            en: [
                'Web Developer specialized in JavaScript and Python',
                'Expert in HTML5 and CSS3',
                'Creator of Interactive Web Experiences',
                'Passionate about Clean Code'
            ]
        }[lang];
    };
    
    const texts = getTypewriterTexts();

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let nextDelay = typeSpeed;

        if (isDeleting) {
            nextDelay = deleteSpeed;
        }

        if (!isDeleting && charIndex === currentText.length) {
            nextDelay = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(typeWriter, nextDelay);
    }

    // Start typewriter effect after a short delay
    setTimeout(typeWriter, 1000);
    
    // Listen for language changes to restart typewriter
    document.addEventListener('languageChanged', function() {
        const newTexts = getTypewriterTexts();
        if (JSON.stringify(texts) !== JSON.stringify(newTexts)) {
            // Reset typewriter with new texts
            texts.length = 0;
            texts.push(...newTexts);
            textIndex = 0;
            charIndex = 0;
            isDeleting = false;
        }
    });
}

// ===========================================
// PARALLAX EFFECT
// ===========================================
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.hero-image-placeholder');
    
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

// Debounce function to limit function calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Format number with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ===========================================
// ADDITIONAL INTERACTIVE FEATURES
// ===========================================

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Add hover effect to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card, .skill-category, .feature-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Console message for developers
console.log(`
🚀 ¡Hola desarrollador! 
👋 Bienvenido al portfolio de Euclides Marin
💼 Si estás revisando el código, ¡me encantaría saber qué piensas!
📧 Contacto: euclides.marin@ejemplo.com
🔗 GitHub: github.com/euclides-marin

💡 Este sitio está construido con:
   - HTML5 semántico
   - CSS3 moderno con variables personalizadas
   - JavaScript vanilla (sin frameworks)
   - Diseño responsivo
   - Modo oscuro
   - Animaciones suaves
   - Accesibilidad optimizada

⭐ ¡Gracias por visitar!
`);

// Performance monitoring (optional)
if ('performance' in window && 'measure' in window.performance) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Página cargada en ${loadTime}ms`);
        }, 0);
    });
}

// Service Worker registration (for PWA if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('🔧 ServiceWorker registrado:', registration.scope);
            })
            .catch(function(error) {
                console.log('❌ ServiceWorker falló:', error);
            });
    });
}
