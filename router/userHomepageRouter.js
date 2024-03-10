let express = require("express")
let router = express.Router()
let userHomepageRouter = require("../controller/userHomepageController")

router.get("/", userHomepageRouter.showUserHomepage)

module.exports = router