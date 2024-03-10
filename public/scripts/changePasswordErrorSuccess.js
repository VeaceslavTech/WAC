// error-popup.js
document.addEventListener("DOMContentLoaded", function () {
    var errorMessage = "{{errorMessage}}";

    if (errorMessage) {
        document.getElementById("error-popup").classList.add("show");
        document.getElementById("error-message").innerText = errorMessage;

        setTimeout(function () {
            document.getElementById("error-popup").classList.remove("show");
        }, 3000);
    }
});
