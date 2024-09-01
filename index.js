document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            window.location.href = 'thank-you.html';
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navigationMenu = document.querySelector('.navigation-menu');

    hamburger.addEventListener('click', () => {
        navigationMenu.classList.toggle('active');
    });
});
