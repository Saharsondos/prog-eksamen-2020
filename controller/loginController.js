const users = require('../harduser');
const signupController = require("./signupController")
var jwt = require('jsonwebtoken');



function loginController(req, res) {
    //Normalt vil man kigge om password og brugernavn stemmer, men det springer vi over
    var user = users[0]
    //normalt vil man gemme secret key et andet sted. 
    //Her laves en token, som dÃ¸r om en time 
    const token = jwt.sign({email: user.email, userID: user.id}, 'my_secret', { expiresIn: '1h' })
    /*res.json({
        token: token
    })*/
    console.log(token)
    res.redirect("/myHomePage")
}
module.exports = loginController