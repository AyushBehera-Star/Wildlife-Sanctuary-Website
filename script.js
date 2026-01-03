window.scrollToSection = function(id) {
    const targetElement = document.getElementById(id);
    
    if (targetElement) {
        // Smoothly scrolls the window to the target section based on its ID.
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
};
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});