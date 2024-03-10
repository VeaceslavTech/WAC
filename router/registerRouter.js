let express = require("express")
let router = express.Router()
let registerController = require("../controller/registerController")

router.get("/", registerController.showRegister)


module.exports = router