let express = require("express")
let router = express.Router()
let showTurnierController = require("../controller/showTurnierController")

router.get("/", showTurnierController.showTurnierTabelle)

module.exports = router