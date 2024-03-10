let express = require("express")
let router = express.Router()
let adminController = require("../controller/adminController")

router.get("/", adminController.showAdmin)

module.exports = router
