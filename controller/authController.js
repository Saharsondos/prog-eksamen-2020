const fs = require("fs");
const jwt = require("jsonwebtoken");

/*creating a function which will make sure, 
that requests have the authorization header set.*/
function isAuthorized(req, res, next){
    //has authorization header been set?
    if(typeof req.headers.authorization !== "undefined"){
        //retrieve token from header
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync("./private.pem", "utf8");
        //verify token
        jwt.verify(token, privateKey, { algorithm: "HS256"}, (err, decoded) =>{
            //if token has not been verified successfully 
            if(err){
                res.status(500).json({ error: "Not authorized" });
            }
            //if token has been verified successfully
            console.log(decoded);
            return next(); //<- will let incoming request pass through.
            
        })
    //if authorization header has not been set, respond with error
    } else{
        res.status(500).json({ error: "Not authorized" });
    }
}

module.exports = isAuthorized;