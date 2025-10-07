document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // 1. Smooth Scrolling for Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the element, accounting for the fixed header height
                const headerHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20; // 20px padding
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Sticky Header Effect (Subtle styling change on scroll)
    const handleScroll = () => {
        // You can add more styling here, but for now, the transition is smooth
        // A class 'scrolled' could be added to change navbar transparency/shadow on scroll.
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case the user loads the page already scrolled
    handleScroll();
});
