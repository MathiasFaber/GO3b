var express = require('express')
var cors = require('cors')
var app = express()

 
app.use(cors())
 
app.get('/', function (req, res) {
  res.json('Endpoint Match')
})
 
app.listen(5000, function () {
  console.log('Server running on port 5000')
})
