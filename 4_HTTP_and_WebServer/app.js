// TCP/IP Protocols (Sockets and Packet)
// Addresses and Ports: 78.132.160.4:443 // Socket address //
//                     //IP addr    :port//
// HTTP

// HTTP Parser - is a C program embedded in Node

var http = require('http')
var fs = require('fs')

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    var message = 'Hello world...';
    html = html.replace('{Message}', message)
    res.end(html);
    
}).listen(1337, '127.0.0.1', () => {
  console.log(`Server running at http://${'127.0.0.1'}:${1337}`)
  });

