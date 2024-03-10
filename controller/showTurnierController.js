
const mariadbConnection = require("../config/mariadbConnection");

function showTurnierTabelle(req, res){
    mariadbConnection.query('select t.name,t.startDt,t.endDt,\n' +
        'COUNT(DISTINCT s.spieler1) + COUNT(DISTINCT s.spieler2) - COUNT(DISTINCT CASE WHEN s.spieler1 IS NULL OR s.spieler2 IS NULL THEN 1 END)\n' +
        'AS playerCount,ss.name as status\n' +
        'from turnier_spiel ts\n' +
        'left join turnier t on t.turnier_id = ts.turnier_id\n' +
        'left join spiel s on ts.spiel_id = s.spiel_id\n' +
        'left join status ss on ss.id = t.status',(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Fehler beim laden der Turniere.');
        } else {

            const processedResult = result.map(item => {
                return {
                    ...item,
                    showAlert: item.status === "Offen",
                    showActive: item.status === "Aktiv"
                };
            });
            res.render("intern/showTurniere.hbs", { turniere: processedResult });
        }
    })
}
module.exports = {
    showTurnierTabelle
}