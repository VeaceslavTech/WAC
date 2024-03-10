let express = require("express")
let router = express.Router()
let showTurnierController = require("../controller/showSpieleController")

router.get("/", showTurnierController.showTurnierTabelle)

router.get("/startTurnier",showTurnierController.startTurnier)

module.exports = router