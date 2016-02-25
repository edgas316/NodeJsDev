var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// setting Template engine
app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});
app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id });
});
app.get('/api', function(req, res) {
	res.json({ firstname: 'Edwin', lastname: 'Gasparian' });
});

app.listen(process.env.PORT || 3001);
// OR
// app.listen(port);



