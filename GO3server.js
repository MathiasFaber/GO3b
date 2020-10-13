var express = require('express')
var cors = require('cors')
var app = express()

var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();


 
app.use(cors())
 
app.get('/', function (req, res) {
  res.json('Hello World!' + " " + add())
})
 
app.listen(3000, function () {
  console.log('Server running on port 3000')
})
