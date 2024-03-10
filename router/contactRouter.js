let express = require("express")
let router = express.Router()
let contactController = require("../controller/contactController")

router.get("/", contactController.showContact)


module.exports = router