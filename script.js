document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // Open mobile menu
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
    
    // Close mobile menu
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(event.target) && 
            event.target !== menuToggle) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Scroll animations
    const animateElements = function() {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.85) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    // Set initial styles for animation
    const elementsToAnimate = document.querySelectorAll('[data-aos]');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // Add delay if specified
        if (element.getAttribute('data-aos-delay')) {
            const delay = element.getAttribute('data-aos-delay') + 'ms';
            element.style.transitionDelay = delay;
        }
    });
    
    // Add class for completed animation
    document.addEventListener('aos-animate', function() {
        this.style.opacity = '1';
        this.style.transform = 'translateY(0)';
    });
    
    // Run on load and scroll
    window.addEventListener('load', function() {
        setTimeout(animateElements, 100);
    });
    window.addEventListener('scroll', animateElements);
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    const heroCircles = document.querySelectorAll('.hero-circle');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition < window.innerHeight) {
            heroCircles.forEach((circle, index) => {
                const speed = 0.1 + (index * 0.05);
                const yPos = -scrollPosition * speed;
                circle.style.transform = `translateY(${yPos}px) scale(${1 - scrollPosition * 0.0005})`;
            });
        }
    });
    
    // Add hover effect to event cards
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 15px rgba(139, 92, 246, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Add class for completed animation
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(element => {
        element.addEventListener('transitionend', function() {
            if (this.classList.contains('aos-animate')) {
                this.style.opacity = '1';
                this.style.transform = 'translateY(0)';
            }
        });
    });
});