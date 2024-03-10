document.addEventListener("DOMContentLoaded", function () {
    var togglePasswordButtons = document.querySelectorAll('.toggle-password');

    togglePasswordButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var targetId = button.getAttribute('data-target');
            var passwordInput = document.getElementById(targetId);

            // Passwort-Sichtbarkeit umschalten
            passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

            // Icon ändern basierend auf der Sichtbarkeit des Passworts
            button.classList.toggle('bi-eye');
            button.classList.toggle('bi-eye-slash');
        });
    });
});
