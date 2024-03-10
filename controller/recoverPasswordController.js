const connection = require("../config/mariadbConnection");

function showRecoverSite(req, res) {
    res.render("public/recoverPassword.hbs", { errorMessage: null });
}

function recoverPassword(req, res) {
    const { usernameRecoverSite, recoveryCode, newPassword, confirmNewPassword } = req.body;

    // Validiere die Eingaben, bevor die Datenbankabfrage erfolgt
    if (!usernameRecoverSite || !recoveryCode || !newPassword || !confirmNewPassword) {
        return res.status(400).render('public/recoverPassword.hbs', { errorMessage: 'Alle Felder müssen ausgefüllt sein.' });
    }

    if (newPassword !== confirmNewPassword) {
        return res.status(400).render('public/recoverPassword.hbs', { errorMessage: 'Die eingegebenen Passwörter stimmen nicht überein.' });
    }

    const checkRecoveryCodeQuery = "SELECT * FROM users WHERE username = ? AND recoverykey = ?";
    connection.query(checkRecoveryCodeQuery, [usernameRecoverSite, recoveryCode], (err, results) => {
        if (err) {
            console.error('Datenbankabfragefehler: ' + err.stack);
            return res.status(500).render('public/recoverPassword.hbs', { errorMessage: 'Datenbankfehler' });
        }

        if (results.length === 0) {
            return res.status(400).render('public/recoverPassword.hbs', { errorMessage: 'Ungültiger Benutzername oder Recovery-Code' });
        }

        // Restliche Logik für Passwortänderung
        updatePassword(usernameRecoverSite, newPassword, res);
    });
}

function updatePassword(username, newPassword, res) {
    const updatePasswordQuery = "UPDATE users SET password = ? WHERE username = ?";
    connection.query(updatePasswordQuery, [newPassword, username], (updateErr) => {
        if (updateErr) {
            console.error('Datenbankupdatefehler: ' + updateErr.stack);
            return res.status(500).render('public/recoverPassword.hbs', { errorMessage: 'Fehler beim Aktualisieren des Passworts' });
        }

        return res.render("public/confimPasswordChange.hbs", { errorMessage: null });
    });
}

module.exports = {
    showRecoverSite,
    recoverPassword,
};
