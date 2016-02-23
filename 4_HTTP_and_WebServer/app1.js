var http = require('http')
var fs = require('fs')
var ip = '127.0.0.1'; // local host ip...
var port = 1337;

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
    
}).listen(port, ip);