/**
 * MULTILANGUAGE SUPPORT
 * Translation system for Spanish/English portfolio
 */

// Translation object with all text content
const translations = {
    es: {
        // Navigation
        nav_home: "Inicio",
        nav_about: "Sobre Mí",
        nav_projects: "Proyectos",
        nav_cv: "CV",
        nav_contact: "Contacto",
        
        // Hero Section
        hero_greeting: "¡Hola! Soy <span class=\"text-primary\">Euclides Marin</span>",
        hero_title: "Desarrollador Web especializado en JavaScript y Python",
        hero_description: "Apasionado por crear experiencias web increíbles con JavaScript, Python, HTML y CSS. Enfocado en desarrollo frontend interactivo y backend eficiente.",
        hero_btn_projects: "Ver Proyectos",
        hero_btn_contact: "Contactarme",
        
        // About Section
        about_title: "Sobre Mí",
        about_p1: "Soy Euclides Marin, un desarrollador web apasionado especializado en JavaScript y Python. Me enfoco en crear aplicaciones web interactivas y eficientes usando HTML5, CSS3 y las mejores prácticas de desarrollo.",
        about_p2: "Mi objetivo es siempre entregar código limpio, escalable y que proporcione la mejor experiencia de usuario posible. Disfruto combinando la lógica de Python con la interactividad de JavaScript.",
        
        // Stats
        stat_projects: "Proyectos Completados",
        stat_experience: "Años de Experiencia",
        stat_clients: "Clientes Satisfechos",
        
        // Skills Section
        skills_title: "Mis Tecnologías",
        
        // Projects Section
        projects_title: "Mis Proyectos",
        filter_all: "Todos",
        filter_web: "Web",
        filter_mobile: "Mobile",
        filter_backend: "Backend",
        
        // Project Cards
        project1_title: "E-commerce Platform",
        project1_desc: "Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
        project2_title: "Task Management App",
        project2_desc: "Aplicación web para gestión de tareas con funciones de colaboración en tiempo real.",
        project3_title: "REST API Service",
        project3_desc: "API robusta para aplicaciones móviles con autenticación JWT y documentación completa.",
        
        // Footer
        footer_text: "&copy; 2025 Mi Portfolio. Hecho con ♥ por Euclides Marin",
        
        // Contact Page
        contact_title: "Contáctame",
        contact_subtitle: "¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él!",
        contact_form_title: "Envíame un mensaje",
        contact_form_name: "Nombre completo *",
        contact_form_email: "Email *",
        contact_form_subject: "Asunto",
        contact_form_message: "Mensaje *",
        contact_form_submit: "Enviar Mensaje",
        contact_info_title: "Información de contacto",
        contact_success_title: "¡Mensaje enviado con éxito!",
        contact_success_text: "Gracias por contactarme. Te responderé lo antes posible.",
        
        // CV Page
        cv_title: "CV - Euclides Marin",
        cv_position: "Desarrollador Web especializado en JavaScript y Python",
        cv_description: "Desarrollador web apasionado especializado en JavaScript y Python, con experiencia en crear aplicaciones web interactivas y eficientes usando HTML5, CSS3 y las mejores prácticas de desarrollo.",
        cv_skills_title: "Habilidades Técnicas",
        cv_experience_title: "Experiencia Profesional",
        cv_education_title: "Educación",
        cv_projects_title: "Proyectos Destacados",
        cv_languages_title: "Idiomas",
        cv_download: "Descargar CV en PDF"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About Me",
        nav_projects: "Projects",
        nav_cv: "CV",
        nav_contact: "Contact",
        
        // Hero Section
        hero_greeting: "Hello! I'm <span class=\"text-primary\">Euclides Marin</span>",
        hero_title: "Web Developer specialized in JavaScript and Python",
        hero_description: "Passionate about creating incredible web experiences with JavaScript, Python, HTML and CSS. Focused on interactive frontend development and efficient backend solutions.",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Contact Me",
        
        // About Section
        about_title: "About Me",
        about_p1: "I'm Euclides Marin, a passionate web developer specialized in JavaScript and Python. I focus on creating interactive and efficient web applications using HTML5, CSS3 and development best practices.",
        about_p2: "My goal is always to deliver clean, scalable code that provides the best possible user experience. I enjoy combining Python's logic with JavaScript's interactivity.",
        
        // Stats
        stat_projects: "Completed Projects",
        stat_experience: "Years of Experience",
        stat_clients: "Satisfied Clients",
        
        // Skills Section
        skills_title: "My Technologies",
        
        // Projects Section
        projects_title: "My Projects",
        filter_all: "All",
        filter_web: "Web",
        filter_mobile: "Mobile",
        filter_backend: "Backend",
        
        // Project Cards
        project1_title: "E-commerce Platform",
        project1_desc: "Complete e-commerce platform with shopping cart, payments and administration panel.",
        project2_title: "Task Management App",
        project2_desc: "Web application for task management with real-time collaboration features.",
        project3_title: "REST API Service",
        project3_desc: "Robust API for mobile applications with JWT authentication and complete documentation.",
        
        // Footer
        footer_text: "&copy; 2025 My Portfolio. Made with ♥ by Euclides Marin",
        
        // Contact Page
        contact_title: "Contact Me",
        contact_subtitle: "Do you have a project in mind? I'd love to hear about it!",
        contact_form_title: "Send me a message",
        contact_form_name: "Full name *",
        contact_form_email: "Email *",
        contact_form_subject: "Subject",
        contact_form_message: "Message *",
        contact_form_submit: "Send Message",
        contact_info_title: "Contact information",
        contact_success_title: "Message sent successfully!",
        contact_success_text: "Thank you for contacting me. I'll get back to you as soon as possible.",
        
        // CV Page
        cv_title: "CV - Euclides Marin",
        cv_position: "Web Developer specialized in JavaScript and Python",
        cv_description: "Passionate web developer specialized in JavaScript and Python, with experience creating interactive and efficient web applications using HTML5, CSS3 and development best practices.",
        cv_skills_title: "Technical Skills",
        cv_experience_title: "Professional Experience",
        cv_education_title: "Education",
        cv_projects_title: "Featured Projects",
        cv_languages_title: "Languages",
        cv_download: "Download PDF CV"
    }
};

