const mysqlConnection = require('../config/mariadbConnection');

function showLogin(req, res) {
    res.render("public/login.hbs");
}

function checkLogin(req, res) {
    const { username, password } = req.body;

    mysqlConnection.query(
        'SELECT * FROM WAC.users WHERE username = ? AND password = ?',
        [username, password],
        (err, results) => {
            if (err) {
                console.error('Fehler beim Abfragen der Datenbank:', err);
                res.render('error', { message: 'Datenbankfehler' });
                return;
            }
            
            if (results.length > 0) {
                const user = results[0];
                if (user.role === 'admin') {
                    res.redirect('/adminHomepage');
                } else {
                    res.redirect('/userHomepage');
                }
            } else {
                res.render('public/login', { errorMessage: 'Falscher Benutzername oder Passwort. Nochmal versuchen.' });
            }
        }
    );

}

module.exports = {
    showLogin,
    checkLogin
};
