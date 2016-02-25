var express = require('express');
var app = express();

// Environment variables: global vars secific 
// to the invironment(server) our code is living in.
var port = process.env.PORT || 3000

// Middlware - is a code that sits between two layers of software.
// In the case of Express, sitting betwin the request and response.
// using middleware:
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
    console.log('Request URL: ' + req.url)
    next()
})

// HTTP method: specifies the types of action the reques wishes to make
// get, post, delete and other... also colled verbs.
app.get('/', function (req, res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>')

// HTTP method: specifies the types of action the reques wishes to make
// get, post, delete and other... also colled venbs.
app.get('/', function (req, res) {
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>')

})

app.get('/api', function (req, res) {
    res.json({firstname:"Edwin", lastname:"Gasparian"})
})


// using variables in url routing
app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>')
})


app.listen(port);

