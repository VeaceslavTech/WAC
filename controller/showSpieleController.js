
const mariadbConnection = require("../config/mariadbConnection");

function showTurnierTabelle(req, res){
    mariadbConnection.query('SELECT s.spiel_id,concat(spieler1.vorname, \' \', spieler1.nachname) as spieler1Name,\n' +
        'concat(spieler2.vorname, \' \', spieler2.nachname) as spieler2Name,\n' +
        'ss.name as status,' +
        'spieler1.user_id as player1,' +
        'spieler2.user_id as player2 FROM spiel s\n' +
        'left join users spieler1 on s.spieler1 = spieler1.user_id\n' +
        'left join users spieler2 on s.spieler2= spieler2.user_id\n' +
        'join status ss on s.status = ss.id',(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Fehler beim laden der Turniere.');
        } else {

            const processedResult = result.map(item => {
                return {
                    ...item,
                    showEintragen: item.status === "Offen" && item.spieler1Name === null || item.spieler2Name === null,
                    showAlert: item.status === "Offen",
                    showActive: item.status === "Aktiv"
                };
            });
            res.render("intern/showSpiele.hbs", { spiele: processedResult });
        }
    })
}
function startTurnier(req, res) {
    // Update the status in the turnier_spiel table
    mariadbConnection.query('update spiel set status = 1 where spiel_id in(select spiel_id from turnier_spiel) ', (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Fehler beim Starten des Turniers.');
        } else {
            // If successful, then update the status in the turnier table
            mariadbConnection.query('UPDATE turnier SET status = 1 WHERE turnier_id = 1', (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Fehler beim Starten des Turniers.');
                } else {
                    // Both updates are successful, now you can decide what to do next
                    // For instance, you might want to fetch updated data and render a page or redirect somewhere

                    // This is a placeholder, you might want to replace it with actual logic
                    res.send("Turnier gestartet!");
                }
            });
        }
    });
}


    module.exports = {
        showTurnierTabelle,startTurnier
}