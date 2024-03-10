// router.js
const express = require("express");
const router = express.Router();
const loginController = require("../controller/loginController");

router.get("/", loginController.showLogin);

router.post('/checkLogin', loginController.checkLogin);

module.exports = router;
