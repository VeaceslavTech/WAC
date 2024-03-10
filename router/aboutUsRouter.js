let express = require("express")
let router = express.Router()
let aboutUsController = require("../controller/aboutUsController")

router.get("/", aboutUsController.showAboutUs)

module.exports = router