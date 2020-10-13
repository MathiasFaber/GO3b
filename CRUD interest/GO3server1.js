var express = require('express')
var cors = require('cors')
var app = express()

 
app.use(cors())
 
app.get('/', function (req, res) {
  res.json('Endpoint Interest')
})
 
app.listen(4000, function () {
  console.log('Server running on port 4000')
})
