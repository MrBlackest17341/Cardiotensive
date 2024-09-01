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
    const navMenu = document.querySelector('.navigation ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
