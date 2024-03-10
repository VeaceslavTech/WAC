function showCreateTurnier(req, res){
    res.render("intern/createTurnier.hbs")
}

function createTurnier(req,res){
    const turnierName = req.body.name;
    const startDt = req.body.startDt;
    const endDt = req.body.endDt;
    mysqlConnection.query('INSERT INTO turnier_id (name, startDt, endDt) VALUES (?, ?, ?)',[turnierName, startDt, endDt],
        (error, result) => {

    });
}

module.exports = {
    showCreateTurnier,
    createTurnier
}