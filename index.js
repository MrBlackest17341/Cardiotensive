document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            window.location.href = 'thank-you.html';
        });
    }
});
