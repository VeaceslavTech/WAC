const express = require("express")
const hbs = require("hbs");
const bodyParser = require('body-parser');
const app = express()


app.set("view engine", "hbs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let indexRouter = require("./router/indexRouter")
app.use("/", indexRouter)

let qandaRouter = require("./router/qandaRouter")
app.use("/QandA", qandaRouter)

let aboutUsRouter = require("./router/aboutUsRouter")
app.use("/aboutUs", aboutUsRouter)

let contactRouter = require("./router/contactRouter")
app.use("/contact", contactRouter)

let howItWorksRouter = require("./router/howItWorksRouter")
app.use("/howItWorks", howItWorksRouter)

let loginRouter = require("./router/loginRouter")
app.use("/login", loginRouter)

let recoverPasswordRouter = require("./router/recoverPasswordRouter")
app.use("/recover", recoverPasswordRouter)

let registerRouter = require("./router/registerRouter")
app.use("/register", registerRouter)

let adminRouter = require("./router/adminRouter")
app.use("/adminHomepage", adminRouter)

let userHomepageRouter = require("./router/userHomepageRouter")
app.use("/userHomepage", userHomepageRouter)


let turnierRouter = require("./router/turnierRouter")
app.use("/create", turnierRouter)


let showTurnierRouter = require("./router/showTurnierRouter")
app.use("/showTurniere", showTurnierRouter)


let addTournierPlayer = require("./router/addTournierPlayerRouter")
app.use("/addPlayer", addTournierPlayer)



let showSpiele = require("./router/showSpieleRouter")
app.use("/showSpiele", showSpiele)




let showBaum = require("./router/turnierBaumRouter")
app.use("/showTurnierBaum", showBaum)




app.listen(80, ()=>{
    console.log('Server started on port 80...')
})
