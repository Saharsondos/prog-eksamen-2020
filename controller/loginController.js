const users = require('../harduser');
var json = require('../users.json')
/*
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
*/


function loginController(req, res) {

    json.forEach(user => {
        email = user.email
        password = user.password
        console.log(email)

        if(email === req.body.email){
            //localStorage.setItem(element.id)
            console.log("worked")
            res.redirect("/myHomePage")
            return
        } else{
            res.render("login", {errormessage: "Wrong email or password"})
            
    }
});
}

module.exports = loginController
