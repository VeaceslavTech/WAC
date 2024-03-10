document.addEventListener("DOMContentLoaded", function () {
    // Überprüfe, ob eine Fehlermeldung vorhanden ist
    var errorMessage = "{{errorMessage}}";
    if (errorMessage) {
        // Zeige den Popup-Container an
        var errorPopup = document.getElementById("error-popup");
        errorPopup.classList.add("show");

        // Verzögere das Ausblenden des Popups (z.B. nach 3 Sekunden)
        setTimeout(function () {
            console.log('Timeout wird ausgeführt');
            errorPopup.classList.remove("show");
        }, 3000);
    }
});
