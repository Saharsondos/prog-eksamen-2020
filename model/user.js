//her defineres min modelklasse for users

class User {
    constructor(username, age, gender, preferredSex, email, password, interests){
        this.username = username;
        this.age = age;
        this.gender = gender;
        this.preferredSex = preferredSex;
        this.email = email;
        this.password = password;
        this.interests = interests
    }
}

//eksporterer User
module.exports = User;