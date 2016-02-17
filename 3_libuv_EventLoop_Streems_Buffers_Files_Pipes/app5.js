// Pipes
// Connecting two streams:
// By writing to one stream what is being read from another.
// In Node you pipe from a Readable stream to Writable stream.
// So you are piping streams and sending a chank of data at a time along your app... 

var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/text.txt');// read stream

var writable = fs.createWriteStream(__dirname + '/text.1.txt');// writable stream

var compressed = fs.createWriteStream(__dirname + '/text.txt.gz');// writable stream

var gzip = zlib.createGzip();
// from => to ...
readable.pipe(writable);

// stream to stream to stream
// using Method Chaining
// from => through => to 
readable.pipe(gzip).pipe(compressed);