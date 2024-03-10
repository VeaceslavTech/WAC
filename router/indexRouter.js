let express = require("express")
let router = express.Router()
let indexController = require("../controller/indexController")

router.get("/", indexController.showIndex)


module.exports = router