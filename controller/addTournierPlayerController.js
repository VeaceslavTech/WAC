
const mariadbConnection = require("../config/mariadbConnection");

function showPlayer(req, res){
    const spielId = req.body.spielId;
    mariadbConnection.query('SELECT spieler1,spieler2 from spiel where spiel_id = ?',[spielId],(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Fehler beim laden der Turniere.');
        } else {
            res.render("intern/addTournierPlayer.hbs", { players: result });
        }
    })

    mariadbConnection.query('SELECT u.user_id as id,vorname as firstName, nachname as lastName' +
        ' FROM users u join user_roles ur on ur.user_id = u.user_id where ur.role_id = 2;',(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Fehler beim laden der Turniere.');
        } else {
            res.render("intern/addTournierPlayer.hbs", { players: result });
        }
    })
}

function addPlayer(req,res){
    var player1 = req.body.player1;
    var player2 = req.body.player2;
    var spielId = req.boy.spielId;
    mariadbConnection.query('UPDATE spiel\n' +
        'SET spieler1 = ?, spieler2 = ? WHERE spiel_id = ?',[player1,player2,spielId],(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Fehler beim laden der Turniere.');
        } else {
            res.render("intern/addTournierPlayer.hbs", { players: result });
        }
    })
}


module.exports = {
    showPlayer,
    addPlayer
}