const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'datenbank-wac.cdgukqgiglrm.eu-west-3.rds.amazonaws.com',
    user: 'admin',
    password: 'WAC-Connects1907',
    database: 'WAC'
});

connection.connect(err => {
    if (err) {
        console.error('Datenbankverbindung fehlgeschlagen: ' + err.stack);
        return;
    }
    console.log('Erfolgreich mit der Datenbank verbunden');
});

module.exports = connection;
