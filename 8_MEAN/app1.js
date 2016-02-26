var express = require('express');
var app = express()

var port = process.env.PORT || 3000;
var people = [
        {
            name:'Edwin Gasparian'
        },
        {
            name:'Marine Gabeielyan'
        },
        {
            name:'David Gasparian'
        }
    ]

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index1', { serverPeople : people})
});
app.listen(port)