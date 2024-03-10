let express = require("express")
let router = express.Router()
let turnierController = require("../controller/turnierController")

router.get("/", turnierController.showCreateTurnier);
router.post("/createTurnier",turnierController.createTurnier)

module.exports = router