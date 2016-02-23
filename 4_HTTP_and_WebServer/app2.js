// API - a set of tools for building software application
// or in the case of web application it is a set if URLs which 
// accepts and sends data via HTTP and TCP/IP
// Endpoint - one URL in a web API
 
// Outputing JSON
var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'application/json'})
    var obj = {
        firstname: "Edwin",
        lastname : "Gasparian"
    }
    res.end(JSON.stringify(obj))// serialize the object...
}).listen(1337, '127.0.0.1')