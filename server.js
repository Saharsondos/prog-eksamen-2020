const express = require("express");
const app = express();

const exphbs = require("express-handlebars");

//controllere
const signupController = require("./controller/signupController")
const loginController = require("./controller/loginController")
const editController = require("./controller/editController")
//const deleteController = require('./controller/deleteController') <-- virker ikke optimalt.

//const match = require('./static/test')  <-- error $ is not defined

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.urlencoded({extended: false}))
app.use(express.static("./views/images")) //<-- gør så jeg kan bruge billeder i denne mappe i hbs filer. 
app.use("/static", express.static('./static/')); //<-- gør så jeg kan linke hbs til js fil

//brugerne som skal render på hbs /myHomePage
const newUsers = require("./newUsers.json");
const mickeyUser = require("./jsonstorage/mickey_data.json")
const minnieUser = require("./jsonstorage/minnie_data.json")

//sætter hbs op
app.engine("hbs", exphbs({
    defaultLayout: "main",
    extname: ".hbs"
}));

//sætte view
app.set("view engine", ".hbs")


//route/path for velkomssiden
app.get('/', (req, res, next) => {
    res.render("index")
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
app.post('/login', loginController)
    

//homepage

app.get('/myHomePage', (req, res, next) => {
    res.render("homepage", {minnie: minnieUser, mickey: mickeyUser, newUser: newUsers, /*match: match, kan ikke render dette på siden, da matchingalgortimen er lavet med jQuery*/});
})
   
app.post('/myHomePage', (req, res, next) =>{
    res.redirect("/editProfile")
})

//app.delete('/myHomePage', deleteController) <-- API for at slette en bruger, deletecontroller virker dog ikke optimalt. 

//edit profile
app.get('/editProfile', (req, res, next) =>{
    res.render("edit")
})

app.post("/editProfile", editController)

//full profile for minnie
app.get('/seeMinnie', (req,res,next) =>{
    res.render("minnie", {minnie: minnieUser})
})

//full profile for mickey
app.get('/seeMickey', (req,res,next) =>{
    res.render("mickey", {mickey: mickeyUser})
})

//starter port
app.listen(8080, () =>{
  console.log("server started on http://localhost:8080")
})