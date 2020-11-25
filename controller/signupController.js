const bcrypt = require("bcrypt")
const users = require('../harduser');

function hashPassword(req, res){
    
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
                        birthDate: req.body.date,
                        sex: req.body.sex,
                        email: req.body.email,
                        password: hash
                    })
                    res.redirect("/login")
                } catch{
                    res.redirect("/signup")
                }
                console.log(users)
            }
            
        }); 
}

module.exports = hashPassword;