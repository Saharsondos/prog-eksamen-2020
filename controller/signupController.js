const bcrypt = require("bcrypt")
const users = [];
var fs = require('fs');

function signupController(req, res){
    //hasher password
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            //hvis password ikke kunne krypteres, sendes en fejl
            if (err) {
              return res.status(500).json({
                error: err
              });
            } else{
                //hvis password kan kypteres, oprettes brugeren
                try{
                    users.push({
                        id: Date.now().toString(),
                        username: req.body.username,
                        age: req.body.age,
                        sex: req.body.sex,
                        preferredSex: req.body.preferredSex,
                        interests: req.body.interests,
                        email: req.body.email,
                        password: hash
                    })
                    //brugeren oprettes, og man bliver sendt til login siden
                    res.redirect("/login")
                } catch{
                    //brugeren kunne ikke oprettes, og man forbliver på signup siden
                    res.redirect("/signup")
                    console.log("something went wrong")
                }
                console.log(users)
                //gemmer de oprettede brugere i filen "users.txt"
                fs.writeFileSync('newUsers.json', JSON.stringify(users), function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  });
            }
            
        }); 
}




module.exports = signupController;