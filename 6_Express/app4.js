// Structuring the Application...
// Using express-generator

// REST API - An architectural style for building APIs...
// Querystring and Post Parameters
var express = require('express');
var app = express();
var apiController = require('./controllers/apiController')
var htmlController = require('./controllers/htmlController')
var port = process.env.PORT || 3000;

// setting Template engine
app.set('view engine', 'ejs');

// static files - css, js, images etc... - middleware
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});

// including controllers/modules into app..
htmlController(app)
apiController(app)

// Running the server
app.listen(process.env.PORT || 3001);
// OR
// app.listen(port);




