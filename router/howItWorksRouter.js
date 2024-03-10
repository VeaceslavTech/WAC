let express = require("express")
let router = express.Router()
let howItWorksController = require("../controller/howItWorksController")

router.get("/", howItWorksController.showHowItWorks)

module.exports = router