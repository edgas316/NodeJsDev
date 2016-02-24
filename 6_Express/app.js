var express = require('express');
var app = express();

// Environment variables: global vars secific 
// to the invironment(server) our code is living in.
var port = process.env.PORT || 3000

// HTTP method: specifies the types of action the reques wishes to make
// get, post, delete and other... also colled venbs.
app.get('/', function (req, res) {
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>')
})

app.get('/api', function (req, res) {
    res.json({firstname:"Edwin", lastname:"Gasparian"})
})

app.listen(port);

