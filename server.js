const express = require("express");
const app = express();

const exphbs = require("express-handlebars");

const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.urlencoded({extended: false}))

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

//route for login siden
app.get('/login', (req, res, next) => {
    res.render("login")
})
app.post('/login', (req, res, next) => {
    res.redirect("/")
})

//route for registreringssiden
app.get('/signup', (req, res, next) => {
    res.render("signup")
})

app.post('/signup', (req, res, next) => {
    try{
        users.push({
            username: req.body.username,
            birth: req.body.date,
            sex: req.body.sex,
            email: req.body.email,
            password: req.body.password
        })
        res.redirect("/login")
    } catch{
        res.redirect("/signup")
    }
    console.log(users)
})

app.listen(8080, () =>{
    console.log("litsening at port 8080")
})