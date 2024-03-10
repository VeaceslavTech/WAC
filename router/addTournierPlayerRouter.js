let express = require("express")
let router = express.Router()
let addTournierPlayerController = require("../controller/addTournierPlayerController")

router.get("/", addTournierPlayerController.showPlayer)
router.post("/", addTournierPlayerController.addPlayer)


module.exports = router