var express = require('express')
var cors = require('cors')
var app = express()

 
app.use(cors())
//Endpoint for User
app.get('/', function (req, res) {
  res.json('Endpoint User')
})
 
app.listen(3000, function () {
  console.log('Server running on port 3000')
})

//Endpoint for interest
app.get('/', function (req, res) {
  res.json('Endpoint Interest')
})
 
app.listen(4000, function () {
  console.log('Server running on port 4000')
})

//Endpoint for Match
app.get('/', function (req, res) {
  res.json('Endpoint Match')
})
 
app.listen(5000, function () {
  console.log('Server running on port 5000')
})



//Login authentication
var isAuthenticated = isAuthenticated;

function isAuthenticated(req, res, next) {
  if (typeof req.headers.authorization !== "undefined") {
      // retrieve the authorization header and parse out the
      // JWT using the split function
      let token = req.headers.authorization.split(" ")[1];
      let privateKey = fs.readFileSync('./private.pem', 'utf8');
      // Here we validate that the JSON Web Token is valid and has been 
      // created using the same private pass phrase
      jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {
          
          // if there has been an error...
          if (err) {  
              // shut them out!
              res.status(500).json({ error: "Not Authorized" });
              throw new Error("Not Authorized");
          }
          // if the JWT is valid, allow them to hit
          // the intended endpoint
          return next();
      });
  } else {
      // No authorization header exists on the incoming
      // request, return not authorized and throw a new error 
      res.status(500).json({ error: "Not Authorized" });
      throw new Error("Not Authorized");
  }
}