// Current language state
let currentLanguage = localStorage.getItem('portfolio-language') || 'es';

// Initialize language system
function initLanguageSystem() {
    // Set initial language
    setLanguage(currentLanguage);
    
    // Add event listeners to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            
            // Update active button
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Set active button based on current language
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${currentLanguage}"]`);
    if (activeBtn) {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        activeBtn.classList.add('active');
    }
}

// Set language function
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLanguage = lang;
    localStorage.setItem('portfolio-language', lang);
    
    // Update document language attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Update all elements with data-lang-key attribute
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = translations[lang][key];
        
        if (translation) {
            element.innerHTML = translation;
        }
    });
    
    // Update page title if on specific pages
    updatePageTitle(lang);
    
    // Update typewriter effect texts
    updateTypewriterTexts(lang);
}

// Update page title based on current page and language
function updatePageTitle(lang) {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    let title = '';
    
    switch(filename) {
        case 'index.html':
        case '':
            title = lang === 'es' ? 'Mi Portfolio - Euclides Marin' : 'My Portfolio - Euclides Marin';
            break;
        case 'contact.html':
            title = lang === 'es' ? 'Contacto - Mi Portfolio' : 'Contact - My Portfolio';
            break;
        case 'cv.html':
            title = lang === 'es' ? 'CV - Euclides Marin' : 'CV - Euclides Marin';
            break;
        default:
            if (filename.includes('project')) {
                title = lang === 'es' ? 'Proyecto - Mi Portfolio' : 'Project - My Portfolio';
            }
    }
    
    if (title) {
        document.title = title;
    }
}

// Update typewriter effect texts for different languages
function updateTypewriterTexts(lang) {
    const typewriterTexts = {
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
    };
    
    // Update the global texts array if it exists (for typewriter effect)
    if (window.typewriterTexts) {
        window.typewriterTexts = typewriterTexts[lang];
    }
}

// Export language functions for use in other scripts
window.languageSystem = {
    setLanguage,
    getCurrentLanguage: () => currentLanguage,
    getTranslation: (key) => translations[currentLanguage][key] || key,
    translations
};

// Update form labels dynamically
function updateFormLabels(lang) {
    const formLabels = {
        name: { es: 'Nombre completo *', en: 'Full name *' },
        email: { es: 'Email *', en: 'Email *' },
        subject: { es: 'Asunto', en: 'Subject' },
        message: { es: 'Mensaje *', en: 'Message *' }
    };
    
    Object.keys(formLabels).forEach(fieldName => {
        const label = document.querySelector(`label[for="${fieldName}"]`);
        if (label && formLabels[fieldName][lang]) {
            label.textContent = formLabels[fieldName][lang];
        }
    });
    
    // Update placeholders
    const placeholders = {
        subject: { es: 'Oportunidad de trabajo, consulta, etc.', en: 'Job opportunity, consultation, etc.' },
        message: { es: 'Cuéntame sobre tu proyecto o consulta...', en: 'Tell me about your project or inquiry...' }
    };
    
    Object.keys(placeholders).forEach(fieldName => {
        const input = document.getElementById(fieldName);
        if (input && placeholders[fieldName][lang]) {
            input.placeholder = placeholders[fieldName][lang];
        }
    });
}

// Enhanced setLanguage function
const originalSetLanguage = setLanguage;
setLanguage = function(lang) {
    originalSetLanguage(lang);
    updateFormLabels(lang);
    
    // Dispatch custom event for other scripts to listen
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSystem();
});