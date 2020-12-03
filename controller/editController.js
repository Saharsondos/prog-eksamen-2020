const editUsers = [];
var fs = require('fs');

function editController(req, res){
    try{
        editUsers.push({
            id: Date.now().toString(),
            username: req.body.username,
            age: req.body.age,
            sex: req.body.sex,
            preferredSex: req.body.preferredSex,
            interests: req.body.interests,
            email: req.body.email,
        })
        //brugeren oprettes, og man bliver sendt til login siden
        res.redirect("/myHomePage")
        
    } catch{
        //brugeren kunne ikke oprettes, og man forbliver på signup siden
        res.redirect("/editProfile").reload()
        console.log("something went wrong")
    }
    console.log(editUsers)
    //gemmer de oprettede brugere i filen "users.txt"
    fs.writeFile('newUsers.json', JSON.stringify(editUsers), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

module.exports = editController;

//efter man har submittet sine ændringer, skal man genstarte serveren, før de vises på siden. 





