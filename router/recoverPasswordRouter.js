let express = require("express")
let router = express.Router()
let recoverPasswordController = require("../controller/recoverPasswordController")

router.get("/", recoverPasswordController.showRecoverSite)
router.post("/recoverPassword", recoverPasswordController.recoverPassword)


module.exports = router