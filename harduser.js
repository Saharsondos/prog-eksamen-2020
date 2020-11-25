//henter modelklasse for user
const User = require("./model/user")

//hardcider nogle brugere
let user1 = new User ("Minnie123", 23, "female", "male", "minniethemouse@hotmail.com", "Mickey321")
let user2 = new User ("Mickey The Man", 21, "male", "", "m1ckey@outlook.com", "Superstar100")
let userAarray = [user1, user2]

module.exports = userAarray;