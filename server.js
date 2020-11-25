const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

const exphbs = require("express-handlebars");
const signupController = require("./controller/signupController")
const loginController = require("./controller/loginController")
const authController = require ("./controller/authController")

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.urlencoded({extended: false}))


const User = require("./model/user");
const users = []
//sætter hbs op
app.engine("hbs", exphbs({
    defaultLayout: "main",
    extname: ".hbs"
}));
//sætte view
app.set("view engine", ".hbs")

app.get('/', (req, res, next) => {
    res.render("index", {username: req.body.username})
    
})


//route for registreringssiden
app.get('/signup', (req, res, next) => {
    res.render("signup")
})

app.post('/signup', signupController)

//route for login siden
app.get('/login', (req, res, next) => {
    res.render("login")
})
app.post('/login', loginController, (req, res) =>{
    
})
    


//homepage
app.get('/myHomePage', authController, (req, res, next) => {
    //res.render("homepage")
    res.json({ "message" : "THIS IS SUPER SECRET, DO NOT SHARE!" })

})
    
  

app.listen(8080, () =>{
  console.log("server started on http://localhost:8080")
})