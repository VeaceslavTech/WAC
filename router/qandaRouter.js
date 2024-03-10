let express = require("express")
let router = express.Router()
let qandaController = require("../controller/qandaController")

router.get("/", qandaController.showQandA)


module.exports = router