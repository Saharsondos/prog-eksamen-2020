var json = require('../newUsers.json')
/*
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
*/


function loginController(req, res) {

    json.forEach(user => {
        var email = user.email
        console.log(email)
    try{
        if(email === req.body.email){
            console.log("worked")
            res.redirect("/myHomePage")
            
        } else {
            res.render("login", {errormessage: "Wrong email, or try restarting the server"})
        }
        }catch{
            throw "error"
        }
});
}

module.exports = loginController;
