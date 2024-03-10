let express = require("express")
let router = express.Router()
let turnierBaumController = require("../controller/turnierBaumController")

router.get("/", turnierBaumController.showTurnierBaum);

module.exports = router