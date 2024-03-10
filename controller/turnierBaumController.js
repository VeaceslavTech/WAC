const mariadbConnection = require("../config/mariadbConnection");

function showTurnierBaum(req, res){
    getTurnierSpiele((err, spiele) => {
        if (err) {
            console.error(err);
            res.status(500).send('Fehler beim Laden der Turniere.');
        } else {
            const spielerDetails = spiele.map(spiel => getSpieler(spiel));
            res.render("intern/turnierBaum.hbs", { spiele: spielerDetails });
        }
    });

}




// function createTurnier(req,res){
//     const turnierName = req.body.name;
//     const startDt = req.body.startDt;
//     const endDt = req.body.endDt;
//     mysqlConnection.query('INSERT INTO turnier_id (name, startDt, endDt) VALUES (?, ?, ?)',[turnierName, startDt, endDt],
//         (error, result) => {
//
//         });
// }

function getSpieler(spielId){
    mariadbConnection.query('SELECT spieler1,spieler2 from spiel where spiel_id = ?',[spielId],(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Fehler beim laden der Turniere.');
            return err;
        } else {
            return result;
        }
    })
}
function getTurnierSpiele(callback) {
    mariadbConnection.query('SELECT spiel_id FROM turnier_spiel WHERE turnier_id = 1', (err, result) => {
        if (err) {
            console.error(err);
            callback(err, null); // Pass the error to the callback
        } else {
            callback(null, result); // Pass the result to the callback
        }
    });
}

module.exports = {
    showTurnierBaum
}