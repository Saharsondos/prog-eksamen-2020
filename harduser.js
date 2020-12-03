//henter modelklasse for user
const User = require("./model/user")
const fs = require("fs")
//const mickeyimg = new Image(100, 100)
//mickeyimg.src = "./view/mickey.jpg"

//hardcider nogle brugere
let user1 = new User ("Minnie123", 23, "female", "male", "minniethemouse@hotmail.com", "Mickey321", "cooking, dancing, singing")
let user2 = new User ("MickeyTheMan", 21, "male", "female", "m1ckey@outlook.com", "Superstar100", "dancing, singing, playing")
let userAarray = [user1, user2]
//console.log(userAarray)

fs.writeFile('minnie_data.json', JSON.stringify(user1), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
fs.writeFile('mickey_data.json', JSON.stringify(user2), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });



module.exports = userAarray;


console.log(userAarray[0].username)